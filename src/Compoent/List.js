import React from 'react'
import noteService from '../services/notes'
const List = ({ show,notes,checkedchange }) => {
  const showcase = (notes) => {
    //console.log(notes);
    return show ? notes:notes.filter((note) => (note.completed === false))
  }//返回要显示的数组
  const showlist = showcase(notes)
  const handlecheckbox = (event) => {
    const targetid = Number(event.target.value)
    const targetnote = notes.find((note) => note.id === targetid)//targetnote是hook的引用，不能乱改
    console.log(targetnote)
    const changedNote = { ...targetnote,completed:!targetnote.completed }//...展开创建新对象
    console.log(changedNote)
    noteService
      .update(targetid,changedNote)
      .then((response) => {
        checkedchange(response.data,targetid)
      })
  }//修改对象状态，前端得到id，找到对象以及后端要修改的url，修改对象，用put 或patch修改后端对象，
  //返回事件里修改前端确保一致
  return (<div>
    <ul>
      {showlist.map((note) => (<li key={note.id}><input type="checkbox"  checked={note.completed} value={note.id} onChange={handlecheckbox}></input> {note.content} {note.completed} {note.date}</li>)
      )}
    </ul>
  </div>)
}
export default List