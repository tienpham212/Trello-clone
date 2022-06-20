import React, {FC} from 'react'

//CSS
import styles from "./Input.module.css"

interface InputProps extends React.HTMLAttributes<HTMLInputElement>{

}

const Input:FC<InputProps> = ({
...rest
}) => {
  return (
    <input className={styles.inputContainer} {...rest}/>
  )
}

export default Input