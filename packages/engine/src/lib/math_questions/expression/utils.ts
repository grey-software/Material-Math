import { BoundedExpr } from './models'

export const isBounded = (expr: any): expr is BoundedExpr => {
  return 'bound' in expr
}
