import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LineChart from "./lineChart";
import BarChart from "./barchart";

const Page = () => {
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
          <Typography variant="h4" className={"title"} color="#454745">
            Home Page
          </Typography>
          <LineChart />
          <BarChart />
        </Paper>
      </Box>
    </>
  );
};

Page.propTypes = {};

export default Page;
