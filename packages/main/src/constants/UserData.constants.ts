export const schwartzTypes = {
  achievement: 'achievement',
  benevolence: 'benevolence',
  conformity: 'conformity',
  hedonism: 'hedonism',
  power: 'power',
  security: 'security',
  selfDirection: 'self_direction',
  stimulation: 'stimulation',
  tradition: 'tradition',
  universalism: 'universalism',
} as const;

export const schwartzLabels = {
  [schwartzTypes.achievement]: 'Achievement',
  [schwartzTypes.benevolence]: 'Benevolence',
  [schwartzTypes.conformity]: 'Conformity',
  [schwartzTypes.hedonism]: 'Hedonism',
  [schwartzTypes.power]: 'Power',
  [schwartzTypes.security]: 'Security',
  [schwartzTypes.selfDirection]: 'Self Direction',
  [schwartzTypes.stimulation]: 'Stimulation',
  [schwartzTypes.tradition]: 'Tradition',
  [schwartzTypes.universalism]: 'Universalism',
} as const;
