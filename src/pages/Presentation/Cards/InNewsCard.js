import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function InNewsCard({ imageUrl, name, remainedDate, ...rest }) {
  return (
    <Card
      {...rest}
      sx={{
        minHeight: "15rem",
        cursor: "pointer",
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
      <Grid container>
        <Grid item xs={12} md={6} lg={5}>
          <MKBox position="relative" borderRadius="lg">
            <MKBox
              xs={12}
              lg={4}
              component="img"
              src={imageUrl}
              alt={name}
              borderRadius="15px 15px 0 0"
              width="100%"
              position="relative"
              zIndex={1}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <MKBox pt={1} px={3}>
            <MKTypography
              display="inline"
              textTransform="capitalize"
              variant="h5"
              fontWeight="bold"
            >
              {name}
            </MKTypography>
          </MKBox>
          <MKBox px={3}>
            <MKTypography
              sx={{ display: "flex", alignItems: "center" }}
              variant="h6"
              fontWeight="regular"
            >
              <Icon>schedule</Icon>&nbsp;
              {remainedDate}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}
InNewsCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  remainedDate: PropTypes.string.isRequired,
};
export default InNewsCard;
