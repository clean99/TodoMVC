import React,{useState} from "react";
import noteService from "../services/notes";
const Submit = ({handlesave})=>{
  const [changes,setchanges] = useState('a new note');//监听input中的note
  const handlesavebutton = (event)=>{
    event.preventDefault();
    const newnote ={
      content:changes,
      date:new Date().toDateString(),
      completed:false
    }
    noteService.create(newnote)//post an object to server at the same time update the front
    .then((response)=>{
      handlesave(response.content);
      setchanges('');
    });
  }
  const handleonchange = (event)=>{
    setchanges(event.target.value);
  }
    return (<div>
        <form onSubmit={handlesavebutton}>
          <input type="text" onChange={handleonchange}></input>
          <button type="submit">save</button>
        </form>
    </div>)
  }
  export default Submit;