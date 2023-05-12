import React from "react";
import { useEffect } from "react";
import LineChart from "./columnChart";
import BarChart from "./barchart";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { useLazyGetServicesQuery } from '../../logic/services'
const Page = () => {

  const [ trigger, { data , error, isLoading}] = useLazyGetServicesQuery()

  useEffect(()=> { 
    trigger();
  },[trigger])
  
  console.log(data)

  return (
    <>
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
                >
                  {"Actualizar"}
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent={"left"}>
              <Grid item xs={12} md={12} xl={12}>
                <LineChart />
              </Grid>
              <Grid item xs={12} md={12} xl={12}>
                <BarChart />
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
