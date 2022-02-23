export const types = {
  extraversion: 'extraversion',
  agreeableness: 'agreeableness',
  conscientiousness: 'conscientiousness',
  emotionalStability: 'emotional_stability',
  openness: 'openness',
} as const;

export const properties = {
  [types.extraversion]: {
    propertyA: 'outgoing',
    propertyB: 'reserved',
    labelA: 'Outgoing / Energetic',
    labelB: 'Solitary / Reserved',
  },
  [types.agreeableness]: {
    propertyA: 'detached',
    propertyB: 'compassionate',

    labelB: 'Friendly / Compassionate',
    labelA: 'Challenging / Detached',
  },
  [types.conscientiousness]: {
    propertyA: 'organized',
    propertyB: 'careless',
    labelA: 'Efficient / Organized',
    labelB: 'Easy going / Careless',
  },
  [types.emotionalStability]: {
    propertyA: 'confident',
    propertyB: 'nervous',
    labelA: 'Secure / Confident',
    labelB: 'Sensitive / Nervous',
  },
  [types.openness]: {
    propertyA: 'curious',
    propertyB: 'cautious',
    labelA: 'Inventive / Curious',
    labelB: 'Consistent / Cautious',
  },
} as const;

export const strings = {
  [types.extraversion]: {
    label: 'Extraversion',
    explanation: 'Tendency to seek the company of others and talk',
  },
  [types.agreeableness]: {
    label: 'Agreeableness',
    explanation: 'Measure of ones trusting and helpful nature',
  },
  [types.conscientiousness]: {
    label: 'Conscientiousness',
    explanation: 'Tendency to be organized and dependable',
  },
  [types.emotionalStability]: {
    label: 'Emotional Stability',
    explanation: 'Predisposition to psychological stress',
  },
  [types.openness]: {
    label: 'Openness',
    explanation:
      'Degree of intellectual curiosity, creativity and preference of novelty',
  },
} as const;

export const general = {
  colorScheme: 'PP',
} as const;

export const descriptions = {
  [types.extraversion]:
    'This trait show the engagement with external world and how person creates energy from socialising.',
  [types.agreeableness]:
    'The agreeableness reflects individual differences and how team members value getting along with others.',
  [types.conscientiousness]:
    "Show the level of your team member's self-discipline and strive for achievement.",
  [types.emotionalStability]:
    'The emotional stability of the team members and dealing with negative experience emotions, such as anger, anxiety, or depression.',
  [types.openness]:
    'Openness to experience show how your team appreciates adventure, unusual ideas curiosity and variety of new experience.',
} as const;
