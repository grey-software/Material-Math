import { ActionTree } from 'vuex'
import {PracticeState } from "./state"
import { Difficulty, PracticeMode } from '../../engine/models/math_question'
import { Operator } from '../../engine/math_questions/expression/models'
import { PracticeMutations, PracticeActions, PracticeGetters } from "./practice"
import { generateExpressionChallenge } from '../../engine/math_questions/expression'
import { evaluate } from 'mathjs'

export const actions: ActionTree<PracticeState, any> = {
  init(context, options: PracticeActions) {
    context.commit(PracticeMutations.SET_PRACTICE_SESSION_ACTIVE, true)
    context.commit(PracticeMutations.SET_PRACTICE_OPTIONS, options)
    if (context.state.practiceMode === PracticeMode.TIME) {
      const practiceTimerId = setInterval(() => context.dispatch(PracticeActions.PRACTICE_TIME_TICK), 1000)
      context.commit(PracticeMutations.SET_PRACTICE_TIMER_ID, practiceTimerId)
    }
  },
  practiceTimeTick(context) {
    const newTimeLeft = context.state.practiceTimeLeft - 1
    if (newTimeLeft == 0) {
      context.dispatch(PracticeActions.FINISH_PRACTICE_SESSION)
    } else {
      context.commit(PracticeMutations.SET_PRACTICE_TIME_LEFT, newTimeLeft)
    }
  },
  newQuestion(context) {
    context.commit(
      PracticeMutations.SET_QUESTION,
      newQuestion(context.state.difficulty, context.state.operators)
    )
    context.commit(
      PracticeMutations.SET_PRACTICE_START_QUESTION_TIME,
      new Date()
    )
    console.log(context.state.practiceStartQuestionTime)
  },
  setAnswer(context, answer: string) {
    context.commit(PracticeMutations.SET_ANSWER, answer)
  },
  checkAnswer(context) {
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
  onCorrect(context) {
    context.commit(PracticeMutations.SET_PRACTICE_CORRECT_QUESTION_COUNT, context.state.practiceCorrectQuestionCount + 1)
    context.commit(PracticeMutations.SET_STREAK, context.state.streak + 1)
    context.commit(PracticeMutations.SET_PRACTICE_LAST_QUESTION_CORRECT, true)
    const endTime = new Date()
    const duration = Math.round((endTime.getTime() - context.state.practiceStartQuestionTime.getTime()) / 1000)
    const questionReport = {
      question: context.state.question.infix,
      answer: context.state.answer,
      correctAnswer: evaluate(context.state.question.infix),
      correct: true,
      attempts: 1,
      duration: duration
    }
    context.commit(PracticeMutations.SET_ANSWER, '')
    context.commit(PracticeMutations.ADD_PRACTICE_ATTEMPTED_QUESTION, questionReport)
    context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, true)
    context.dispatch(PracticeActions.NEW_QUESTION)
    if(context.state.practiceCorrectQuestionCount == context.state.practiceQuestionCount && context.state.practiceMode == PracticeMode.QUESTIONS){
      context.commit(PracticeMutations.RESET_PRACTICE_SESSION)
    }
    setTimeout(() => context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, false), 600)
  },
  onIncorrect(context) {
    context.commit(PracticeMutations.SET_STREAK, 0)
    context.commit(PracticeMutations.SET_PRACTICE_LAST_QUESTION_CORRECT, false)
    const endTime = new Date()
    const duration = Math.round((endTime.getTime() - context.state.practiceStartQuestionTime.getTime()) / 1000)
    console.log(context.state.answer);
    const questionReport = {
      question: context.state.question.infix,
      answer: context.state.answer,
      correctAnswer: evaluate(context.state.question.infix),
      correct: false,
      attempts: 1,
      duration: duration
    }
    context.commit(PracticeMutations.SET_ANSWER, '')
    context.commit(PracticeMutations.ADD_PRACTICE_ATTEMPTED_QUESTION, questionReport)
    context.commit(PracticeMutations.SET_PRACTICE_LAST_QUESTION_CORRECT, false)
    context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, true)
    setTimeout(() => context.commit(PracticeMutations.SET_SHOWING_FEEDBACK, false), 600)
    context.dispatch(PracticeActions.NEW_QUESTION)
  },
  setPracticeMode(context, mode: PracticeMode) {
    context.commit(PracticeMutations.SET_PRACTICE_MODE, mode)
  },
  setPracticeQuestionCount(context, questionCount: number) {
    context.commit(PracticeMutations.SET_PRACTICE_QUESTION_COUNT, questionCount)
  },
  setPracticeTime(context, time: number) {
    context.commit(PracticeMutations.SET_PRACTICE_TIME, time)
  },
  finishPracticeSession(context) {
    console.log(context.state.practiceTimerId)
    clearInterval(context.state.practiceTimerId)
    context.commit(PracticeMutations.RESET_PRACTICE_SESSION)
  },
  skipQuestion(context) {
    const endTime = new Date()
    const duration = Math.round((endTime.getTime() - context.state.practiceStartQuestionTime.getTime()) / 1000)
    console.log(context.state.practiceStartQuestionTime)
    const questionReport = {
        question: context.state.question.infix,
        answer: "-",
        correctAnswer: evaluate(context.state.question.infix),
        correct: false,
        attempts: 0,
        skipped: true,
        duration: duration
      }
    context.commit(PracticeMutations.ADD_PRACTICE_ATTEMPTED_QUESTION, questionReport)
    context.dispatch(PracticeActions.NEW_QUESTION)
  },
  setDifficulty(context, difficulty) {
    context.commit(PracticeMutations.SET_DIFFICULTY, difficulty)
  },
  selectAllConcepts(context) {
    for (let operator of Object.values(Operator)) {
      if (!context.state.operators.includes(operator))
        context.commit(PracticeMutations.SET_OPERATOR_ENABLED, operator)
    }
  },
  resetConcepts(context) {
    for (let operator of Object.values(Operator)) {
      context.commit(PracticeMutations.SET_OPERATOR_DISABLED, operator)
    }
    context.commit(PracticeMutations.SET_OPERATOR_ENABLED, Operator.Addition)
    context.commit(PracticeMutations.SET_OPERATOR_ENABLED, Operator.Subtraction)
  },
}

const newQuestion = (difficulty: Difficulty, operators: Operator[]) => {
  return generateExpressionChallenge({ difficulty, operators })
}