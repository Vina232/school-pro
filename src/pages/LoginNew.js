import { useFormik, FormikProvider, Form } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Stack,  useTheme } from "@mui/material";
import { loginSchema } from "../utils/validationSchema";


// const useStyles = makeStyles(theme => ({
//     buttonStyleNew:{
//          display: 'flex',
//           // justifyContent: 'space-evenly',
//           width: '240px',
//           // height: '60px',
//           borderRadius: '0',
//           color: theme.palette.button.normal,
//           fontSize: 20,
//           margin: '50px',
//           ":hover":{
//             bgcolor: "white",
//             color: "blue",
//           } 
//     },
//     inputStyleNew:{
//       color: theme.palette.input.text,
//       backgroundColor: theme.palette.input.bgc,
//       marginTop: '200px',
//       height: '50px',
//     }
// }));


export default function LoginNew() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const theme = useTheme();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("----values", values);
      //   setIsLoggedIn(true);
    },
  });
  const { values, errors, handleChange, handleSubmit } = formik;
  console.log(errors);
  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack
            spacing={5}
            sx={{
              width: "400px",
              margin: "0 auto",
            }}
          >
            <div>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                sx={{
                  color: theme.palette.input.text,
                  backgroundColor: theme.palette.input.bgc
                }}
              />
              <p> {errors.email}</p>
            </div>

            <div>
              <input
                type="text"
                name="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
              />
              <p>{errors.password}</p>
            </div>

            {/* <button type="submit" sx={{

            }}>Login</button> */}

            <button variant="btn" type="submit" sx={{
                bgcolor: theme.palette.button.hover,
                color: theme.palette.button.hoverText,
        }}>Login
          </button>


          </Stack>
        </Form>
      </FormikProvider>
    </>
    // <div className="App">

    //   <form className="form" onSubmit={formik.handleSubmit}>
    //     <div className="field">
    //       <label htmlFor="email">Email Address</label>
    //       <input
    //         id="email"
    //         name="email"
    //         type="email"
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         value={formik.values.email}
    //       />
    //     </div>
    //     {formik.touched.email && formik.errors.email ? (
    //       <span className="error">{formik.errors.email}</span>
    //     ) : null}
    //     <div className="field">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         id="password"
    //         name="password"
    //         type="password"
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         value={formik.values.password}
    //       />
    //     </div>
    //     {formik.touched.password && formik.errors.password ? (
    //       <span className="error">{formik.errors.password}</span>
    //     ) : null}
    //     <button type="submit" className="submit-btn">
    //       Login
    //     </button>
    //   </form>
    //   {isLoggedIn && <div className="heading">Yayyy! You are back!!!</div>}
    // </div>
  );
}
