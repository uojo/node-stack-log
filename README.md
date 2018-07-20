# node-stack-log


## Install
To install from npm:
```
npm install --save node-stack-log
```

## Usage
For Node.js:

/project/index.js
```javascript
const {elog} = require('node-stack-log');
const data = {
  a: 1
}

elog(data)
// /project/index.js:6:1
// { a: 1 }
```

/project/package.json
```javascript
{
  ...
  script:{
    "test":"LOG_ENV=debug node index"
  }
  ...
}
```
run

```
npm test
```

## ChangeLog
### 0.1.0
- first commit.
