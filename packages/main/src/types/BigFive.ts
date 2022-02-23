export interface BigFive {
    agreeableness: Agreeableness;
    conscientiousness: EmotionalStability;
    emotional_stability: Conscientiousness;
    extraversion: Extraversion;
    openness: Openness;
}

export interface TeamBigFive {
    agreeableness: BigFiveTraitTeam;
    conscientiousness: BigFiveTraitTeam;
    emotional_stability: BigFiveTraitTeam;
    extraversion: BigFiveTraitTeam;
    openness: BigFiveTraitTeam;
}

export interface BigFiveParsed {
    [index: string]: number;
    agreeableness: number;
    conscientiousness: number;
    emotional_stability: number;
    extraversion: number;
    openness: number;
}
export interface BigFiveTrait {
    letter: string;
    score: number;
    short_description: string;
    traits: string[];
}
export interface BigFiveTraitTeam {
    average: number;
    percentage: number;
    total_score: number;
}

export interface Agreeableness extends BigFiveTrait {
    compassionate: number;
    detached: number;
}
export interface EmotionalStability extends BigFiveTrait {
    confident: number;
    nervous: number;
}
export interface Conscientiousness extends BigFiveTrait {
    careless: number;
    organized: number;
}
export interface Extraversion extends BigFiveTrait {
    outgoing: number;
    reserved: number;
}
export interface Openness extends BigFiveTrait {
    curious: number;
    cautious: number;
}
