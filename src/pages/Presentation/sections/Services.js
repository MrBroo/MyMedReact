import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import bgImage2 from "assets/images/aparatura.jpg";
import doctor1 from "assets/images/doctor1.jpg";
import otziv from "assets/images/otzivi.jpg";
import skidki from "assets/images/skidki.jpg";
import news from "assets/images/news.jpg";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";
import BackgroundBlogCard from "../../../examples/Cards/BlogCards/BackgroundBlogCard";
import MKBox from "../../../components/MKBox";
import ServicesCard from "../Cards/ServicesCard";

function Services() {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", mt: 10, mb: 2, mx: "auto", px: 0.75 }}
      >
        <MKBadge variant="contained" color="info" badgeContent="Новые" container />
        <MKTypography variant="h1" fontWeight="bold">
          В нашем клинике
        </MKTypography>
      </Grid>
      <MKBox component="section" py={2}>
        <Container>
          <Grid mb={3}>
            <ServicesCard
              image={bgImage2}
              title="ДИАГНОСТИКА"
              description="Наша клиника обслуживается на современном оборудовании."
              action={{
                type: "internal",
                route: "/pages/landing-pages/services",
                label: "Подробнее ",
              }}
            />
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <BackgroundBlogCard
                image={doctor1}
                title="НАШИ ВРАЧИ"
                description="В нашей клинике работают мастера своего дела"
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/specialist",
                  label: "Подробнее",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <BackgroundBlogCard
                image={news}
                title="НОВОСТИ НАШЕЙ КЛИНИКИ"
                description="Будьте в курсе последних новостей."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/news",
                  label: "Подробнее",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <BackgroundBlogCard
                image={otziv}
                title="ОТЗЫВЫ КЛИЕНТОВ"
                description="Хотите узнать мнение клиентов, которых мы обслуживаем ?"
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/reviews",
                  label: "Подробнее",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <BackgroundBlogCard
                image={skidki}
                title="СКИДКИ"
                description="Будьте в курсе скидок!"
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/sale",
                  label: "Подробнее",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}
export default Services;
