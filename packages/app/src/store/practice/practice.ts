import { Module } from 'vuex'
import { RootState } from '../index'
import { ChallengeModel, Difficulty, PracticeMode } from '../../engine/models/math_question'
import { Operator } from '../../engine/math_questions/expression/models'
import { PracticeState } from "./state"
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

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
  PRACTICE_ATTEMPTED_QUESTIONS = 'practiceAttemptedQuestions',
  PRACTICE_START_QUESTION_TIME = 'practiceStartQuestionTime'
}

export enum PracticeActions {
  INIT = 'init',
  NEW_QUESTION = 'newQuestion',
  SET_ANSWER = 'setAnswer',
  CHECK_ANSWER = 'checkAnswer',
  ON_CORRECT = 'onCorrect',
  ON_INCORRECT = 'onIncorrect',
  SET_PRACTICE_MODE = 'setPracticeMode',
  SET_PRACTICE_QUESTION_COUNT = 'setPracticeQuestionCount',
  SET_PRACTICE_TIME = 'setPracticeTime',
  SET_PRACTICE_TIMER_ID = 'setPracticeTimeId',
  FINISH_PRACTICE_SESSION = 'finishPracticeSession',
  PRACTICE_TIME_TICK = 'practiceTimeTick',
  SKIP_QUESTION = 'skipQuestion',
  SET_DIFFICULTY = 'setDifficulty',
  SELECT_ALL_CONCEPTS = 'selectAllConcepts',
  RESET_CONCPETS = 'resetConcepts'
}

export enum PracticeMutations {
  SET_PRACTICE_OPTIONS = 'setPracticeOptions',
  SET_QUESTION = 'setQuestion',
  SET_ANSWER = 'setAnswer',
  SET_STREAK = 'setStreak',
  SET_SHOWING_FEEDBACK = 'setShowingFeedback',
  SET_PRACTICE_MODE = 'setPracticeMode',
  SET_PRACTICE_QUESTION_COUNT = 'setPracticeQuestionCount',
  SET_PRACTICE_TIME = 'setPracticeTime',
  SET_PRACTICE_TIME_LEFT = 'setPracticeTimeLeft',
  SET_PRACTICE_TIMER_ID = 'setPracticeTimerId',
  SET_PRACTICE_CORRECT_QUESTION_COUNT = 'setPracticeCorrectQuestionCount',
  RESET_PRACTICE_SESSION = 'resetPracticeSession',
  SET_PRACTICE_SESSION_ACTIVE = 'setPracticeSessionActive',
  SET_DIFFICULTY = 'setDifficulty',
  SET_OPERATOR_ENABLED = 'setOperatorEnabled',
  SET_OPERATOR_DISABLED = 'setOperatorDisabled',
  SET_PRACTICE_LAST_QUESTION_CORRECT = 'setPracticeLastQuestionCorrect',
  ADD_PRACTICE_ATTEMPTED_QUESTION = "addPracticeAttemptedQuestion",
  SET_PRACTICE_START_QUESTION_TIME = "setpracticeStartQuestionTime",
  RESET_PRACTICE_ATTEMPTED_QUESTION = "resetPracticeAttemptedQuestion"
}

export const PracticeModule: Module<PracticeState, RootState> = {
  state: {
    question: {} as ChallengeModel,
    difficulty: Difficulty.Normal,
    operators: [Operator.Addition, Operator.Subtraction],
    challengeTypes: [],
    answer: '',
    streak: 0,
    showingFeedback: false,
    practiceMode: PracticeMode.TIME,
    practiceQuestionCount: 10,
    practiceTime: 60,
    practiceTimeLeft: 0,
    practiceCorrectQuestionCount: 0,
    practiceTimerId: 0,
    practiceSessionActive: false,
    practiceLastQuestionCorrect: false,
    practiceAttemptedQuestions: {date: new Date(), questions: []},
    practiceStartQuestionTime: new Date()
  },
  getters,
  actions,
  mutations
}