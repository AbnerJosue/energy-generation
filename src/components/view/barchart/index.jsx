import React from "react";
import Barchart from "./barchart";
import { Paper } from "@mui/material";

function ComponentBarChart({ props }) {
  const series =
    props &&
    props.map((val) => {
      return val.value;
    });

  const colors =
    props &&
    props.map((val) => {
      return val.color;
    });

  const name =
    props &&
    props.map((val) => {
      return val.name;
    });

  return (
    <>
      <Paper elevation={1} sx={{ padding: "10px" }}>
        {props?.length && (
          <>
            <h5>{"Porcentaje por tipo de generación"}</h5>
            <Barchart series={series} colors={colors} name={name} />
          </>
        )}
      </Paper>
    </>
  );
}

export default ComponentBarChart;
