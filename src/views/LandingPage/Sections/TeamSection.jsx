import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Creator</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Piyush Mehta
                  <br />
                  <small className={classes.smallTitle}>Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Student
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <a href='https://instagram.com/pyushhh'>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-instagram"} />
                    </Button>
                  </a>
                  <a href='https://facebook.com/pyushh'>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-facebook"} />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
