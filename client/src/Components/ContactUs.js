import React from 'react';
import '../Styles/Components/ContactUs.css'

const ContactUs = () => (
    <div> 
        <div
            className="contact_us_style"
             style=
             {{background: 'url(https://images.unsplash.com/photo-1470350576089-539d5a852bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60) center / cover', height: '500px'}}>
            <h1>Contact Us</h1>
            <p>We a platform as a service connects tailors to customers</p>
        </div>
        <h1
            style={{textAlign: 'center', color: 'white', 
            fontFamily: 'Franklin Gothic Medium'
        }}
            >
            Get In Touch
        </h1>

        <div clearfix>
            <div className="float_left">
                <ul>
                    <h4>Corporate Headquaters</h4>
                    <li>No 383b Rumaugholu Road</li>
                    <li>Port-Harcourt</li>
                    <li>RiverState</li>
                </ul>
            </div>
            
            <div className="float_right">
                <ul>
                    <h4>General Contact</h4>
                    <li>Email: <a href="mailto:softbloom28@gmail.com" title="send an email to softbloom28@gmail.com">softbloom28@gmail.com</a></li>
                    <li>Phone: +2349078467458</li>
                </ul>
            </div>
        </div>
        
        
    </div>
)
export default ContactUs;
