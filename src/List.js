import React from "react"
const List = ({notes,handlecheckbox})=>{
    return (<div>
      <ul>
          {notes.map((note)=> (<li key={note.id}><input type="checkbox"  name="completed" value={note.id} onChange={handlecheckbox}></input> {note.content} {note.completed} {note.date}</li>)
          )}
        </ul>
    </div>)
  }
export default List;