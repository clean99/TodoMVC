import React from "react";
const Submit = ({handlesavebutton,handleonchange})=>{
    return (<div>
        <form onSubmit={handlesavebutton}>
          <input type="text" onChange={handleonchange}></input>
          <button type="submit">save</button>
        </form>
    </div>)
  }
  export default Submit;