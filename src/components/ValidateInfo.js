 export default function ValidateInfo (values)
 {
     console.log({values});
        let errors ={};

    if(!values.first_name)
    {
        errors.first_name='First name is required!!!';
    }
    else if (!/^[A-Za-z]+/.test(values.first_name.trim())) {
          errors.first_name = 'Enter a valid name!!';
     }

    if(!values.last_name)
    {
        errors.last_name='Last name is required!!!';
    }
    else if (!/^[A-Za-z]+/.test(values.last_name.trim())) {
        errors.last_name = 'Enter a valid name!!';
   }

    if(!values.email)
    {
        errors.email='E-mail is required!!!';
    }
    else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email='E-mail value is invalid!!';
    }

    if(!values.phone_no)
    {
        errors.phone_no='Phone no. is required!!!';
    }
    else if(values.phone_no.length <10 )
    {
        errors.phone_no = 'Phone no. should be 10 characters!!';
    }
    else if(values.phone_no.length >10)
    {
        errors.phone_no = 'Phone no. should be more than 10 characters!!';
    }
console.log({errors});
    return errors;
 }