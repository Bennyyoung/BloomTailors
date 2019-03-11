import React from 'react';
import {Footer, FooterSection, FooterLinkList, FooterDropDownSection}  from 'react-mdl';
class Foot extends React.Component {
    render () {
        return (
            <Footer size="mega">
                <FooterSection type="middle">
                    <FooterDropDownSection title="Features">
                        <FooterLinkList>
                            <a href="#">About</a>
                            <a href="#">Terms</a>
                            <a href="#">Partners</a>
                            <a href="#">Updates</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Details">
                        <FooterLinkList>
                            <a href="#">Specs</a>
                            <a href="#">Tools</a>
                            <a href="#">Resources</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Technology">
                        <FooterLinkList>
                            <a href="#">How it works</a>
                            <a href="#">Patterns</a>
                            <a href="#">Usage</a>
                            <a href="#">Products</a>
                            <a href="#">Contracts</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="FAQ">
                        <FooterLinkList>
                            <a href="#">Questions</a>
                            <a href="#">Answers</a>
                            <a href="#">Contact Us</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                </FooterSection>
                <FooterSection type="bottom" logo="BLOOM">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
                <div>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="#"> BLOOM </a>
                </div>
            </Footer>
        )
    }
}

export default Foot;