import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes";
import MKBox from "../../../components/MKBox";
import bgImage from "../../../assets/images/slider-bg-1.jpg";
import MKTypography from "../../../components/MKTypography";
import ReviewsCard from "../Cards/ReviewsCard";
// eslint-disable-next-line import/no-cycle
import CenteredFooter from "../../../examples/Footers/CenteredFooter";

function Reviews() {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3385/api/myMed/category/reviews/list").then((response) => {
      setReviewsList(response.data.data);
    });
  }, []);

  const renderData = reviewsList.map(({ name, reviews, remainedDate }) => (
    <Grid item xs={12} md={12} lg={6} key={name}>
      <ReviewsCard name={name} reviews={reviews} remainedDate={remainedDate} />
    </Grid>
  ));
  return (
    <>
      <DefaultNavbar routes={routes} transparent relative />
      <MKBox bgColor="white">
        <MKBox
          minHeight="20rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid container item xs={12} lg={9} mx="auto" justifyContent="center">
              <MKTypography
                variant="h1"
                color="white"
                mt={-6}
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                ОТЗЫВЫ КЛИЕНТОВ
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <MKBox mt={5} pb={5}>
          <Container>
            <Grid>
              <Grid container spacing={3}>
                {renderData}
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <MKBox>
        <CenteredFooter />
      </MKBox>
    </>
  );
}
export default Reviews;
