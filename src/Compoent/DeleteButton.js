import React from 'react'
import Services from '../services/notes'
const DeleteButton = ({ handledeletebutton }) => {
  const handleonclick = () => {
    Services.deletenote()
      .then(( event ) => {
        console.log(event)
        handledeletebutton()
      })
  }
  return (
    <input type='button' onClick={handleonclick}>
            删除已完成
    </input>
  )
}
export default DeleteButton