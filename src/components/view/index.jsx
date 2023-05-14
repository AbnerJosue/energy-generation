import React from "react";
import { useEffect, useState } from "react";
import ColumnChart from "./columnChart";
import BarChart from "./barchart";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { useLazyGetServicesQuery } from "../../logic/services";
const Page = () => {
  const [trigger, { data, error, isLoading }] = useLazyGetServicesQuery();
  const [updateInfo, setUpdateInfo] = useState(false);
  const mathRandom = Math.random();
  const [firstUpdate, setFirstUpdate] = useState(true); 
  useEffect(() => {
    if(firstUpdate){ 
      trigger({ id: mathRandom });
      setFirstUpdate(false)
    }
    if (updateInfo) {
      trigger({ id: mathRandom });
      setUpdateInfo(false);
    }
  }, [mathRandom, trigger, updateInfo]);

  const hydroelectricPlants = [];
  const thermal = [];
  const solar = [];
  const windPower = [];
  const biogas = [];

  data &&
    data?.unit?.map((el, i) => {
      if (i >= 0 && i <= 115) hydroelectricPlants.push(el);
      if (i >= 116 && i <= 163) thermal.push(el);
      if (i >= 164 && i <= 209) solar.push(el);
      if (i >= 210 && i <= 222) windPower.push(el);
      if (i.length - 1) biogas.push(el);
    });

  const pie = data?.pie.map((val) => val);

  return (
    <>
    <>{isLoading && ( <>Cargando</> )}</>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            width: "100%",
            height: "90vh",
          },
        }}
      >
        <Paper elevation={0} sx={{ padding: "20px" }}>
          <Paper elevation={1} className="parper-container">
            <Typography variant="h4" className={"title"} color="#454745">
              {"Home Page"}
            </Typography>
            <Grid container justifyContent={"flex-end"}>
              <Grid>
                <Button
                  endIcon={<RotateLeftIcon />}
                  variant="contained"
                  color="success"
                  sx={{ borderRadius: "10px" }}
                  onClick={() => setUpdateInfo(true)}
                >
                  {"Actualizar"}
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent={"left"}>
              <Grid item xs={12} md={12} xl={12}>
                <ColumnChart
                  hydro={hydroelectricPlants}
                  thermal={thermal}
                  solar={solar}
                  windPower={windPower}
                  biogas={biogas}
                />
              </Grid>
              <Grid item xs={12} md={12} xl={12}>
                <BarChart props={pie} />
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Box>
    </>
  );
};

Page.propTypes = {};

export default Page;
