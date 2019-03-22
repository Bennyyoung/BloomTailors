import React from 'react';
import { Card, CardTitle, CardActions, CardText, CardMenu } from 'react-mdl';
import '../Styles/Components/Tailors.css';
import TailorsModal from './TailorsModal';
import { Link } from 'react-router-dom';

class Tailors extends React.Component {
    render() {

        return (
            <div> 
                <Card shadow={0} className="flex-container">
                            <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                                <CardTitle expand>

                                </CardTitle>

                            </Link>
                        <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                           Patrick
                        </CardText>
                        <CardActions border>
                        <div>
                            <TailorsModal />
                        </div>  
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                </Card>

                <div>   
                    <Card shadow={0} className="flex-container">
                        <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                            <CardTitle expand>
                            </CardTitle>
                        </Link>
                        <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                        E.H
                        </CardText>
                        <CardActions border>
                        <div>
                            <TailorsModal />
                        </div>  
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                </Card>
                </div>

                <div>   
                    <Card shadow={0} className="flex-container">
                        <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                            <CardTitle expand>
                            </CardTitle>
                        </Link>
                        <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                        Leks
                        </CardText>
                        <CardActions border>
                        <div>
                            <TailorsModal />
                        </div>  
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                </Card>
                </div>

                <div>   
                    <Card shadow={0} className="flex-container">
                        <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                            <CardTitle expand>
                            </CardTitle>
                        </Link>
                        <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                        Steven
                        </CardText>
                        <CardActions border>
                        <div>
                            <TailorsModal />
                        </div>  
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                </Card>
                </div>

                <div>   
                    <Card shadow={0} className="flex-container">
                            <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                                <CardTitle expand>
                                </CardTitle>
                            </Link>
                            <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                                Wammy
                            </CardText>
                            <CardActions border>
                            <div>
                                <TailorsModal />
                            </div>  
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                    </Card>
                </div>

                <div>   
                    <Card shadow={0} className="flex-container">
                            <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                                <CardTitle expand>
                                </CardTitle>
                            </Link>
                            <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                            Skekinah
                            </CardText>
                            <CardActions border>
                            <div>
                                <TailorsModal />
                            </div>  
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                    </Card>
                </div>

                <div>   
                    <Card shadow={0} className="flex-container">
                            <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                                <CardTitle expand>
                                </CardTitle>
                            </Link>
                            <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                            Jessica
                            </CardText>
                            <CardActions border>
                            <div>
                                <TailorsModal />
                            </div>  
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                    </Card>
                </div>

                <div>   
                    <Card shadow={0} className="flex-container">
                            <Link to="my_tailor" style={{color: 'grey', height: '250px'}}>
                                <CardTitle expand>
                                </CardTitle>
                            </Link>
                            <CardText style={{fontWeight: "bold", fontFamily: "Helvetica"}}>
                                Bob
                            </CardText>
                            <CardActions border>
                            <div>
                                <TailorsModal />
                            </div>  
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Tailors;