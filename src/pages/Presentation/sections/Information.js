import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";

function Information() {
  return (
    <Container sx={{ my: 6 }}>
      <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
        <Grid item xs={12} md={4}>
          <DefaultCounterCard
            count={100}
            suffix="+"
            separator=","
            title="ВРАЧИ"
            description="Hozirda biz jamoamiz bilan 1000dan ortiq xonadonga muvafaqiyatli xizmat ko`rsatganmiz"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DefaultCounterCard
            count={200}
            suffix="+"
            separator=","
            title="ОБОРУДОВАНИЕ"
            description="Bizda 200 xil turdagi jaluzi va jaluzi mahsulotlari mavjud"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DefaultCounterCard
            count={24}
            suffix="/7"
            title="Aloqa xizmati"
            description="Bizga istalgan vaqtda qo`ng`iroq qilib boglanishingiz mumkin"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Information;
