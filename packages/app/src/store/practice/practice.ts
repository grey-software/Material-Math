import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '../index'
import { ChallengeModel, ChallengeType, Difficulty } from '../../engine/models/math_question'
import { generateExpressionChallenge } from '../../engine/math_questions/expression'
import { Operator } from '../../engine/math_questions/expression/models'
import { evaluate } from 'mathjs'

export interface PracticeOptions {
  difficulty: Difficulty;
  operators: Operator[];
  challengeTypes: ChallengeType[];
}

export enum PracticeGetters {
  QUESTION_LATEX = 'questionLatex',
  ANSWER = 'answer',
  STREAK = 'streak',
  OPERATORS = 'operators'
}

export enum PracticeActions {
  INIT = 'init',
  NEW_QUESTION = 'newQuestion',
  SET_ANSWER = 'setAnswer',
  CHECK_ANSWER = 'checkAnswer',
  ON_CORRECT = 'onCorrect',
  ON_INCORRECT = 'onIncorrect',
}

enum PracticeMutations {
  SET_PRACTICE_OPTIONS = 'setPracticeOptions',
  SET_QUESTION = 'setQuestion',
  SET_ANSWER = 'setAnswer',
  SET_STREAK = 'setStreak',
  SET_SHOWING_FEEDBACK = 'setShowingFeedback',
}

export interface PracticeState {
  question: ChallengeModel;
  difficulty: Difficulty;
  operators: Operator[];
  challengeTypes: ChallengeType[];
  answer: string;
  streak: number;

  // We show feedback when the user enters a correct or incorrect answer
  showingFeedback: boolean;
}

const getters: GetterTree<PracticeState, any> = {
  questionLatex: (state) => state.question.latex,
  answer: (state) => state.answer,
  streak: (state) => state.streak,
  operators: (state) => state.operators
}

const mutations: MutationTree<PracticeState> = {
  setQuestion (state: PracticeState, question: ChallengeModel) {
    state.question = Object.assign({}, question)
  },
  setAnswer (state: PracticeState, answer: string) {
    state.answer = answer
  },
  setStreak (state: PracticeState, streak: number) {
    state.streak = streak
  },
  setPracticeOptions (state: PracticeState, options: PracticeOptions) {
    state.operators = options.operators
    state.challengeTypes = options.challengeTypes
    state.difficulty = options.difficulty
  },
  setShowingFeedback (state: PracticeState, isShowingFeedback: boolean) {
    state.showingFeedback = isShowingFeedback
  },
  setOperatorEnabled (state: PracticeState, operator: Operator){
      state.operators.push(operator)
  },
  setOperatorDisabled (state: PracticeState, operator: Operator){
      state.operators = state.operators.filter(op => op !== operator)  
  }
}

const newQuestion = (difficulty: Difficulty, operators: Operator[]) => {
  return generateExpressionChallenge({ difficulty, operators })
}

const actions: ActionTree<PracticeState, any> = {
  init (context, options: PracticeActions) {
    context.commit(PracticeMutations.SET_PRACTICE_OPTIONS, options)
  },
  newQuestion (context) {
    context.commit(
      PracticeMutations.SET_QUESTION,
      newQuestion(context.state.difficulty, context.state.operators)
    )
  },
  setAnswer (context, answer: string) {
    context.commit(PracticeMutations.SET_ANSWER, answer)
  },
  checkAnswer (context) {
    console.log(context.state.answer)
    console.log(context.state.question.infix)
    if (evaluate(`${context.state.answer} == ${context.state.question.infix}`)) {
      context.dispatch(PracticeActions.ON_CORRECT)
    } else {
      context.dispatch(PracticeActions.ON_INCORRECT)
    }
  },

  /*
 On a correct or incorrect answer, we clear the answer, increment/reset the streak, and set the state of the
 practice session to be in 'Showing Feedback' mode which includes animations or encouragement prompts
 */
  onCorrect (context) {
    context.commit(PracticeMutations.SET_STREAK, context.state.streak + 1)
    context.commit(PracticeMutations.SET_ANSWER, '')
    context.dispatch(PracticeActions.NEW_QUESTION)
    context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, true)
    setTimeout(() => context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, false), 350)
  },
  onIncorrect (context) {
    context.commit(PracticeMutations.SET_STREAK, 0)
    context.commit(PracticeMutations.SET_ANSWER, '')
    context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, true)
    setTimeout(() => context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, false), 350)
  }
}

export const PracticeModule: Module<PracticeState, RootState> = {
  state: {
    question: {} as ChallengeModel,
    difficulty: Difficulty.Normal,
    operators: [Operator.Addition, Operator.Subtraction],
    challengeTypes: [],
    answer: '',
    streak: 0,
    showingFeedback: false
  },
  getters,
  actions,
  mutations
}
