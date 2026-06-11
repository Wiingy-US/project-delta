export type Audience = 'child' | 'self' | 'other'

export type LeadState = {
  audience: Audience | null
  grade: string | null
  learnerType: string | null
  goal: string | null
  goalLabel: string | null
  match: string | null
  course: string | null
  courseLabel: string | null
  name: string | null
  email: string | null
  slotDate: Date | null
  slotTime: string | null
  additionalRequirements: string | null
  tz: string
  utm: Record<string, string>
}

export type ScreenId =
  | 'audience'
  | 'grade'
  | 'learnerType'
  | { type: 'goal'; setKey: string }
  | 'contact'
  | 'schedule'
  | 'thanks'

export const initialLead = (): LeadState => ({
  audience: null,
  grade: null,
  learnerType: null,
  goal: null,
  goalLabel: null,
  match: null,
  course: null,
  courseLabel: null,
  name: null,
  email: null,
  slotDate: null,
  slotTime: null,
  additionalRequirements: null,
  tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
  utm: {},
})
