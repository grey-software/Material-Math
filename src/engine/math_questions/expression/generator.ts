import { Difficulty } from '../../models/math_question'
import { randomNum } from '../../utils'
import { getAdditionExprTokens } from './addition'
import {
  BoundedExpr,
  Expr,
  ExprToken,
  Operator,
  SubExprLocation,
  SubExprToken,
  TokenType
} from './models'
import { getMultiplicationExprTokens } from './multiplication'
import { getSubtractionExprTokens } from './subtraction'

const getSubExprLocations = (opsLeft: number): SubExprLocation => {
  switch (opsLeft) {
    case 0:
    case 1: {
      return SubExprLocation.NEITHER
    }
    case 2: {
      return Math.random() > 0.5 ? SubExprLocation.LEFT : SubExprLocation.RIGHT
    }
    default: {
      const random = Math.random()
      if (random < 0.33) {
        return SubExprLocation.LEFT
      } else if (random < 0.66) {
        return SubExprLocation.RIGHT
      } else {
        return SubExprLocation.BOTH
      }
    }
  }
}

const getExprTokens = (expr: Expr | BoundedExpr): ExprToken[] => {
  switch (expr.op) {
    case Operator.Addition: {
      return getAdditionExprTokens(expr)
    }
    case Operator.Subtraction: {
      return getSubtractionExprTokens(expr)
    }
    case Operator.Multiplication: {
      return getMultiplicationExprTokens(expr)
    }
  }
}

export const getChallengeTokens = (
  operators: Operator[],
  diff: Difficulty
): ExprToken[] => {
  const ops = [...operators]
  let opsLeft = operators.length
  const expr: ExprToken[] = []
  let currentOp: Operator = ops[randomNum(0, ops.length - 1)]
  let subExprLocation: SubExprLocation = getSubExprLocations(opsLeft)
  opsLeft -= subExprLocation
  ops.splice(ops.indexOf(currentOp), 1)
  expr.push(
    ...getExprTokens({ diff, isBounded: false, op: currentOp, subExprLocation })
  )
  let subExprIndex = expr.findIndex((val) => val.type === TokenType.SubExpr)
  while (subExprIndex !== -1) {
    currentOp = ops[randomNum(0, ops.length - 1)]
    subExprLocation = getSubExprLocations(opsLeft)
    const subExprToken: SubExprToken = expr[subExprIndex] as SubExprToken
    const bound = subExprToken.value as number
    const subExpr: ExprToken[] = getExprTokens({
      bound: bound,
      diff,
      isBounded: subExprToken.bounded,
      op: currentOp,
      subExprLocation
    })
    expr.splice(subExprIndex, 1, ...subExpr)
    opsLeft -= subExprLocation
    ops.splice(ops.indexOf(currentOp), 1)
    subExprIndex = expr.findIndex((val) => val.type === TokenType.SubExpr)
  }
  return expr
}
