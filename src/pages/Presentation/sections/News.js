import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";
import InNewsPresentationCard from "../Cards/InNewsPresentationCard";
import MKBox from "../../../components/MKBox";

function News() {
  const [newsPageList, setNewsPageList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3385/api/myMed/category/inNews/list").then((response) => {
      setNewsPageList(response.data.data);
    });
  }, []);

  const navigate = useNavigate();

  const renderData = newsPageList.map(({ imageUrl, name, id }) => (
    <Grid item xs={12} md={6} lg={4} key={name}>
      <InNewsPresentationCard
        imageUrl={imageUrl}
        name={name}
        onClick={() => navigate(`/pages/landing-pages/news/${id}`)}
      />
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", mt: 6, mb: 2, mx: "auto", px: 0.75 }}
      >
        <MKBadge variant="contained" color="info" badgeContent="В клинике " container />
        <MKTypography variant="h2" fontWeight="bold">
          Новости
        </MKTypography>
      </Grid>
      <Container>
        <MKBox mt={5} pb={5}>
          <Grid container spacing={3}>
            {renderData}
          </Grid>
        </MKBox>
      </Container>
    </>
  );
}
export default News;
