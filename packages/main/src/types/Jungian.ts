export interface Jungian {
    letters: string;
    short_description: string;
    long_description: Description;
    traits: string[];
    live_outer_life: OuterLife;
    make_decisions: Decisions;
    social_preferences: Social;
    take_information: Information;
}
export interface Trait {
    letter: string;
    score: number;
}

export interface Description {
    [index: string]: string;
    contribution_to_organization: string;
    how_others_see: string;
    leadership_style: string;
    on_a_team: string;
    values_and_motivation: string;
}

export interface OuterLife extends Trait {
    judging: number;
    perceiving: number;
}
export interface Social extends Trait {
    extrovert: number;
    introvert: number;
}
export interface Information extends Trait {
    sensing: number;
    intuition: number;
}
export interface Decisions extends Trait {
    feeling: number;
    thinking: number;
}
