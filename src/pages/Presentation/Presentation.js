/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Images
import bgImage from "assets/images/slider-bg-1.jpg";
import Information from "./sections/Information";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import News from "./sections/News";
// eslint-disable-next-line import/no-cycle
import CenteredFooter from "../../examples/Footers/CenteredFooter";
// eslint-disable-next-line import/no-cycle
import routes from "../../routes";

function Presentation() {
  return (
    <>
      <DefaultNavbar relative transparent routes={routes} />
      <MKBox bgColor="white">
        <MKBox
          minHeight="65vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.secondary.main, 0.3),
                rgba(gradients.secondary.state, 0.3)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid container item xs={12} lg={9} mx="auto">
              <MKTypography
                variant="h1"
                color="white"
                mt={-1}
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                    textAlign: "center",
                  },
                })}
              >
                МЫ ПРЕДЛАГАЕМ <br /> ВАМ СОВРЕМЕННОЕ ОБОРУДОВАНИЕ И УСЛУГИ ПРОФЕССИОНАЛЬНЫХ ВРАЧЕЙ
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <Services />
        <Information />
        <Contact />
        <News />
      </MKBox>
      <MKBox>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default Presentation;
