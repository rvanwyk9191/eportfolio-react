import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

// @material-ui/icons
import Work from "@material-ui/icons/Work";
import Computer from "@material-ui/icons/Computer";
import Mouse from "@material-ui/icons/Mouse";

import Experience from "views/AboutMe/Experience.jsx";
import Skills from "views/AboutMe/Skills.jsx";
import Projects from "views/AboutMe/Projects.jsx";

class AboutMeContent extends React.Component {

    render(){
        let workExperience =
                [{"jobtitle":"Gravity IT Resources","startdate":"April 2019","enddate":"Present","responsibilities":["resp 1", "resp 2"]},
                {"jobtitle":"JPMorgan Chase","startdate":"July 2013","enddate":"April 2019"}];
        let workElements = [];
        for(let i = 0; i < workExperience.length; i++){
            workElements.push(<li><h3>{workExperience[i].jobtitle}</h3><span styles={{paddingLeft:'50px'}}>{workExperience[i].startdate} - {workExperience[i].enddate}</span></li>)
        }
        return (<div>
                 <Card>
                   <CardBody styles={{paddingLeft:'50px'}}>
                     <CustomTabs
                               headerColor="success"
                               tabs={[
                                 {
                                   tabName: "Experience",
                                   tabIcon: Work,
                                   tabContent: (
                                     <Experience/>
                                   )
                                 },
                                 {
                                   tabName: "Skills",
                                   tabIcon: Computer,
                                   tabContent: (
                                     <Skills/>
                                   )
                                 },
                                 {
                                   tabName: "Projects",
                                   tabIcon: Mouse,
                                   tabContent: (
                                     <Projects/>
                                   )
                                 }
                               ]}
                             />
                   </CardBody>
                 </Card>
               </div>);
    }
}

export default withStyles(landingPageStyle) (AboutMeContent);