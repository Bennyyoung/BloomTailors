import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Components/Foot.css'
import {Footer, FooterSection, FooterLinkList }  from 'react-mdl';
class Foot extends React.Component {
    render () {
        return (
            <div className="stick_to_bottom">
                <Footer size="mini" style={{background: "rgb(17, 33, 44)"}}>
                    <FooterSection type="left" logo="Bloom Tailors">
                        <FooterLinkList>
                            <NavLink to="/contact_us" activeclassName="is-active">Contact Us</NavLink>
                            <NavLink to="/terms_of_use" activeclassName="is-active">Terms of Use & Privacy Policy</NavLink>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </div>
            
        )
    }
}

export default Foot;