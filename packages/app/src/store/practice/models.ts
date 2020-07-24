import { ChallengeModel, ChallengeType, Difficulty, PracticeMode } from '../../engine/models/math_question'
import { Operator } from '../../engine/math_questions/expression/models'

export interface PracticeOptions {
  difficulty: Difficulty;
  operators: Operator[];
  challengeTypes: ChallengeType[];
}

export interface QuestionReport {
    question: string, 
    answer: string, 
    answerCorrect: boolean,
    attempts: number,
    skips: number
}

export interface PracticeReport {
    date: Date
    length: number,
    questions: QuestionReport[]
}