import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import GridItem from "components/Grid/GridItem.jsx";

class Projects extends React.Component {

    render() {
        const projectsJson = [
            {"id":"1","name":"Eportfolio React Build Out","description":"A simple React build out for initial stages of my eportfolio project"},
            {"id":"2","name":"About Me - Resume Microservice","description":"Part 1 of eportfolio microservices development"}
        ];
        let projectElements = [];
        for(let i = 0; i < projectsJson.length; i++){
            projectElements.push(
                <GridItem container direction="row" xs={4} alignItems="center" styles={{width:"50rem"}}>
                    <Card>
                        <CardBody>
                            <h3>{projectsJson[i].name}</h3>
                            <p>{projectsJson[i].description}</p>
                        </CardBody>
                    </Card>
                </GridItem>);
        }
        return (
            <div>
                <GridContainer>
                    {projectElements}
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(landingPageStyle) (Projects);