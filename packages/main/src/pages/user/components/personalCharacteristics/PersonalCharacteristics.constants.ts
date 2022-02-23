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
    labelA: 'Challenging / Detached',
    labelB: 'Friendly / Compassionate',
  },
  [types.conscientiousness]: {
    propertyA: 'confident',
    propertyB: 'nervous',
    labelA: 'Secure / Confident',
    labelB: 'Sensitive / Nervous',
  },
  [types.emotionalStability]: {
    propertyA: 'curious',
    propertyB: 'cautious',
    labelA: 'Inventive / Curious',
    labelB: 'Consistent / Cautious',
  },
  [types.openness]: {
    propertyA: 'organized',
    propertyB: 'careless',
    labelA: 'Efficient / Organized',
    labelB: 'Easy going / Careless',
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
    label: 'Neurotism',
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
