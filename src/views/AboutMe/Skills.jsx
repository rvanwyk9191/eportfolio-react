import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class Skills extends React.Component {
    render(){
        const skills = ["Java 8", "Spring", "Hibernate", "React"]
        let skillElements = [];
        for(let i = 0; i < skills.length; i++){
            skillElements.push(<li>{skills[i]}</li>);
        }
        return (
            <div>
                <ul>
                    {skillElements}
                </ul>
            </div>)
    }
}

export default withStyles(landingPageStyle) (Skills);