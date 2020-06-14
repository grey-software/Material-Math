import { positiveRandomNum, randomNum } from '../../utils'
import {
  BoundedExpr,
  DifficultyBounds,
  Expr,
  ExprToken,
  Operator,
  SubExprLocation,
  SubExprToken,
  TokenType
} from './models'
import { isBounded } from './utils'

const DifficultyBounds: DifficultyBounds = {
  basic: { min: 0, max: 5 },
  normal: { min: 0, max: 9 },
  // tslint:disable-next-line:object-literal-sort-keys
  advanced: { min: 0, max: 12 }
}

interface Multiples {
  left: number;
  right: number;
}

// const getSubExprToken = (expr: Expr): SubExprToken => {
//   const bounds: ExprBound = DifficultyBounds[expr.diff]
//   return {
//     bounded: false,
//     type: TokenType.SubExpr,
//     value: randomNum(bounds.min, bounds.max)
//   }
// }

const _getMultiplesForBound = (bound: number): Multiples[] => {
  const absBound = Math.abs(bound)
  const potentialMultiples = []
  for (let i = 1; i <= absBound; i++) {
    potentialMultiples.push(i)
  }
  return potentialMultiples
    .filter((val: number) => absBound % val === 0)
    .map((val: number) => [val, Math.floor(absBound / val)])
    .map((multiples: number[]) => {
      if (bound < 0) {
        if (Math.random() < 0.5) {
          return { left: multiples[0], right: multiples[1] * -1 }
        } else {
          return { left: multiples[0] * -1, right: multiples[1] }
        }
      } else {
        return { left: multiples[0], right: multiples[1] }
      }
    })
}

const _getZeroBoundTokens = (expr: Expr): ExprToken[] => {
  const tokens: ExprToken[] = []
  const randomValue: number = positiveRandomNum(
    DifficultyBounds[expr.diff].max
  )
  switch (expr.subExprLocation) {
    case SubExprLocation.NEITHER: {
      const leftToken: ExprToken = {
        type: TokenType.Number,
        value: randomValue
      }
      const rightToken: ExprToken = { type: TokenType.Number, value: 0 }
      return tokens.concat([leftToken, rightToken])
    }
    case SubExprLocation.BOTH: {
      const leftToken: SubExprToken = {
        type: TokenType.SubExpr,
        bounded: true,
        value: randomValue
      }
      const rightToken: SubExprToken = {
        type: TokenType.SubExpr,
        bounded: true,
        value: 0
      }
      return tokens.concat([leftToken, rightToken])
    }
    case SubExprLocation.LEFT: {
      const leftToken: SubExprToken = {
        type: TokenType.SubExpr,
        bounded: true,
        value: randomValue
      }
      const rightToken: ExprToken = { type: TokenType.Number, value: 0 }
      return tokens.concat([leftToken, rightToken])
    }
    case SubExprLocation.RIGHT: {
      const leftToken: ExprToken = {
        type: TokenType.Number,
        value: randomValue
      }
      const rightToken: SubExprToken = {
        type: TokenType.SubExpr,
        bounded: true,
        value: 0
      }
      return tokens.concat([leftToken, rightToken])
    }
  }
}

const _getNoSubExprTokens = (expr: Expr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const multiplesForBound: Multiples[] = _getMultiplesForBound(
      (expr as BoundedExpr).bound
    )
    const multiples =
      multiplesForBound[randomNum(0, multiplesForBound.length - 1)]
    const leftToken: ExprToken = {
      type: TokenType.Number,
      value: multiples.left
    }
    const rightToken: ExprToken = {
      type: TokenType.Number,
      value: multiples.right
    }
    return tokens.concat([leftToken, rightToken])
  } else {
    const max: number = DifficultyBounds[expr.diff].max
    const leftToken: ExprToken = {
      type: TokenType.Number,
      value: positiveRandomNum(max) + 1
    }
    const rightToken: ExprToken = {
      type: TokenType.Number,
      value: positiveRandomNum(max) + 1
    }
    return tokens.concat([leftToken, rightToken])
  }
}

const _getBothSubExprTokens = (expr: Expr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const multiplesForBound: Multiples[] = _getMultiplesForBound(
      (expr as BoundedExpr).bound
    )
    const multiples =
      multiplesForBound[randomNum(0, DifficultyBounds[expr.diff].max)]
    const leftToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: multiples.left
    }
    const rightToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: multiples.right
    }
    return tokens.concat([leftToken, rightToken])
  } else {
    const max: number = DifficultyBounds[expr.diff].max
    const leftToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: positiveRandomNum(max) + 1
    }
    const rightToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: positiveRandomNum(max) + 1
    }
    return tokens.concat([leftToken, rightToken])
  }
}

const _getLeftSubExprTokens = (expr: Expr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const multiplesForBound: Multiples[] = _getMultiplesForBound(
      (expr as BoundedExpr).bound
    )
    const multiples =
      multiplesForBound[randomNum(0, DifficultyBounds[expr.diff].max)]
    const leftToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: multiples.left
    }
    const rightToken: ExprToken = {
      type: TokenType.Number,
      value: multiples.right
    }
    return tokens.concat([leftToken, rightToken])
  } else {
    const max: number = DifficultyBounds[expr.diff].max
    const leftToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: positiveRandomNum(max) + 1
    }
    const rightToken: ExprToken = {
      type: TokenType.Number,
      value: positiveRandomNum(max) + 1
    }
    return tokens.concat([leftToken, rightToken])
  }
}

const _getRightSubExprTokens = (expr: Expr): ExprToken[] => {
  const tokens: ExprToken[] = []
  if (expr.isBounded) {
    const multiplesForBound: Multiples[] = _getMultiplesForBound(
      (expr as BoundedExpr).bound
    )
    const multiples =
      multiplesForBound[randomNum(0, DifficultyBounds[expr.diff].max)]
    const leftToken: ExprToken = {
      type: TokenType.Number,
      value: multiples.left
    }
    const rightToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: multiples.right
    }
    return tokens.concat([leftToken, rightToken])
  } else {
    const max: number = DifficultyBounds[expr.diff].max
    const leftToken: ExprToken = {
      type: TokenType.Number,
      value: positiveRandomNum(max) + 1
    }
    const rightToken: SubExprToken = {
      type: TokenType.SubExpr,
      bounded: true,
      value: positiveRandomNum(max) + 1
    }
    return tokens.concat([leftToken, rightToken])
  }
}

export const getMultiplicationExprTokens = (expr: Expr): ExprToken[] => {
  const tokens: ExprToken[] = []
  tokens.push({
    type: TokenType.Operator,
    value: Operator.Multiplication
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
