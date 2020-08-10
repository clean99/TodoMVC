import React,{ useState,useImperativeHandle } from 'react'
const Togglable = React.forwardRef((props,ref) => {//设置children的show和hide
  const [visible,setVisible] = useState(false)//变化需要hook
  const hideWhenVisible = { display:visible?'none':'' }//写两个样式，分别在visible的时候隐藏和显示
  const showWhenVisible = { display:visible?'':'none' }

  const switchvisible = () => {
    setVisible(!visible)
  }
  useImperativeHandle(ref,() => {
    return{
      switchvisible
    }
  }
  )
  return(
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => {setVisible(true)}}>{props.buttonlabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={() => {setVisible(false)}}>cancel</button>
      </div>
    </div>
  )

})

Togglable.displayName='Togglable'
export default Togglable