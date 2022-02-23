export const types = {
    mentalHealth: "mental_health",
    peopleAndCulture: "people_and_culture",
    leadership: "leadership",
    activity: "activity",
} as const;

export const constants = {
    strings: {
        [types.activity]: "Activity this month",
        [types.leadership]: "Leadership",
        [types.mentalHealth]: "Mental Health",
        [types.peopleAndCulture]: "People & Culture",
    },
    colors: {
        [types.activity]: "#35B201",
        [types.leadership]: "#F3781A",
        [types.mentalHealth]: "#F1466E",
        [types.peopleAndCulture]: "#4674F1",
    },
} as const;
