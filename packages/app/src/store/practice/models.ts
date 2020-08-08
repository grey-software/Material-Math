import { ChallengeType, Difficulty } from '../../engine/models/math_question'
import { Operator } from '../../engine/math_questions/expression/models'

export interface PracticeOptions {
  difficulty: Difficulty;
  operators: Operator[];
  challengeTypes: ChallengeType[];
}

export interface QuestionReport {
    question: string, 
    answer: string,
    correctAnswer: string,
    correct: boolean,
    attempts: number,
    skipped: boolean,
    duration: Number,
    operators: Operator[],
    challengeType: ChallengeType
}

export interface PracticeReport {
    date: Date,
    questions: QuestionReport[]
}