import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Login() {

    // const classes = useStyles();


  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

//   const [data, setData] = useState({
//     username: '',
//     password: '',
//   });
//   const { username, password } = data;

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: [e.target.value] });
//   };

    // const submitHandler = (e) => {
    // setData({ ...data, [e.target.name]: [e.target.value] });
    // };

 


  //   const submitHandle = () => {
  //     loginData = {
  //       username,
  //       password,
  //     };
  //     console.log("---loginData", loginData);

  //     setUsername("");
  //     setPassword("");
  //   };

//   console.log("---loginDatanew", loginData);



    const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    // email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Stack
        direction="column"
        spacing={5}
        alignItems="center"
        sx={{
          marginTop: "50px",
        }}
      >
        {/* 
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}

        {/* <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}

    
      </Stack>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
           onSubmit={values => {
             // same shape as initial values
             console.log('values',values);
           }} 
      >
        {({ values, errors, touched }) => (
        

            <Form >
              <Stack spacing={5} sx={{
                width: '400px',
                margin: '0 auto',
              }}>  
              <Field name="username" placeholder="username" value={values.username} 
/>
              {/* If this field has been touched, and it contains an error, display it
               */}
              {touched.username && errors.username && (
                <div>{errors.username}</div>
              )}
              <Field name="password" placeholder="password"/>
              {/* If this field has been touched, and it contains an error, display
             it */}
              {touched.password && errors.password && <div>{errors.password}</div>}
              <button type="submit">Log in</button>
        
              
             </Stack> 
            </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
