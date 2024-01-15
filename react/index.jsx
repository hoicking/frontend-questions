// 1. 如何用React实现类似Vue的computed计算属性效果？
// code here...

const a = useMemo(() => {
  return 33 * 66
}, [])


// 2. useEffect函数的返回值是什么作用？一般哪些场景需要返回值？

const [counter, setCounter] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    console.log(counter)
  }, 1000)

  const handleClick = () => {
    // 处理点击事件
  };

  document.addEventListener('click', handleClick)

  return () => {

    clearInterval(interval)
    document.removeEventListener('click', handleClick)
  }
}, [])

//  清除副作用  就跟componentWillUnmount一样 

// 清除定时器
// 取消订阅或者事件监听
// 取消请求等


//3. useState的初始值使用函数和常量有什么不同 

// 使用函数作为初始值： 当使用函数作为初始值时，函数会在组件的每次渲染时被调用。这对于计算初始值或者依赖于其他状态的初始值非常有用。每次渲染时都会执行函数，可以确保每个组件实例都有自己的初始值

