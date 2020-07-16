import React from 'react'

const Showcase = (props)=>{
    const {switchshow} = props;
    return (<label><input type="checkbox" onChange={switchshow}></input>只显示未完成</label>);
}
export default Showcase;