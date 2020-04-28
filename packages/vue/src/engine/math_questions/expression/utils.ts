import { BoundedExpr, Expr, SubExprToken, TokenType } from './models';

export const isBounded = (expr: any): expr is BoundedExpr => {
  return 'bound' in expr;
};
