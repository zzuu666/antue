const executeIfFunction = f =>
  typeof f === 'function' ? f() : f

export const switchcase = cases => defaultCase => key =>
  key in cases ? cases[key] : defaultCase

export const switchcaseF = cases => defaultCase => key =>
  executeIfFunction(switchcase(cases)(defaultCase)(key))
