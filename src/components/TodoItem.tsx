import React from 'react'

import styles from './TodoItem.module.css'

const TodoItem:React.FC<{text: string, id:string, onDelete:(id:string)=> void}> = (props) => {

  

  return (
    <li className={styles.item} onClick={() => props.onDelete(props.id)}>{props.text}</li>
  )
}

export default TodoItem