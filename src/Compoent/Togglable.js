import React,{useState} from 'react'
const Togglable = (props)=>{//设置children的show和hide
    const [visible,setVisible] = useState(false);//变化需要hook
    const hideWhenVisible = {display:visible?'none':''};//写两个样式，分别在visible的时候隐藏和显示
    const showWhenVisible = {display:visible?'':'none'};
    return(
        <div>
            <div style={hideWhenVisible}>
                <button onClick={()=>{setVisible(true)}}>{props.buttonlabel}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={()=>{setVisible(false)}}>cancel</button>
            </div>
        </div>
    )

}


export default Togglable;