import React,{useContext, useState} from 'react';
import { globalData } from '../App';
import { globalInputData } from '../App';
import CommonButton from '../components/CommonButton';


import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';
import CommonInput from '../components/CommonInput';
import { useTheme } from '@mui/material';

const useStyles = makeStyles(theme => ({
    buttonStyleNew:{
         display: 'flex',
          // justifyContent: 'space-evenly',
          width: '240px',
          // height: '60px',
          borderRadius: '0',
          color: theme.palette.button.normal,
          fontSize: 20,
          margin: '50px',
          ":hover":{
            bgcolor: "white",
            color: "blue",
          } 
    },
    inputStyleNew:{
      color: theme.palette.input.text,
      backgroundColor: theme.palette.input.bgc,
      marginTop: '200px',
      height: '50px',
    }
}));



function Learning() {
  const theme = useTheme();
  const classes = useStyles();
  
  const {dataValue, setDataValue} = useContext(globalData);

  const [inputValue, setInputValue] = useState('common input');
  console.log('----data----',dataValue)
  console.log('----inputdata----',inputValue)
  return (

    <div>Learning

      <CommonButton
      buttonText={"change Global data"}
      onClick={()=>setDataValue('new--value-111')}
      className={classes.buttonStyleNew}
      />
      {/* <button onClick={()=>setDataValue('new--value-111')}> change Global data</button> */}

      {/* Input */}

      <CommonInput
      inputType={'text'}
      // inputTitle={'input'}
      inputValue={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
      className={classes.inputStyleNew}
      />

      
    </div>

  )
}

export default Learning