export const COURSES = [
  { id: 'algebra1', label: 'Algebra 1' },
  { id: 'geometry', label: 'Geometry' },
  { id: 'algebra2', label: 'Algebra 2' },
  { id: 'precalc', label: 'Precalculus' },
  { id: 'calculus', label: 'Calculus' },
  { id: 'stats', label: 'Statistics' },
] as const

export const GRADES = [
  { id: 'k5', label: 'Elementary', sub: 'Grades K–5' },
  { id: '68', label: 'Middle school', sub: 'Grades 6–8' },
  { id: '912', label: 'High school', sub: 'Grades 9–12' },
  { id: 'college', label: 'College', sub: 'Undergraduate' },
] as const

export const LEARNER_TYPES = [
  { id: 'hs', label: 'High school student' },
  { id: 'college', label: 'College student' },
  { id: 'adult', label: 'Adult learner / professional' },
] as const

export type GoalOption = {
  id: string
  label: string
  match: string
  courses?: boolean
  courseSet?: readonly { id: string; label: string }[]
}

export const GOALS: Record<string, readonly GoalOption[]> = {
  child_k5: [
    { id: 'fundamentals', label: 'Catch up on fundamentals', match: 'elementary math foundations' },
    { id: 'homework', label: 'Homework help', match: 'elementary math' },
    { id: 'enrichment', label: 'Get ahead / enrichment', match: 'advanced elementary math' },
    { id: 'confidence', label: 'Build confidence in math', match: 'elementary math' },
  ],
  child_68: [
    { id: 'grades', label: 'Improve grades', match: 'middle school math' },
    { id: 'homework', label: 'Homework help', match: 'middle school math' },
    { id: 'algebra', label: 'Prepare for algebra / get ahead', match: 'pre-algebra and algebra readiness' },
    { id: 'catchup', label: 'Catch up after falling behind', match: 'middle school math' },
  ],
  child_912: [
    { id: 'grades', label: 'Improve grades in a course', match: 'high school math', courses: true },
    { id: 'sat_act', label: 'SAT / ACT prep', match: 'SAT & ACT math' },
    { id: 'ap', label: 'AP course support', match: 'AP Calculus and AP Precalculus' },
    { id: 'homework', label: 'Homework help', match: 'high school math' },
  ],
  child_college: [
    {
      id: 'course',
      label: 'Pass a specific course',
      match: 'college-level math',
      courses: true,
      courseSet: [
        { id: 'calculus', label: 'Calculus' },
        { id: 'stats', label: 'Statistics' },
        { id: 'linalg', label: 'Linear Algebra' },
      ],
    },
    { id: 'exam', label: 'Exam prep', match: 'college math exams' },
    { id: 'prereq', label: 'Catch up on prerequisites', match: 'college math foundations' },
  ],
  self_hs: [
    { id: 'grades', label: 'Better grades in a course', match: 'high school math', courses: true },
    { id: 'sat_act', label: 'SAT / ACT prep', match: 'SAT & ACT math' },
    { id: 'ap', label: 'AP course support', match: 'AP Calculus and AP Precalculus' },
    { id: 'homework', label: 'Homework help', match: 'high school math' },
  ],
  self_college: [
    {
      id: 'course',
      label: 'Pass a course',
      match: 'college-level math',
      courses: true,
      courseSet: [
        { id: 'calculus', label: 'Calculus' },
        { id: 'stats', label: 'Statistics' },
        { id: 'linalg', label: 'Linear Algebra' },
      ],
    },
    { id: 'exam', label: 'Exam prep', match: 'college math exams' },
    { id: 'foundation', label: 'Build a stronger foundation', match: 'college math foundations' },
  ],
  self_adult: [
    { id: 'gre_gmat', label: 'GRE / GMAT quant prep', match: 'GRE & GMAT quantitative reasoning' },
    { id: 'work', label: 'Skills for work', match: 'math skills for work' },
    { id: 'school', label: 'Returning to school', match: 'college math foundations' },
    { id: 'interest', label: 'Personal interest', match: 'math' },
  ],
}

export const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
] as const
