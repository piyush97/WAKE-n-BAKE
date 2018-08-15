import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons


// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
// import TeamSection from "./Sections/TeamSection.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 style={{color:'#fff'}}>Wake n Bake</h1>
                <h4 style={{color:"#fff"}}>
                  Order Your Food Online
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
          </div>
           <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <img
                  alt="..."
                  src = 'https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg'
                  className={navImageClasses}
                />
                <img
                  alt="..."
                  src = 'https://singlestroke.io/wp-content/uploads/2015/10/high-quality-food-stock-photos-thumbnail.jpg'
                  className={navImageClasses}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <img
                  alt="..."
                  src = 'https://st4.depositphotos.com/8509220/20462/v/600/depositphotos_204623660-stock-video-topview-shot-of-a-family.jpg'
                  className={navImageClasses}
                />
                <img
                  alt="..."
                  src = 'https://images.parents.mdpcdn.com/sites/parents.com/files/styles/width_360/public/images/p_101198293_2.jpg'
                  className={navImageClasses}
                />
              </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        {/*<TeamSection / >*/}
        <Footer />
      </div>
    );
  }
}

export default withStyles((landingPageStyle, profilePageStyle))(LandingPage);
