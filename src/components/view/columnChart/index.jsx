import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import ColumnChart from "./columnChart";

const ComponentLineChart = ({ hydro, thermal, solar, windPower, biogas }) => {
  const [renovables, setRenovables] = useState([0, 0, 0, 0]);
  const names = ["Renovables", "Termicas"];

  useEffect(() => {
    if (hydro && solar && windPower && biogas) {
      const renovables = thermal
        .concat(hydro)
        .concat(solar)
        .concat(windPower)
        .concat(biogas);
      setRenovables(renovables);
    }
  }, [hydro, solar, windPower, biogas, thermal, setRenovables]);

  const total =
    renovables &&
    renovables
      .map((val) => {
        const parseValue = parseInt(val.value);
        return parseValue;
      })
      .reduce((accumaltor, currentValue) => accumaltor + currentValue, 0)
      .toFixed(2);

  const termicas =
    thermal &&
    thermal
      .map((val) => {
        console.log(val);
        const parseValue = parseFloat(val.value);
        console.log(parseValue);
        return parseValue;
      })
      .reduce((accumaltor, currentValue) => accumaltor + currentValue, 0)
      .toFixed(2);
  const twoSum = parseFloat(total) + parseFloat(termicas);
  const percentageRenovables = (parseFloat(total) / twoSum) * 100;
  const percentageTermicas = (parseFloat(termicas) / twoSum) * 100;
  console.log(twoSum);
  return (
    <>
      <Paper elevation={1} sx={{ padding: "10px" }}> 
      {percentageRenovables && percentageTermicas ? (
        <ColumnChart
          v1={parseFloat(percentageRenovables.toFixed(2))}
          v2={parseFloat(percentageTermicas.toFixed(2))}
          names={names}
        />
      ) : (
        ""
      )}
      </Paper>
    </>
  );
};

export default ComponentLineChart;
