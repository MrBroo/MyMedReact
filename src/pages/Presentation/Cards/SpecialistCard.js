import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function SpecialistCard({ imageUrl, name, category, seniority, education, employmentHistory }) {
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
          <MKBox pt={3} px={3} mb={2}>
            <MKTypography display="inline" variant="h3" fontWeight="bold">
              {name}
            </MKTypography>
          </MKBox>
          <Grid item px={3}>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="bold" mr={1}>
              Врач:
            </MKTypography>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="light">
              {category}
            </MKTypography>
          </Grid>
          <Grid item px={3}>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="bold" mr={1}>
              Стаж:
            </MKTypography>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="light">
              {seniority}
            </MKTypography>
          </Grid>
          <Grid item px={3}>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="bold" mr={1}>
              Университет:
            </MKTypography>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="light">
              {education}
            </MKTypography>
          </Grid>
          <Grid item px={3} pb={3}>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="bold" mr={1}>
              Трудовая книжка:
            </MKTypography>
            <MKTypography component="span" display="inline" variant="h5" fontWeight="light">
              {employmentHistory}
            </MKTypography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

SpecialistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  seniority: PropTypes.string.isRequired,
  employmentHistory: PropTypes.string.isRequired,
};
export default SpecialistCard;
