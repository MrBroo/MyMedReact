import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function CategoryServicesCard({ imageUrl, name, ...rest }) {
  return (
    <Card
      {...rest}
      sx={{
        cursor: "pointer",
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
      <MKBox py={3} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="none" fontWeight="bold">
          {name}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CategoryServicesCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default CategoryServicesCard;
