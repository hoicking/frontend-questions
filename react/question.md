# 用户如何根据不同的权限查看不同的页面

1. axios 获取到当前用户的权限JSON 然后展示对应的menulist


2. 
```js
<Route path="/home" onEnter={(nextstate, replace) => {
  if () {
    // 做鉴权
  }

}}></Route>

```

# react 事件与普通的HTML 事件有什么区别
- 事件名称
  - 原生: 全小写
  - react: onClick 小驼峰
- 事件函数处理
- 阻止浏览器本身的默认行为
  - 原生: return false
  -  react: preventDefault()
-  Vdom 合成事件 模拟原生DOM的行为 cross platform react 所有事件存放在数组, 所以能跨平台

# 受控组件 非受控组件

input select react 能否知道当前的状态修改

# 为什么React 中useState 要使用数组而非对象

解构起来比较便利

```js

  const [name, setName] = useState(0)
  const [count, setCount] = useState(1)

  // 如果是对象的话
  const {state: name, setState: setName} = useState(0)
  const {state: count, setState: setCount} = useState(0)

```

# 为什么使用hooks
类组件有生命周期 didmount willunmount 需要重复处理一些副作用 在hooks 中能够统一处理 

# 错误边界

static getDeviredStateFromError
componentDidcatch

```js
  class ErrorBoundary extends Component {
    constructor () {
      this.state = {
        hasError: false
      }
    }

    static getDeviredStateFromError (error) {
      if (error) {
        return {
          hasError: true
        }
      }
    }

    componentDidCatch (error) {
      sendError(error)
    }

    render () [
      if (this.state.hasError) {
        return <div>has error</div>
      }

      return this.props.children
    ]

  }

```


# react 代码分割
```js
  import React, {suspense} from 'react'

  const lazyComponnet = React.lazy(() => import('home'))

  return <div>

    <suspense fallback={<div>loading</div>}>
      {lazyComponnet}
    </suspense>
  </div>

```

# 自定义防抖节流hooks

```js
  const useDebounce = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
      const timeout = settimeout(() => {
        setDebounceValue()
      }, delay)

    }, [value, delay])


  }

```