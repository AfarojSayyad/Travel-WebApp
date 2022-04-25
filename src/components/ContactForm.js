import React,{useState} from 'react';
import './ContactForm.css';
import Form from './Form';
import FormSuccess from './FormSuccess';
function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function formSubmit(e)
    {
        console.log({e});
        setIsSubmitted(true);
    }

    return ( 
        <> 
        <h1>
            Contact Form
        </h1>
        <div className='form-container'>
            
            <div className='form-content-left'>
            <img className='form-img' src='https://images.pexels.com/photos/2516086/pexels-photo-2516086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' />
            </div>
            {!isSubmitted ? (<Form formSubmit={formSubmit}/>) : (<FormSuccess/>)}
            {/* <Form/> */}
            
        </div>
        </>
    );
}

export default ContactForm;