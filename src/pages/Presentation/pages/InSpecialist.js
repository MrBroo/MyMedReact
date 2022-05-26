import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MKTypography from "../../../components/MKTypography";
import bgImage from "../../../assets/images/slider-bg-1.jpg";
import MKBox from "../../../components/MKBox";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
// eslint-disable-next-line import/no-cycle
import CenteredFooter from "../../../examples/Footers/CenteredFooter";
import InSpecialistCard from "../Cards/InSpecialistCard";

function InSpecialist() {
  const [inSpecialistList, setInSpecialistList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3385/api/myMed/category/inSpecialist/list").then((response) => {
      setInSpecialistList(response.data.data);
    });
  }, []);

  const navigate = useNavigate();
  const renderData = inSpecialistList.map(({ imageUrl, name, direction, id }) => (
    <Grid item xs={12} md={12} lg={4} key={name}>
      <InSpecialistCard
        imageUrl={imageUrl}
        name={name}
        direction={direction}
        onClick={() => navigate(`/pages/landing-pages/specialist/${id}`)}
      />
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
                НАШИ ВРАЧИ
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
export default InSpecialist;
