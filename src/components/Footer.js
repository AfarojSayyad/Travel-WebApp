import React, {useState} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    // Email validation
    // const [emailError, setEmailError] = useState('')
    // const validateEmail = (e) => {
    //   var email = e.target.value
    
    //   if (validator.isEmail(email)) {
    //     setEmailError('Valid Email :)')
    //   } else {
    //     setEmailError('Enter valid Email!')
    //   }
    // }
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals

                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
               
            </section>
            
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/'>Home</Link>                        
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/services'>Services</Link>                        
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/products'>Products</Link>                        
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/sign-up'>Contact Us</Link>                        
                    </div>
                </div>
        
                <section>
                <div className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='' className='social-logo'>
                            TRAVEL
                            <i class='fab fa-typo3' />
                            </Link>
                        </div>
                        <small className='website-rights'>Travel @ 2022</small>

                            <div className='social-icon'>
                                <Link className='social-icon-link facebook'
                                      to='/'
                                      target='_blank'
                                      aria-label='Facebook'                                
                                >                                   
                                    <i class='fab fa-facebook f'/>
                                    
                                </Link>
                            
                                <Link className='social-icon-link instagram'
                                      to='/'
                                      target='_blank'
                                      aria-label='Instagram'                                
                                >                                   
                                    <i class='fab fa-instagram'/>
                                    
                                </Link>
                            
                                <Link className='social-icon-link twitter'
                                      to='/'
                                      target='_blank'
                                      aria-label='Twitter'                                
                                >                                   
                                    <i class='fab fa-twitter'/>
                                    
                                </Link>
                            
                                <Link className='social-icon-link youtube'
                                      to='/'
                                      target='_blank'
                                      aria-label='YouTube'                                
                                >                                   
                                    <i class='fab fa-youtube'/>
                                    
                                </Link>
                           
                                <Link className='social-icon-link linkedin'
                                      to='/'
                                      target='_blank'
                                      aria-label='LinkedIn'                                
                                >                                   
                                    <i class='fab fa-linkedin'/>
                                    
                                </Link>
                            </div>

                        
                    </div>

                </div>
                </section>

            </div>

        </div>
      );
}

export default Footer;