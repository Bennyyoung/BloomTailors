import React from 'react';
import { Card, CardTitle, CardActions } from 'react-mdl';
import '../Styles/Components/Tailors.css';
import { Link } from 'react-router-dom';

class Tailors extends React.Component {
    render() {

        return (
            <div> 
                <div>   
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions border>
                                <span className="span_class">
                                    Patrick
                                </span>        
                            </CardActions>
                            <div className="rating">
                                    <input type="radio" name="star" id='star1'/>
                            </div>
                        </Card>
                    </Link> 
                    
                    
                    </div>
                    

                <div>
                    
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions>
                                <span className="span_class">
                                    E.H
                                </span>
                            </CardActions>
                        </Card>
                    </Link> 
                </div>

                <div>
                    
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions>
                                <span className="span_class">
                                    Guy
                                </span>
                            </CardActions>
                        </Card>
                    </Link> 
                </div>

                <div>
                    
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions>
                                <span className="span_class">
                                Jack
                                </span>
                            </CardActions>
                        </Card>
                    </Link> 
                </div>

                <div>
                    
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions>
                                <span className="span_class">
                                    Mason
                                </span>
                            </CardActions>
                        </Card>
                    </Link> 
                </div>

                <div>
                    
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions>
                                <span className="span_class">
                                    Shekinah
                                </span>
                            </CardActions>
                        </Card>
                    </Link> 
                </div>

                <div>
                    
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions>
                                <span className="span_class">
                                    Alpha
                                </span>
                            </CardActions>
                        </Card>
                    </Link> 
                </div>

                <div>
                    
                    <Link to="/myTailor">
                        <Card shadow={6} className="flex-container">
                                            
                            <CardTitle />
                            <CardActions>
                                <span className="span_class">
                                    Bobby
                                </span>
                            </CardActions>
                        </Card>
                    </Link> 
                </div>
        </div>
        )
    }
}


export default Tailors;