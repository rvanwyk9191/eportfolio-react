import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

class ContactForm extends React.Component {
render() {
    const { classes } = this.props;
    return (
      <div>
          <Card>
          <CardHeader className={classes.title} color="success"><h2>Contact Me</h2></CardHeader>
          <CardBody>
            <form id="eport-contactform">
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </CardBody>
      </Card>
      </div>
    );
  }
}

export default withStyles(workStyle) (ContactForm);