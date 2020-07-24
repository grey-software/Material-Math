import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import {PracticeState} from "./state"
import { ChallengeModel, ChallengeType, Difficulty, PracticeMode } from '../../engine/models/math_question'
import { Operator } from '../../engine/math_questions/expression/models'
import { PracticeOptions, QuestionReport } from "./models"

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
  ADD_PRACTICE_ATTEMPTED_QUESTION = "addPracticeAttemptedQuestion"
}

export const mutations: MutationTree<PracticeState> = {
  setQuestion(state: PracticeState, question: ChallengeModel) {
    state.question = Object.assign({}, question)
  },
  setAnswer(state: PracticeState, answer: string) {
    state.answer = answer
  },
  setStreak(state: PracticeState, streak: number) {
    state.streak = streak
  },
  setPracticeOptions(state: PracticeState, options: PracticeOptions) {
    state.operators = options.operators
    state.challengeTypes = options.challengeTypes
    state.difficulty = options.difficulty
    state.practiceTimeLeft = state.practiceTime
  },
  setShowingFeedback(state: PracticeState, isShowingFeedback: boolean) {
    state.showingFeedback = isShowingFeedback;
  },
  setOperatorEnabled(state: PracticeState, operator: Operator) {
    state.operators.push(operator)
  },
  setOperatorDisabled(state: PracticeState, operator: Operator) {
    state.operators = state.operators.filter(op => op !== operator)
  },
  setPracticeMode(state: PracticeState, mode: PracticeMode) {
    state.practiceMode = mode;
  },
  setPracticeQuestionCount(state: PracticeState, questionCount: number) {
    state.practiceQuestionCount = questionCount;
  },
  setPracticeTime(state: PracticeState, time: number) {
    state.practiceTime = time;
  },
  setPracticeTimeLeft(state: PracticeState, time: number) {
    state.practiceTimeLeft = time;
  },
  setPracticeCorrectQuestionCount(state: PracticeState, count: number) {
    state.practiceCorrectQuestionCount += 1;
  },
  setPracticeTimerId(state: PracticeState, id: number) {
    state.practiceTimerId = id;
  },
  resetPracticeSession(state: PracticeState) {
    state.streak = 0;
    state.practiceCorrectQuestionCount = 0;
    state.practiceTimerId = 0;
    state.practiceTimeLeft = 0;
    state.practiceSessionActive = false;
  },
  setPracticeSessionActive(state: PracticeState, value: boolean) {
    state.practiceSessionActive = value;
  },
  setDifficulty(state: PracticeState, difficulty: Difficulty) {
    state.difficulty = difficulty;
  },
  setPracticeLastQuestionCorrect(state: PracticeState, practiceLastQuestionCorrect: boolean) {
    state.practiceLastQuestionCorrect = practiceLastQuestionCorrect;
  },
  addPracticeAttemptedQuestion(state: PracticeState, payload: QuestionReport) {
    state.practiceAttemptedQuestions.questions.push(payload)
  },
  createQuestionReport(state: PracticeState) {
    
  }
}