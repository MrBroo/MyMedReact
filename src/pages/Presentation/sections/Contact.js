import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import axios from "axios";
import { useState } from "react";
import bgImage from "../../../assets/images/welcome.jpg";
import MKTypography from "../../../components/MKTypography";
import MKBox from "../../../components/MKBox";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";
import MKAlert from "../../../components/MKAlert";

function Contact() {
  const [name, setNameInput] = useState("");
  // eslint-disable-next-line camelcase
  const [phone_number, setPhoneInput] = useState("");
  const [booking, setBooking] = useState("");
  const [text, setText] = useState("");

  function inputClick() {
    // eslint-disable-next-line no-console
    axios
      .post("http://localhost:3385/api/myMed/clients/add", {
        name,
        phone_number,
        booking,
      })
      .then((response) => {
        setText(response.data.message);
        // eslint-disable-next-line no-empty
        if (response.data.status_code === 0) {
          setText(
            <Container>
              <MKAlert color="info" dismissible>
                Murojaatingiz qabul qilindi!
              </MKAlert>
            </Container>
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setText(
            <Grid item xs={12}>
              <MKAlert color="info" dismissible>
                Iltimos ma`lumotlarni e`tibor bilan to`ldiring!
              </MKAlert>
            </Grid>
          );
        }
      });
  }
  return (
    <>
      <MKBox component="section" mb={14} pt={{ xs: 4, lg: 4 }}>
        {text}
        <Container>
          <Grid container item>
            <MKBox
              variant="contained"
              width="100%"
              bgColor="white"
              borderRadius="xl"
              shadow="xl"
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
                    backgroundSize: "cover",
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
                      <MKBox mt={3}>
                        <MKButton
                          component="a"
                          target="_blank"
                          href="https://taplink.cc/osonjaluzi"
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                        >
                          <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton
                          component="a"
                          target="_blank"
                          href="https://taplink.cc/osonjaluzi"
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                        >
                          <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton
                          component="a"
                          target="_blank"
                          href="https://t.me/mymedclinic"
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                        >
                          <i className="fab fa-telegram" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton
                          component="a"
                          target="_blank"
                          href="https://www.instagram.com/mymedclinic/"
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                        >
                          <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
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
                            id="name"
                            onChange={(e) => setNameInput(e.target.value)}
                            variant="standard"
                            placeholder="Имя "
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            requaried
                            id="phone_number"
                            onChange={(e) => setPhoneInput(e.target.value)}
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
                            id="booking"
                            onChange={(e) => setBooking(e.target.value)}
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
                        <MKButton variant="gradient" onClick={(e) => inputClick(e)} color="info">
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
    </>
  );
}
export default Contact;
