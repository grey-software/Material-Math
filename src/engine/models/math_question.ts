import { Operator } from '../math_questions/expression/models'

export enum ChallengeType {
  Expression,
  Factorization,
  Binary,
  Hexadecimal,
}

export enum Difficulty {
  Basic = 'basic',
  Normal = 'normal',
  Advanced = 'advanced',
}

export enum PracticeMode {
  QUESTIONS = 'questions',
  TIME = 'time'
}

export interface ChallengeModel {
  type: ChallengeType;
  difficulty: Difficulty;
  infix: string;
  latex: string;
}

export interface ChallengeParams {
  difficulty: Difficulty;
  operators: Operator[];
}

export type GenerateChallenge = (params: ChallengeParams) => ChallengeModel;
