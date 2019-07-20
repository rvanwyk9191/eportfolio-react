import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "../Components/Header.jsx";
import HeaderLinks from "../Components/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import AboutMeContent from "views/AboutMe/AboutMeContent.jsx";

const dashboardRoutes = [];

class AboutMe extends React.Component {

    render(){
        const { classes, ...rest } = this.props;
        return  (<div>
                    <div>
                        <Header
                          routes={dashboardRoutes}
                          brand="Reinhardt Vanwyk"
                          rightLinks={<HeaderLinks />}
                          fixed={false}
                          {...rest} />
                    </div>
                    <AboutMeContent/>
                </div>);
    }
}

export default withStyles(landingPageStyle) (AboutMe);