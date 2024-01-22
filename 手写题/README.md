#### 1、手写防抖

- params： 接受两个参数 一个参数是执行函数func，一个延迟时间delay
- return： 返回一个函数 

```javascript
function debounce (func, delay) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

// 示例代码
function handleInput () {
  console.log('input change')
}

const debounceHandleInput = debounce(handleInput, 1000)

inputElement.addEventListener('input', debounceHandleInput)
```

#### 2、手写节流

- params： 接受两个参数 一个参数是执行函数func，一个延迟时间delay
- return： 返回一个函数 

```javascript
function throttle (func, delay) {
  let lastCall = 0 // 初始值不能赋值Date.now()
  return function () {
    const context = this
    const args = arguments
    let now = Date.now()
    if (now - lastCall > delay) {
      func.apply(context, args)
    }
    lastCall = now
  }
}

const handleThrottle = throttle(() => {
  console.log('this is throttle func by called')
}, 1000)

handleThrottle() // this is throttle func by called
handleThrottle() // 不会执行
setTimeout(() => { // this is throttle func by called
  handleThrottle()
}, 1000)
```


#### 3、手写flattenObj函数

```javascript
/**
输入对象:
obj: {
  a: {
    b: {
      c: 1
    },
    e: 3
  },
  d: 2
}

输出值:
{
  "a.b.c": 1,
  "a.d": 2
  "a.e": 3
}
 */

function flatten (obj, prefix) {
  let flattenObj = {}

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && typeof obj[key] !== null) {
      Object.assign(flattenObj, flatten(obj[key], prefix + key + '.'))
    } else {
      flattenObj[prefix + key] = obj[key] 
    }
  })

  return flattenObj
}

const input = {
  a: {
    b: {
      c: 1
    },
    e: 3
  },
  d: 2
}
const output = flatten(input, '')

console.log(output)
```

#### 手写promise