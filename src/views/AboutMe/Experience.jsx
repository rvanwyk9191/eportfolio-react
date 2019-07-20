import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class Experience extends React.Component {

    constructor() {
        super();
        this.state = { work: [] };
    }

    componentDidMount() {
        fetch(`http://localhost:8081/position/getAll`)
            .then(res => res.json())
            .then(json =>
                {
                    let tempWorkArray = [];
                    for(let i = 0; i < json.length; i++){
                        let work = {
                            "id": json[i].id,
                            "title": json[i].title,
                            "company": json[i].company,
                            "startyear": json[i].startyear,
                            "startmonth": json[i].startmonth,
                            "endyear": json[i].endyear,
                            "endmonth": json[i].endmonth,
                            "requirements": []
                        }
                        tempWorkArray.push(work);
                    }
                    this.setState({work:tempWorkArray};
                }
            );
        fetch(`http://localhost:8081/description/getAll`)
            .then(res => res.json())
            .then(json => {
                for(let i = 0; i < this.state.work.length; i++){
                    let experience = [];
                    for(let x = 0; x < json.length; x++){
                        let workId = this.state.work[i].id;
                        let positionId = json[x].posotionid;
                        if(workId == positionId) {
                            experience.push(json[x].descriptions[0]);
                        }
                    }
                    this.state.work[i].requirements.push(experience);
                }
            });
        console.log(this.state.work);
    }

    render(){
        let workExperience =
                        this.state.work;
        console.log(workExperience);

        const { classes } = this.props;
        return (
            <p className={classes.textCenter}>
               <ul>
                {workElements}
               </ul>
             </p>
        );
    }
}

export default withStyles(landingPageStyle) (Experience);