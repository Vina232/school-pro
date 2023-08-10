import React from 'react'
import { useStyles } from "./styles";
import classNames from 'classnames';


function CommonInput({inputType,inputValue,onChange, className}) {
    const classes = useStyles();
    

  return (
    <div>
        <input 
        type={inputType} 
        // name={inputTitle}
        value={inputValue}
        onChange={onChange} 
        className={classNames(classes.inputStyle, className)}
        />
     
    </div>
  )
}

export default CommonInput