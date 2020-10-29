import { Stack } from 'typescript-collections'
import {
  ChallengeParams,
  GenerateChallenge,
  ChallengeType
} from '../models/math_question'
import { getChallengeTokens } from './expression/generator'
import {
  ExprToken,
  MathOperations,
  Operator,
  TokenType
} from './expression/models'

const getInfixTemplate = (op: Operator, left: string, right: string): string => {
  switch (op) {
    case Operator.Addition: {
      return `(${left}+${right})`
    }
    case Operator.Subtraction: {
      return `(${left}-${right})`
    }
    case Operator.Multiplication: {
      return `(${left}*${right})`
    }
  }
  return ''
}

const getLatexTemplate = (
  op: Operator,
  left: string,
  right: string
): string => {
  switch (op) {
    case Operator.Addition: {
      return `(${left}+${parenthesizeNegative(right)})`
    }
    case Operator.Subtraction: {
      return `(${left}-${parenthesizeNegative(right)})`
    }
    case Operator.Multiplication: {
      return `(${left}\\times${parenthesizeNegative(right)})`
    }
  }
  return ''
}

const parenthesizeNegative = (num: string): string => {
  return num.startsWith('-') ? `${num}` : num
}

const expressionLatex = (tokens: ExprToken[]): string => {
  const exprStack: Stack<string> = new Stack()
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i].type === TokenType.Operator) {
      const currentOp = tokens[i].value as Operator
      exprStack.push(
        getLatexTemplate(currentOp, exprStack.pop()!, exprStack.pop()!)
      )
    } else {
      exprStack.push(tokens[i].value.toString())
    }
  }
  return exprStack.pop()!
}

const expressionInfix = (tokens: ExprToken[]): string => {
  const exprStack: Stack<string> = new Stack()
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i].type === TokenType.Operator) {
      const currentOp = tokens[i].value as Operator
      exprStack.push(
        getInfixTemplate(currentOp, exprStack.pop()!, exprStack.pop()!)
      )
    } else {
      exprStack.push(tokens[i].value.toString())
    }
  }
  return exprStack.pop()!
}

export const generateExpressionChallenge: GenerateChallenge = (
  params: ChallengeParams
) => {
  const tokens: ExprToken[] = getChallengeTokens(
    params.operators,
    params.difficulty
  )
  const difficulty = params.difficulty
  const exprLatex = expressionLatex(tokens)
  return {
    difficulty,
    infix: expressionInfix(tokens),
    latex: exprLatex.substring(1, exprLatex.length - 1),
    type: ChallengeType.Expression
  }
}
