import './Registerform.css';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './Firebase';
import { useHistory } from 'react-router-dom';





function Loginform() {

const history = useHistory();


     const handleLogIn = (values)=>{

        auth.signInWithEmailAndPassword(values.email,values.password)
        .then(history.push("/"))
      
         
        .catch(err=>alert(err.message));

      
      
     }


    const validatelogin = Yup.object({
      
      
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .required('Password is required'),
        
      })

    return (
      
        <Formik 
        initialValues={{
         
          email: '',
          password: '',
      
        }}
        validationSchema={validatelogin}
        onSubmit={values=>{handleLogIn(values)}}
      >
        {formik => (

          
          <div className="register__form">
            <h1 className="my-4 font-weight-bold .display-4">Log In</h1>
            <Form >
             
              <TextField  label="Email" name="email" type="email" />
             
              <TextField label="Password" name="password" type="password" />
             
              <button  className="btn btn-dark mt-3" type="submit">Login</button>
              <button  className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
           
            </Form>
          </div>
        )}
      </Formik>
     
    )
}

export default Loginform;
