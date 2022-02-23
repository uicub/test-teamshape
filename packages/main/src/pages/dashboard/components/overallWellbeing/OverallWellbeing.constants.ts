export const types = {
  mentalHealth: 'mental_health',
  peopleAndCulture: 'people_and_culture',
  leadership: 'leadership',
} as const;

export const constants = {
  strings: {
    [types.leadership]: 'Leadership',
    [types.mentalHealth]: 'Mental Health',
    [types.peopleAndCulture]: 'People & Culture',
  },
  colors: {
    [types.leadership]: '#F3781A',
    [types.mentalHealth]: '#F1466E',
    [types.peopleAndCulture]: '#4674F1',
  },
  labels: {
    peopleCulture: 'People & Culture',
    leadership: 'Leadership',
    mentalHealth: 'Mental Health',
  },
} as const;
