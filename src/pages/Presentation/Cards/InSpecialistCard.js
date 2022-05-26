import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function InSpecialistCard({ imageUrl, name, direction, ...rest }) {
  return (
    <Card
      {...rest}
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(1deg) translate3d(0px, -12px, 0px)",
        },
      }}
    >
      <MKBox position="relative" borderRadius="lg">
        <MKBox
          component="img"
          src={imageUrl}
          alt={name}
          borderRadius="15px 15px 0 0"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox borderRadius="lg" width="100%" height="100%" position="absolute" left={0} top={0} />
      </MKBox>
      <MKBox pt={3} mt={-1} px={3} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {name}
        </MKTypography>
      </MKBox>
      <MKBox pt={3} px={3}>
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {direction}
        </MKTypography>
      </MKBox>
    </Card>
  );
}
// Typechecking props for the CenteredBlogCard
InSpecialistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default InSpecialistCard;
