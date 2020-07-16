import React,{ useState } from "react";
import List from "./List"
import Submit from "./Submit"
import Showcase from "./Showcase"
function App() {
  const [notes,setnotes] = useState([]);//管理已有的notes
  const [changes,setchanges] = useState('a new note');//监听input中的note
  const [show,setShow] = useState(true);//管理显示的条目
  const handlesavebutton = (event)=>{
    event.preventDefault();
    const newnote ={
      content:changes,
      date:new Date().toDateString(),
      id:notes.length+1,
      completed:false
    }
    setnotes(notes.concat(newnote))//把newnote做成一个对象加入notes
  }
  const showcase = (notes)=>{
    //console.log(notes);
    return show ? notes:notes.filter((note)=>(note.completed === false));
  }//返回要显示的数组
  const switchshow = ()=>{
    setShow(!show);
  }//反转show
  const handleonchange = (event)=>{
    setchanges(event.target.value);
  }
  const handlecheckbox = (event)=>{
    setnotes(notes.map((note)=>{
      if(note.id === Number(event.target.value))
      {
        note.completed = !note.completed 
      }//把note的completed反转
      return note;
    }))
  }
  
  return (
    <div className="App">
      <List notes={showcase(notes)} handlecheckbox={handlecheckbox} />
      <Submit handleonchange={handleonchange} handlesavebutton={handlesavebutton} />
      <Showcase switchshow={switchshow}/>
    </div>
  );
}

export default App;
