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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ServicesCard({ image, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  return (
    <Card
      sx={{
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover%",
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) translate3d(0px, -12px, 0px)",
        },
      }}
    >
      <MKBox minHeight="10rem" my="auto" p={3}>
        <MKBox py={3}>
          <MKTypography
            variant="h2"
            color="white"
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {title}
          </MKTypography>
          <MKTypography variant="body2" color="white" mt={1} mb={3}>
            {description}
          </MKTypography>
          {action.type === "internal" ? (
            <MKTypography
              component={Link}
              to={action.route}
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          ) : (
            <MKTypography
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          )}
        </MKBox>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the BackgroundBlogCard
ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesCard;
