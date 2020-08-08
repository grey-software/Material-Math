import { GetterTree } from 'vuex'
import {PracticeState} from "./state"

export const getters: GetterTree<PracticeState, any> = {
  questionLatex: (state) => state.question.latex,
  answer: (state) => state.answer,
  streak: (state) => state.streak,
  operators: (state) => state.operators,
  difficulty: (state) => state.difficulty,
  practiceMode: (state) => state.practiceMode,
  practiceQuestionCount: (state) => state.practiceQuestionCount,
  practiceTime: (state) => state.practiceTime,
  practiceTimeLeft: (state) => state.practiceTimeLeft,
  practiceCorrectQuestionCount: (state) => state.practiceCorrectQuestionCount,
  showingFeedback: (state) => state.showingFeedback,
  practiceSessionActive: (state) => state.practiceSessionActive,
  practiceLastQuestionCorrect: (state) => state.practiceLastQuestionCorrect,
  practiceAttemptedQuestions: (state) => state.practiceAttemptedQuestions,
  practiceStartQuestionTime: (state) => state.practiceStartQuestionTime
}