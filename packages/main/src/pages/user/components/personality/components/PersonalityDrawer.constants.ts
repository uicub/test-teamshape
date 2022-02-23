export const types = {
  contributionToOrganization: 'contribution_to_organization',
  howOthersSee: 'how_others_see',
  leadershipStyle: 'leadership_style',
  onATeam: 'on_a_team',
  valuesAndMotivation: 'values_and_motivation',
} as const;

export const constants = {
  strings: {
    title: 'Personality Description',
    [types.contributionToOrganization]: 'Contribution to Organization',
    [types.howOthersSee]: 'How Others See',
    [types.leadershipStyle]: 'Leadership Style',
    [types.onATeam]: 'On a Team',
    [types.valuesAndMotivation]: 'Values and Motivations',
  },
} as const;
