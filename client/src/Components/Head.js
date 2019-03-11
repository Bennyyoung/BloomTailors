import React from 'react';
import { Layout, Header, Navigation, Content, Drawer, Textfield } from 'react-mdl';
import { Link } from 'react-router-dom';
import '../Styles/Components/Head.css';

class Head extends React.Component {
    render () {
        return (
            <div style={{height: '250px', position: 'relative', backgroundColor: 'white'}}>
                <Layout style={{background: 'url(https://images.unsplash.com/photo-1522827144599-b1f5b28b2f52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'}}>

                    <Header title="BLOOM TAILORS" style={{color: 'black', backgroundColor: 'grey', position: 'fixed'}}>
                        <img src="http://www.cumsagames.com/images/logo1.png" alt="logo"/>
                        <Navigation>
                            <Link to="/" style={{color: 'black', backgroundColor: 'grey'}}>HOME</Link>
                            <Link to="/your_tailor" style={{color: 'black'}}>TAILORS</Link>
                            <Link to="/about_us" style={{color: 'black'}}>ABOUT</Link>
                            <Link to="/contact_us" style={{color: 'black'}}>CONTACT US</Link>
                            <Link to="/order_now" style={{color: 'black'}}>ORDER NOW</Link>
                            <Link to="/sign_up" style={{color: 'black'}}>GET STARTED</Link>
                            <Link to="/login" style={{color: 'black'}}>Log in</Link>
                        </Navigation>
                        <Textfield 
                            onChange={() => {
                                
                            }}
                            value=""
                            label="Search your tailor"
                            expandable
                            inputClassName
                            expandableIcon="search"
                            style={{color: 'white'}}
                            floatingLabel
                        />
                    </Header>

                    <Drawer title="BLOOM TAILORS" style={{height: '250px', position: 'fixed'}}>
                        <Navigation>
                            <Link to="/" style={{color: 'black'}}>HOME</Link>
                            <Link to="/your_tailor" style={{color: 'black'}}>TAILORS</Link>
                            <Link to="/about_us" style={{color: 'black'}}>ABOUT</Link>
                            <Link to="/contact_us" style={{color: 'black'}}>CONTACT US</Link>
                            <Link to="/order_now" style={{color: 'black'}}>ORDER NOW</Link>
                            <Link to="/sign_up" style={{color: 'black'}}>GET STARTED</Link>
                            <Link to="/login" style={{color: 'black'}}>Log in</Link>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
                
            </div>
        );
    }
}

export default Head;