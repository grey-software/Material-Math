import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {generateExpressionChallenge} from '../engine/math_questions/expression'
import {
  Difficulty,
  ChallengeParams,
  ChallengeModel,
} from '../engine/models/math_question'
import {Operator} from '../engine/math_questions/expression/models'
import {PracticeModule} from '../store/practice/practice'

Vue.use(Vuex)

export interface RootState {
  version: string
}

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    PracticeModule,
  },
}

export default new Vuex.Store<RootState>(store)
