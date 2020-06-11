import { Difficulty } from '../../models/math_question'

export enum Operator {
  Addition = 'Addition',
  Subtraction = 'Subtraction',
  Mutliplication = 'Mutliplication',
}

export interface Expr {
  op: Operator;
  diff: Difficulty;
  subExprLocation: SubExprLocation;
  isBounded: boolean;
}

export interface BoundedExpr extends Expr {
  bound: number;
}

export type MathOperations = Operator[]

export type TokenGenerator = (expr: Expr) => ExprToken[]

export enum TokenType {
  Operator = 'Operator',
  Number = 'Number',
  SubExpr = 'SubExpr',
}

export interface ExprToken {
  type: TokenType;
  value: number | Operator;
}
export interface SubExprToken extends ExprToken {
  bounded: boolean;
}

export enum SubExprLocation {
  LEFT = 1,
  RIGHT = 1,
  BOTH = 2,
  NEITHER = 0,
}

export interface DifficultyBounds {
  basic: ExprBound;
  normal: ExprBound;
  advanced: ExprBound;
}

export interface ExprBound {
  min: number;
  max: number;
}

export interface BoundedComplementTokens {
  boundedToken: ExprToken;
  complementToken: ExprToken;
}
