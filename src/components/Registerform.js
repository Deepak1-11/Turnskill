import './Registerform.css';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import db, { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { logIn } from '../features/userSlice';
import { useHistory } from 'react-router-dom';

function Registerform() {

    const dispatch = useDispatch();
    const history = useHistory();

    

     const handleClick = async(values)=>{

        
      

        await auth.createUserWithEmailAndPassword(values.email,values.password)
        .then( history.push("/"))
        .catch(err=>alert(err.message));


         db.collection('users').add({
            fname:values.firstName,
            lname:values.lastName,
            email:values.email,
            skills:values.skills

        })
        
        .catch(err=>alert(err.message));

       

       


       
     }


    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
          skills: Yup.string()
          .required('Required Field'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
      })

    return (

     
        <Formik className="registerform"
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          skills:'',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={values=>{handleClick(values)}}
      >
        {formik => (
          <div className="register__form">
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form>
              <TextField  label="First Name" name="firstName" type="text" />
              <TextField  label="Last Name" name="lastName" type="text" />
              <TextField  label="Email" name="email" type="email" />
              <TextField  label="Skills" name="skills" type="text" />
              <TextField label="Password" name="password" type="password" />
              <TextField  label="Confirm Password" name="confirmPassword" type="password" />
              <button  className="btn btn-dark mt-3" type="submit">Register</button>
              <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </Form>
          </div>
        )}
      </Formik>
    
    )
}

export default Registerform
