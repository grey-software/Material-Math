import { positiveRandomNum, randomNum } from '../../utils'
import {
  BoundedExpr,
  DifficultyBounds,
  Expr,
  ExprBound,
  ExprToken,
  Operator,
  SubExprLocation,
  SubExprToken,
  TokenType,
} from './models'
import { isBounded } from './utils'

const DifficultyBounds: DifficultyBounds = {
  basic: { min: 1, max: 10 },
  normal: { min: 5, max: 20 },
  // tslint:disable-next-line:object-literal-sort-keys
  advanced: { min: 20, max: 100 },
}

const getSubExprToken = (expr: Expr): SubExprToken => {
  const bounds: ExprBound = DifficultyBounds[expr.diff]
  return {
    bounded: false,
    type: TokenType.SubExpr,
    value: randomNum(bounds.min, bounds.max),
  }
}

const _getZeroBoundTokens = (expr: Expr | BoundedExpr): ExprToken[] => {
  const tokens: ExprToken[] = []
  const randomValue = randomNum(DifficultyBounds[expr.diff].min, DifficultyBounds[expr.diff].max)
  const randomToken: ExprToken = { type: TokenType.Number, value: randomValue }
  const boundedRandomToken: SubExprToken = { type: TokenType.SubExpr, value: randomValue, bounded: true }
  switch (expr.subExprLocation) {
    case SubExprLocation.NEITHER: {
      return tokens.concat([randomToken, randomToken])
    }
    case SubExprLocation.BOTH: {
      return tokens.concat([boundedRandomToken, boundedRandomToken])
    }
    case SubExprLocation.LEFT: {
      return tokens.concat([boundedRandomToken, randomToken])
    }
    case SubExprLocation.RIGHT: {
      return tokens.concat([randomToken, boundedRandomToken])
    }
  }
}

const _getNoSubExprTokens = (expr: Expr | BoundedExpr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const boundedExpr = expr as BoundedExpr
    const bound: number = Math.abs(boundedExpr.bound)
    if (boundedExpr.bound < 0) {
      const boundedRandom: number = positiveRandomNum(bound)
      const leftToken: ExprToken = { type: TokenType.Number, value: boundedRandom }
      const rightToken: ExprToken = { type: TokenType.Number, value: boundedRandom + bound }
      return tokens.concat([leftToken, rightToken])
    } else {
      const boundedRandom: number = positiveRandomNum(bound)
      const leftToken: ExprToken = { type: TokenType.Number, value: boundedRandom + bound }
      const rightToken: ExprToken = { type: TokenType.Number, value: boundedRandom }
      return tokens.concat([leftToken, rightToken])
    }
  } else {
    const leftToken: ExprToken = { type: TokenType.Number, value: positiveRandomNum(DifficultyBounds[expr.diff].max) }
    const rightToken: ExprToken = { type: TokenType.Number, value: positiveRandomNum(DifficultyBounds[expr.diff].max) }
    return tokens.concat([leftToken, rightToken])
  }
}

const _getBothSubExprTokens = (expr: Expr | BoundedExpr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const boundedExpr = expr as BoundedExpr
    const bound: number = Math.abs(boundedExpr.bound)
    const boundedRandom: number = positiveRandomNum(bound)
    const complement: number = boundedRandom + bound
    const boundedRandomToken: SubExprToken = { type: TokenType.SubExpr, bounded: true, value: boundedRandom }
    const complementToken: SubExprToken = { type: TokenType.SubExpr, bounded: true, value: complement }
    if (boundedExpr.bound < 0) {
      return tokens.concat([complementToken, boundedRandomToken])
    } else {
      return tokens.concat([boundedRandomToken, complementToken])
    }
  } else {
    return tokens.concat([getSubExprToken(expr), getSubExprToken(expr)])
  }
}

const _getLeftSubExprTokens = (expr: Expr | BoundedExpr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const boundedExpr = expr as BoundedExpr
    const bound: number = Math.abs(boundedExpr.bound)
    const boundedRandom: number = positiveRandomNum(bound)
    const complement: number = boundedRandom + bound
    if (bound < 0) {
      const leftToken: SubExprToken = { type: TokenType.SubExpr, bounded: true, value: complement }
      const rightToken: ExprToken = { type: TokenType.Number, value: boundedRandom }
      return tokens.concat([leftToken, rightToken])
    } else {
      const leftToken: SubExprToken = { type: TokenType.SubExpr, bounded: true, value: boundedRandom }
      const rightToken: ExprToken = { type: TokenType.Number, value: complement }
      return tokens.concat([leftToken, rightToken])
    }
  } else {
    const leftToken: SubExprToken = getSubExprToken(expr)
    const rightToken: ExprToken = { type: TokenType.Number, value: positiveRandomNum(DifficultyBounds[expr.diff].max) }
    return tokens.concat([leftToken, rightToken])
  }
}

const _getRightSubExprTokens = (expr: Expr | BoundedExpr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const boundedExpr = expr as BoundedExpr
    const bound: number = Math.abs(boundedExpr.bound)
    const boundedRandom: number = positiveRandomNum(bound)
    const complement: number = boundedRandom + bound
    if (bound < 0) {
      const leftToken: ExprToken = { type: TokenType.Number, value: boundedRandom }
      const rightToken: SubExprToken = { type: TokenType.SubExpr, bounded: true, value: complement }
      return tokens.concat([leftToken, rightToken])
    } else {
      const leftToken: ExprToken = { type: TokenType.Number, value: complement }
      const rightToken: SubExprToken = { type: TokenType.SubExpr, bounded: true, value: boundedRandom }
      return tokens.concat([leftToken, rightToken])
    }
  } else {
    const leftToken: ExprToken = { type: TokenType.Number, value: positiveRandomNum(DifficultyBounds[expr.diff].max) }
    const rightToken: SubExprToken = getSubExprToken(expr)
    return tokens.concat([leftToken, rightToken])
  }
}

export const getSubtractionExprTokens = (expr: Expr): ExprToken[] => {
  const tokens: ExprToken[] = []
  tokens.push({
    type: TokenType.Operator,
    value: Operator.Subtraction,
  })
  if (isBounded(expr) && expr.bound === 0) {
    return tokens.concat(_getZeroBoundTokens(expr))
  }
  switch (expr.subExprLocation) {
    case SubExprLocation.NEITHER: {
      return tokens.concat(_getNoSubExprTokens(expr))
    }
    case SubExprLocation.BOTH: {
      return tokens.concat(_getBothSubExprTokens(expr))
    }
    case SubExprLocation.LEFT: {
      return tokens.concat(_getLeftSubExprTokens(expr))
    }
    case SubExprLocation.RIGHT: {
      return tokens.concat(_getRightSubExprTokens(expr))
    }
  }
  return tokens
}
