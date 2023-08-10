import * as Yup from "yup";


export const loginSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email")
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'enter valid email'),
      password: Yup.string()
      .required("Please enter password")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'enter valid password')
    })
