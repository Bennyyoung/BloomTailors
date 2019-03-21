import React from 'react';
import { Layout, Header, Navigation, Content, Drawer, Textfield } from 'react-mdl';
import { NavLink } from 'react-router-dom';
import '../Styles/Components/Head.css';

class Head extends React.Component {
    render () {
        return (
            <div style={{height: '250px', position: 'relative'}}>
                <Layout 
                    style={{background: 'url(https://images.unsplash.com/photo-1522827144599-b1f5b28b2f52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'}}>

                    <Header title="BLOOM TAILORS" style={{color: 'black', background: "grey", position: 'fixed'}}>
                        <img src="http://www.cumsagames.com/images/logo1.png" alt="logo"/>
                        <Navigation className="hover_over_link">
                            <NavLink to="/" activeClassName="is-active" exact={true} style={{color: 'black', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>HOME</NavLink>
                            <NavLink to="/your_tailor" activeClassName="is-active" style={{color: 'black'}}>MEET MY TAILORS</NavLink>
                            <NavLink to="/about_us" activeClassName="is-active" style={{color: 'black'}}>ABOUT US</NavLink>
                            <NavLink to="/contact_us" activeClassName="is-active" style={{color: 'black'}}>CONTACT US</NavLink>
                            <NavLink to="/sign_up" activeClassName="is-active" style={{color: 'black'}}>GET STARTED</NavLink>
                            <NavLink to="/login" activeClassName="is-active" style={{color: 'black'}}>Log in</NavLink>
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
                        <Navigation className="hover_over_link">
                            <NavLink to="/" activeClassName="is-active" exact={true} style={{color: 'black'}}>HOME</NavLink>
                            <NavLink to="/your_tailor" activeClassName="is-active" style={{color: 'black'}}>MEET MY TAILORS</NavLink>
                            <NavLink to="/about_us" activeClassName="is-active" style={{color: 'black'}}>ABOUT US</NavLink>
                            <NavLink to="/contact_us" activeClassName="is-active" style={{color: 'black'}}>CONTACT US</NavLink>
                            <NavLink to="/sign_up" activeClassName="is-active" style={{color: 'black'}}>GET STARTED</NavLink>
                            <NavLink to="/login" activeClassName="is-active" style={{color: 'black'}}>Log in</NavLink>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
                
            </div>
        );
    }
}

export default Head;