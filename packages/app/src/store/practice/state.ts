import { ChallengeModel, ChallengeType, Difficulty, PracticeMode } from '../../engine/models/math_question'
import { Operator } from '../../engine/math_questions/expression/models'
import { PracticeReport } from "./models";

export interface PracticeState {
  question: ChallengeModel;
  difficulty: Difficulty;
  operators: Operator[];
  challengeTypes: ChallengeType[];
  answer: string;
  streak: number;

  // We show feedback when the user enters a correct or incorrect answer
  showingFeedback: boolean;

  // We show feedback when the user enters a correct or incorrect answer
  practiceMode: PracticeMode;
  practiceQuestionCount: number;

  // Practice session's time in seconds
  practiceTime: number;
  practiceTimeLeft: number;

  // Keeps track of number of correct questions
  practiceCorrectQuestionCount: number;

  /*
  The ID of the practice session timer. We'll use this value 
  with the clearInterval() method to cancel the timer
  */
  practiceTimerId: number;
  practiceSessionActive: boolean;
  practiceLastQuestionCorrect: boolean;
  practiceAttemptedQuestions: PracticeReport;
  practiceStartQuestionTime: Date;
}