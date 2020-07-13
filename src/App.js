import React,{ useState } from "react";
import List from "./List"
import Submit from "./Submit"
function App() {
  const [notes,setnotes] = useState([]);//管理已有的notes
  const [changes,setchanges] = useState('a new note');//监听input中的note
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
      <List notes={notes} handlecheckbox={handlecheckbox} />
      <Submit handleonchange={handleonchange} handlesavebutton={handlesavebutton} />
    </div>
  );
}

export default App;
