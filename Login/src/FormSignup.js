import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
const FormSignup = ({submitForm}) => {
    const{handleChange, values,handleSubmit,errors}= useForm(submitForm,validate);
    return (
        <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
        <h1> Sign in to your account </h1>
        

          <div className="form-inputs">
       <label htmlFor="email" className="form-label">
      Email
        </label>
          <input 
          id="email"
        type="email"  
        name="email" 
        className="form-input"
        placeHolder="Enter your email"
        value ={values.email}
        onChange={handleChange}
        />
         {errors.email &&  <p>{errors.email}</p>}
          </div>

            <div className="form-inputs">
       <label htmlFor="password" className="form-label">
      Password
        </label>
          <input 
          id="password"
        type="password"  
        name="password" 
        className="form-input"
        placeHolder="Enter your password"
        value ={values.password}
        onChange={handleChange}/>
{errors.password &&  <p>{errors.password}</p>}
          </div>
        
          <div className="form-inputs">
            <h3>Signin as -</h3>
            <p>           </p>
        <input type="radio" value="DSW" name="designation" /> DSW 
        <p>   </p>
        <input type="radio" value="HOD" name="designation" /> HOD 
        <p>   </p>
        <input type="radio" value="Finance Department" name="designation" /> Finance Department
      </div>
          

            
          <button  className="form-input-btn"
           type="Submit">
           LOGIN
           </button>
           <hr></hr>
           

        </form>
        
        </div>
    )
}

export default FormSignup;
