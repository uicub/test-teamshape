export const constants = {
    dashboard: "dashboard",
    yourTeam: "yourTeam",
    surveys: "surveys",
    feed: "feed",
    settings: "settings",
    user: "user",
    myplan: "myplan",
} as const;

export const strings = {
    [constants.dashboard]: "Dashboard",
    [constants.yourTeam]: "Your Team",
    [constants.surveys]: "Surveys",
    [constants.feed]: "Feed",
    [constants.settings]: "Settings",
} as const;

export const titles = {
    [constants.dashboard]: "Team Page",
    [constants.yourTeam]: "Team Members",
    [constants.surveys]: "Pulse Survey",
    [constants.feed]: "Feed",
    [constants.settings]: "Settings",
    [constants.user]: "Profile",
    [constants.myplan]: "My Plan",
} as const;

export const menuItems = [
    { key: 1, name: constants.dashboard },
    { key: 2, name: constants.yourTeam },
    { key: 3, name: constants.surveys },
];
