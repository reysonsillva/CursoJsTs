/*
    FALSY:
        false
        0
        '' "" ``
        null / undefined
        NaN
*/

const a = 0
const b = null
const c = false
const d = 'False'
const e = NaN

console.log(a || b || c || d || e)