import React,{ useState,useEffect } from "react";
import List from "./List"
import Submit from "./Submit"
import Showcase from "./Showcase"
import noteService from './services/notes'
function App() {
  const [notes,setnotes] = useState([]);//管理已有的notes
  const [changes,setchanges] = useState('a new note');//监听input中的note
  const [show,setShow] = useState(true);//管理显示的条目
  const hook = ()=>{
    noteService
    .getAll()
    .then((response)=>{
        setnotes(response.data);
    })
  }//get notes from server
  useEffect(hook,[]);//只渲染一次，异步
  const handlesavebutton = (event)=>{
    event.preventDefault();
    const newnote ={
      content:changes,
      date:new Date().toDateString(),
      completed:false
    }
    noteService
    .create(newnote)//post an object to server at the same time update the front
    .then((response)=>{
      setnotes(notes.concat(response.data)); //把newnote做成一个对象加入notes
      setchanges('');
    });
  }
  //.catch()是一个承诺被rejected后调用的函数，放在then承诺链的后面，这样任何一个promise被rejected的话，就会调用c，可以用来提示用户相关信息，目前没有应用
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
    const targetid = event.target.value;
    const targetnote = notes.find((note)=>note.id == targetid);//targetnote是hook的引用，不能乱改
    const url = `http://localhost:3001/notes/${targetid}`;
    console.log(targetnote);
    const changedNote = {...targetnote,completed:!targetnote.completed};//...展开创建新对象
    console.log(changedNote);
    noteService
    .update(targetid,changedNote)
    .then((response)=>{
      setnotes(notes.map((n)=>(n.id == targetid?response.data:n)))
    })
    }//修改对象状态，前端得到id，找到对象以及后端要修改的url，修改对象，用put 或patch修改后端对象，
    //返回事件里修改前端确保一致
  
  
  return (
    <div className="App">
      <List notes={showcase(notes)} handlecheckbox={handlecheckbox} />
      <Submit handleonchange={handleonchange} handlesavebutton={handlesavebutton} />
      <Showcase switchshow={switchshow}/>
    </div>
  );
}

export default App;
