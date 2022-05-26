import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes";
import MKBox from "../../../components/MKBox";
import bgImage from "../../../assets/images/services.jpg";
import MKTypography from "../../../components/MKTypography";
import SaleCard from "../Cards/SaleCard";
import MKButton from "../../../components/MKButton";
import MKInput from "../../../components/MKInput";
import CenteredFooter from "../../../examples/Footers/CenteredFooter";

function Sale() {
  const [saleList, setSaleList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSale = async () => {
      axios.get(`http://localhost:3385/api/myMed/category/inSale/sale/${id}`).then((response) => {
        setSaleList(response.data.data);
      });
    };
    getSale();
  }, []);

  const renderData = saleList.map(({ imageUrl, name, remainedDate, about }) => (
    <Grid item xs={12} md={12} lg={12} key={name}>
      <SaleCard
        imageUrl={imageUrl}
        name={name}
        remainedDate={remainedDate}
        display="container"
        minHeight="auto"
        about={about}
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
                Sale
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <MKBox mt={5}>
          <Container>
            <Grid>
              <Grid container spacing={3}>
                {renderData}
              </Grid>
            </Grid>
          </Container>
          <MKBox component="section" pb={3} pt={{ xs: 6, lg: 6 }}>
            <Container>
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
                            Связаться с нами
                          </MKTypography>
                          <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                            Заполните форму, и наша клиника свяжется с вами в течение 24 часов.
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
        </MKBox>
      </MKBox>
      <CenteredFooter />
    </>
  );
}
export default Sale;
