import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import Header from "../Components/Header.jsx";
import HeaderLinks from "../Components/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ContactForm from "../Components/ContactForm.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

const dashboardRoutes = [];

class EportfolioPage extends React.Component {
      render() {
        const { classes, ...rest } = this.props;
        return (
          <div>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              brand="Reinhardt Vanwyk"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
            />
            <Parallax filter image={require("assets/img/miami.jpg")}>

            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <ContactForm/>
              </div>
            </div>
          </div>
        );
      }
}

export default withStyles(landingPageStyle) (EportfolioPage);