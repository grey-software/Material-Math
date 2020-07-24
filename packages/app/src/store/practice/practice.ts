import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '../index'
import { ChallengeModel, ChallengeType, Difficulty, PracticeMode } from '../../engine/models/math_question'
import { generateExpressionChallenge } from '../../engine/math_questions/expression'
import { Operator } from '../../engine/math_questions/expression/models'
import { evaluate } from 'mathjs'
import {PracticeGetters, getters} from "./getters"
import {PracticeActions, actions} from "./actions"
import {PracticeMutations, mutations} from "./mutations"
import {PracticeState} from "./state"
import { PracticeOptions } from "./models"


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
    practiceAttemptedQuestions: []
  },
  getters,
  actions,
  mutations
}
