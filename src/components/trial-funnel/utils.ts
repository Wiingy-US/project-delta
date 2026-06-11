import type { LeadState } from './types'
import { GRADES, LEARNER_TYPES } from './config'

export function subj(lead: LeadState) {
  if (lead.audience === 'self') return 'you'
  if (lead.audience === 'other') return 'the learner'
  return 'your child'
}

export function subjCap(lead: LeadState) {
  const s = subj(lead)
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function poss(lead: LeadState) {
  if (lead.audience === 'self') return 'your'
  if (lead.audience === 'other') return "the learner's"
  return "your child's"
}

export function audienceLabel(audience: LeadState['audience']) {
  if (audience === 'child') return 'My child'
  if (audience === 'self') return 'Myself'
  return 'Someone else'
}

export function levelLabel(lead: LeadState) {
  if (lead.grade) {
    if (lead.grade === 'professional') return 'Professional'
    return GRADES.find((g) => g.id === lead.grade)?.label ?? lead.grade
  }
  return LEARNER_TYPES.find((t) => t.id === lead.learnerType)?.label ?? ''
}

export function getUpcomingDays(count = 8) {
  const days: Date[] = []
  const now = new Date()
  for (let i = 1; i <= count; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    days.push(d)
  }
  return days
}

/** Mock availability count for a given day (deterministic per date). */
export function getSlotCountForDay(date: Date) {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
  return (seed % 4) + 3
}

export function formatAvailabilityDate(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function formatTimeSlot(time: string) {
  const match = /^(\d{1,2}):(\d{2}) (AM|PM)$/.exec(time)
  if (!match) return time
  return `${match[1].padStart(2, '0')}:${match[2]} ${match[3]}`
}

export function formatSessionTimeRange(time: string, durationMins = 55) {
  const match = /^(\d{1,2}):(\d{2}) (AM|PM)$/.exec(time)
  if (!match) return time

  let hours = Number(match[1]) % 12
  const minutes = Number(match[2])
  if (match[3] === 'PM') hours += 12

  const start = new Date(2000, 0, 1, hours, minutes)
  const end = new Date(start.getTime() + durationMins * 60_000)
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })

  return `${fmt(start)} – ${fmt(end)}`
}

export function buildMeetingLink(lead: LeadState) {
  if (!lead.slotDate || !lead.slotTime) return ''

  const datePart = [
    lead.slotDate.getFullYear(),
    String(lead.slotDate.getMonth() + 1).padStart(2, '0'),
    String(lead.slotDate.getDate()).padStart(2, '0'),
  ].join('')

  const timePart = lead.slotTime.replace(/[:\s]/g, '').toLowerCase()
  const guest = (lead.email ?? 'guest').split('@')[0].replace(/[^a-z0-9]/gi, '').slice(0, 8).toLowerCase()

  return `https://meet.wiingy.com/trial/${datePart}-${timePart}-${guest || 'class'}`
}

export function buildCalendarUrl(slotDate: Date, slotTime: string) {
  const match = /(\d+):00 (AM|PM)/.exec(slotTime)
  if (!match) return '#'
  let h = Number(match[1]) % 12
  if (match[2] === 'PM') h += 12
  const start = new Date(slotDate)
  start.setHours(h, 0, 0, 0)
  const end = new Date(start.getTime() + 60 * 60_000)
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '')
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Wiingy — Free Math Trial Class')}&dates=${fmt(start)}/${fmt(end)}&details=${encodeURIComponent('Your free 1:1 math trial class with a Wiingy expert tutor. Class link arrives by email.')}`
}
