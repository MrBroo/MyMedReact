import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function ServicesPageCard({ imageUrl, name, allDefinition, about }) {
  return (
    <Card>
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
          <Grid item pt={3} pl={3} mb={2}>
            <MKTypography component="span" display="inline" variant="h3" fontWeight="bold">
              {name}
            </MKTypography>
          </Grid>
          <Grid item px={3}>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="bold" mr={1}>
              Aнализ:
            </MKTypography>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="light">
              {allDefinition}
            </MKTypography>
          </Grid>
          <Grid item px={3} pb={3}>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="bold" mr={1}>
              Подробнее:
            </MKTypography>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="light">
              {about}
            </MKTypography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

ServicesPageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  allDefinition: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ServicesPageCard;
