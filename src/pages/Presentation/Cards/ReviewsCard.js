import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function ReviewsCard({ name, reviews, remainedDate }) {
  return (
    <Card
      sx={{
        minHeight: "15rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <MKBox pt={3} px={3}>
            <MKTypography display="inline" variant="h4" textTransform="uppercase" fontWeight="bold">
              {name}
            </MKTypography>
          </MKBox>
          <MKBox px={3} mb={2}>
            <MKTypography
              sx={{ display: "flex", alignItems: "center" }}
              variant="h6"
              fontWeight="regular"
            >
              <Icon>schedule</Icon>&nbsp;
              {remainedDate}
            </MKTypography>
          </MKBox>
          <Grid item px={3} pb={3}>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="bold" mr={1}>
              Подробнее:
            </MKTypography>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="light">
              {reviews}
            </MKTypography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
ReviewsCard.propTypes = {
  name: PropTypes.string.isRequired,
  remainedDate: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
};
export default ReviewsCard;
