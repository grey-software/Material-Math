// import { Difficulty, GenerateChallenge, MathQuestionType } from '../models/math_question';
// import { positiveRandomNum } from '../utils';

// interface FactorizationModel {
//   xCoeff1: number;
//   xCoeff2: number;
//   const1: number;
//   const2: number;
// }

// interface FactorizationRandomBounds {
//   xCoeffMax: number;
//   constMax: number;
// }

// export const generateFactorizationChallenge: GenerateChallenge = (difficulty: Difficulty) => {
//   const randomBounds = getRandomBounds(difficulty);
//   const model: FactorizationModel = {
//     const1: positiveRandomNum(randomBounds.xCoeffMax),
//     const2: positiveRandomNum(randomBounds.xCoeffMax),
//     xCoeff1: positiveRandomNum(randomBounds.xCoeffMax),
//     xCoeff2: positiveRandomNum(randomBounds.xCoeffMax),
//   };
//   return {
//     difficulty,
//     infix: factorizationInfix(model),
//     latex: factorizationLatex(model),
//     type: MathQuestionType.Factorization,
//   };
// };

// const getRandomBounds = (difficulty: Difficulty): FactorizationRandomBounds => {
//   switch (difficulty) {
//     case Difficulty.Basic: {
//       return { xCoeffMax: 1, constMax: 5 };
//     }
//     case Difficulty.Normal: {
//       return { xCoeffMax: 2, constMax: 10 };
//     }
//     case Difficulty.Advanced: {
//       return { xCoeffMax: 3, constMax: 10 };
//     }
//   }
// };

// const factorizationInfix = (model: FactorizationModel): string => {
//   return `(${model.xCoeff1}x + ${model.const1})*(${model.xCoeff2}x + ${model.const2})`;
// };

// const factorizationLatex = (model: FactorizationModel): string => {
//   const a = model.xCoeff1 * model.xCoeff2;
//   const b = model.xCoeff1 * model.const2 + model.xCoeff2 * model.const1;
//   const c = model.const1 * model.const2;
//   let factorLatex = '$$';
//   factorLatex = a === 1 ? factorLatex.concat('x^{2}') : factorLatex.concat(`${a}x^{2}`);
//   if (b !== 0) {
//     factorLatex = b > 0 ? factorLatex.concat(` + ${b}x`) : factorLatex.concat(` ${b}x`);
//   }
//   if (c !== 0) {
//     factorLatex = c > 0 ? factorLatex.concat(` + ${c}`) : factorLatex.concat(` c`);
//   }
//   return factorLatex.concat('$$');
// };
