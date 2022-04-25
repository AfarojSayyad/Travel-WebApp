import React from 'react';
import './ContactForm.css';
import UseForm from './UseForm';
import validate from './ValidateInfo';
function Form({formSubmit}) {
    const { values, handleChange, handleSubmit, errors } = UseForm(formSubmit, validate);
    return ( 
        <>
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
            <h1>Book Your Travel Destination with us Today!!!</h1>
                <div className='form-inputs'>
                    
                    <label htmlFor='first_name' className='form-label'>First Name : </label>
                    <input  className='form-input'
                            id='first_name' 
                            type = 'text' 
                            name ='first_name' 
                            placeholder='First Name'
                            value={values.first_name}
                            onChange ={handleChange}
                    ></input>
                    {/* to get error from validateInfo function */}
                    {errors.first_name && <p>{errors.first_name}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='last_name' className='form-label'>Last Name : </label>
                    <input className='form-input'
                            id='last_name' 
                            type='text' 
                            name='last_name' 
                            placeholder='Last Name'
                            value={values.last_name}
                            onChange ={handleChange}
                    ></input>
                    {errors.last_name && <p>{errors.last_name}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>E-mail : </label>
                    <input className='form-input'
                           id='email' 
                           type='email' 
                           name='email' 
                           placeholder='e-mail'
                           value={values.email}
                           onChange ={handleChange}
                    ></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='phone_no' className='form-label'>Phone no. : </label>
                    <input className='form-input'
                           id='phone_no'  
                           type='number' 
                           name='phone_no' 
                           placeholder='phone no'
                           value={values.phone_no}
                           onChange ={handleChange}
                    ></input>
                    {errors.phone_no && <p>{errors.phone_no}</p>}
                </div>
                <button type='submit' className='form-input-btn'>Submit</button>
            </form>
            </div>
        </>
     );
}

export default Form;