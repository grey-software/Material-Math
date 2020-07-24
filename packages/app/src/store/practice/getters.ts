import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import {PracticeState} from "./state"

export enum PracticeGetters {
  QUESTION_LATEX = 'questionLatex',
  ANSWER = 'answer',
  STREAK = 'streak',
  OPERATORS = 'operators',
  DIFFICULTY = 'difficulty',
  PRACTICE_MODE = 'practiceMode',
  PRACTICE_QUESTION_COUNT = 'practiceQuestionCount',
  PRACTICE_TIME = 'practiceTime',
  PRACTICE_TIME_LEFT = 'practiceTimeLeft',
  PRACTICE_CORRECT_QUESTION_COUNT = 'practiceCorrectQuestionCount',
  PRACTICE_SESSION_ACTIVE = 'practiceSessionActive',
  SHOWING_FEEDBACK = 'showingFeedback',
  PRACTICE_LAST_QUESTION_CORRECT = 'practiceLastQuestionCorrect',
  PRACTICE_ATTEMPTED_QUESTIONS = 'practiceAttemptedQuestions'
}

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
  practiceAttemptedQuestions: (state) => state.practiceAttemptedQuestions
}