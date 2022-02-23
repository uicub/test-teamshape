export interface Schwartz {
  answers: Answers;
  demotivated_by: string[];
  motivated_by: string[];
  top_3: TopAnswers;
}
export interface TeamSchwartz {
  average: Answers;
  totals: Answers;
  top_3: TopAnswers;
}
export interface Answers {
  achievement: number;
  benevolence: number;
  conformity: number;
  hedonism: number;
  power: number;
  security: number;
  self_direction: number;
  stimulation: number;
  tradition: number;
  universalism: number;
}

export interface TopAnswers {
  achievement?: number;
  benevolence?: number;
  conformity?: number;
  hedonism?: number;
  power?: number;
  security?: number;
  self_direction?: number;
  stimulation?: number;
  tradition?: number;
  universalism?: number;
}
