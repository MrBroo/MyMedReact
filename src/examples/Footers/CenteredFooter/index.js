/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Telegram, YouTube } from "@mui/icons-material";
// eslint-disable-next-line import/no-cycle
import InSpecialist from "../../../pages/Presentation/pages/InSpecialist";
// eslint-disable-next-line import/no-cycle
import CategoryServices from "../../../pages/Presentation/pages/CategoryServices";
// eslint-disable-next-line import/no-cycle
import InSale from "../../../pages/Presentation/pages/InSale";
// eslint-disable-next-line import/no-cycle
import InNews from "../../../pages/Presentation/pages/InNews";
// eslint-disable-next-line import/no-cycle
import Reviews from "../../../pages/Presentation/pages/Reviews";
// eslint-disable-next-line import/no-cycle
import Contact from "../../../pages/Presentation/pages/Contact";

function CenteredFooter({ company, routes, socials, light }) {
  const { href, name } = company;

  const year = new Date().getFullYear();

  // eslint-disable-next-line no-shadow
  const renderRoutes = routes.map((route) => (
    <MKTypography
      key={route.name}
      component={Link}
      href={route.route}
      textAlign="center"
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {route.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" pt={5} pb={3}>
      <Grid container justifyContent="center">
        <MKTypography
          pb={2}
          textAlign="center"
          color={light ? "white" : "secondary"}
          fontWeight="bold"
        >
          МЫ ПРЕДЛАГАЕМ ВАМ СОВРЕМЕННОЕ <br /> ОБОРУДОВАНИЕ И УСЛУГИ ПРОФЕССИОНАЛЬНЫХ ВРАЧЕЙ
        </MKTypography>
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderRoutes}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={2}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} Project by{" "}
            <MKTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {name}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  company: { href: "https://www.instagram.com/ibrokhim_911/?hl=ru/", name: "Fayzullayev" },
  routes: [
    {
      name: "ВРАЧИ",
      route: "/pages/landing-pages/specialist",
      component: <InSpecialist />,
    },
    {
      name: "ДИАГНОСТИКА",
      route: "/pages/landing-pages/services",
      component: <CategoryServices />,
    },
    {
      name: "СКИДКИ",
      route: "/pages/landing-pages/sale",
      component: <InSale />,
    },
    {
      name: "НОВОСТИ",
      route: "/pages/landing-pages/news",
      component: <InNews />,
    },
    {
      name: "ОТЗЫВЫ",
      route: "/pages/landing-pages/reviews",
      component: <Reviews />,
    },
    {
      name: "КОНТАКТ",
      route: "/pages/landing-pages/contact",
      component: <Contact />,
    },
  ],
  socials: [
    { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/CreativeTim/" },
    {
      icon: <YouTube fontSize="small" />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com/creativetimofficial/",
    },
    { icon: <Telegram fontSize="small" />, link: "https://github.com/creativetimofficial" },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  routes: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default CenteredFooter;
