import { useCallback, useRef } from 'react'
import { TIME_SLOTS } from './config'
import { formatAvailabilityDate, formatTimeSlot, getSlotCountForDay } from './utils'

function IconChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  )
}

type TutorAvailabilityProps = {
  days: Date[]
  selectedDay: Date | null
  selectedTime: string | null
  onSelectDay: (day: Date) => void
  onSelectTime: (time: string) => void
  onConfirm: () => void
  sessionDuration?: string
}

export function TutorAvailability({
  days,
  selectedDay,
  selectedTime,
  onSelectDay,
  onSelectTime,
  onConfirm,
  sessionDuration = '55 mins',
}: TutorAvailabilityProps) {
  const dateScrollRef = useRef<HTMLDivElement>(null)

  const scrollRow = useCallback((ref: React.RefObject<HTMLDivElement | null>, direction: -1 | 1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }, [])

  return (
    <div className="avail-card">
      <div className="avail-card__body">
        <div className="avail-section-header">
          <div className="avail-section-label">
            <span>DATE</span>
          </div>
          <div className="avail-nav">
            <button type="button" className="avail-nav-btn" aria-label="Previous dates" onClick={() => scrollRow(dateScrollRef, -1)}>
              <IconChevronLeft />
            </button>
            <button type="button" className="avail-nav-btn" aria-label="Next dates" onClick={() => scrollRow(dateScrollRef, 1)}>
              <IconChevronRight />
            </button>
          </div>
        </div>

        <div className="avail-date-scroll" ref={dateScrollRef}>
          {days.map((day) => {
            const active = selectedDay?.toDateString() === day.toDateString()
            const slots = getSlotCountForDay(day)

            return (
              <button
                key={day.toISOString()}
                type="button"
                className={`avail-date-btn${active ? ' is-active' : ''}`}
                onClick={() => onSelectDay(day)}
              >
                <span className="avail-date-btn__day">{day.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                <span className="avail-date-btn__date">{formatAvailabilityDate(day)}</span>
                <span className="avail-date-btn__slots">{slots} slots</span>
              </button>
            )
          })}
        </div>

        <div className="avail-section-header">
          <div className="avail-section-label">
            <span>TIME</span>
            <span className="avail-section-meta">{sessionDuration}</span>
          </div>
        </div>

        <div className="avail-time-scroll">
          {TIME_SLOTS.map((time) => {
            const active = selectedTime === time
            return (
              <button
                key={time}
                type="button"
                className={`avail-time-btn${active ? ' is-active' : ''}`}
                onClick={() => onSelectTime(time)}
              >
                {formatTimeSlot(time)}
              </button>
            )
          })}
        </div>
      </div>

      <div className="avail-card__footer">
        <button
          type="button"
          className="trial-cta avail-cta avail-cta-in-grid"
          disabled={!selectedDay || !selectedTime}
          onClick={onConfirm}
        >
          Book Free Trial
        </button>
      </div>
    </div>
  )
}
