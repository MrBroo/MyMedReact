import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes";
import MKBox from "../../../components/MKBox";
import bgImage from "../../../assets/images/slider-bg-1.jpg";
import MKTypography from "../../../components/MKTypography";
import MKButton from "../../../components/MKButton";
import MKInput from "../../../components/MKInput";
// eslint-disable-next-line import/no-cycle
import CenteredFooter from "../../../examples/Footers/CenteredFooter";

function Contact() {
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
                КОНТАКТ
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <MKBox component="section" pt={{ xs: 6, lg: 6 }} bgColor="white">
        <Container>
          <YMaps>
            <div>
              <Map
                defaultState={{
                  center: [41.222644, 69.204498],
                  zoom: 13,
                }}
                width="100%"
                height="20rem"
              >
                <Placemark geometry={[41.222644, 69.204498]} />
              </Map>
            </div>
          </YMaps>
          <Grid container item>
            <MKBox
              width="100%"
              bgColor="white"
              borderRadius="xl"
              shadow="xl"
              mb={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { rgba, linearGradient },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.dark.main, 0.4),
                        rgba(gradients.dark.state, 0.4)
                      )}, url(${bgImage})`,
                    backgroundSize: "100%",
                  }}
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                      <MKTypography variant="h3" color="white" mb={1}>
                        График работы
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        Понедельник - Среда : 8:00 - 17:00 <br />
                        Четверг - Пятница : 9:00 - 17:00 <br />
                        Суббота - Воскресенье : 10:00 - 17:00
                      </MKTypography>
                      <MKBox display="flex" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-phone" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          (+95) 650 30 30
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-envelope" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          mymed@info.com
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-map-marker-alt" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          Uzbekistan, Tashkent, Yangi Hayot
                        </MKTypography>
                      </MKBox>
                    </MKBox>
                  </MKBox>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <MKBox component="form" p={2} method="post">
                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                      <MKTypography variant="h2" mb={1}>
                        Привет
                      </MKTypography>
                      <MKTypography variant="body1" color="text" mb={2}>
                        Вы хотите связаться с нами?
                      </MKTypography>
                    </MKBox>
                    <MKBox pt={0.5} pb={3} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            requaried
                            variant="standard"
                            placeholder="Имя "
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            requaried
                            variant="standard"
                            placeholder="Телефон "
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            requaried
                            variant="standard"
                            placeholder="Ваше обращение..."
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            multiline
                            rows={6}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        <MKButton variant="gradient" color="info">
                          Отправить
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default Contact;
