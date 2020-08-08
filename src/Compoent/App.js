import React,{ useState,useEffect } from "react";
import List from "./List"
import Submit from "./Submit"
import Showcase from "./Showcase"
import noteService from '../services/notes'
import Togglable from "./Togglable";
function App({user}) {
  const [notes,setnotes] = useState([]);//管理已有的notes
  const [show,setShow] = useState(true);//管理显示的条目
  const hook = ()=>{
    noteService
    .getAll()
    .then((response)=>{
        setnotes(response.data);
    })
  }//get notes from server
  useEffect(hook,[]);//只渲染一次，异步
 
  //.catch()是一个承诺被rejected后调用的函数，放在then承诺链的后面，这样任何一个promise被rejected的话，就会调用c，可以用来提示用户相关信息，目前没有应用
  const switchshow = ()=>{
    setShow(!show);
  }//反转show
  const handlesave = (newnote)=>{
    setnotes(notes.concat(newnote)); //把newnote做成一个对象加入notes
  }
  const checkedchange = (data,targetid)=>{
    setnotes(notes.map((n)=>(n.id === targetid?data:n)))
  }
  
  return (
    <div className="App">
      <h1>Notes</h1>
      <p>{user} logged-in</p>
      <List show={show} notes={notes}checkedchange={checkedchange} />
      <Togglable buttonlabel='add note'>
      <Submit handlesave={handlesave} />
      </Togglable>
      <Showcase switchshow={switchshow}/>
    </div>
  );
}

export default App;
