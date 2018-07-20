const {elog} = require('../index')
// console.log(elog)

const a = 1
const b = {
  a,
  c: 3,
  d: null,
  e: [4, undefined]
}
elog(a)
elog(b)
elog(b.d)
elog(b.e, {a})
