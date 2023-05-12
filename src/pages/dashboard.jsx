import React from "react";
import AppBarComponent from "@/components/appBar";
import ViewDashboard from "@/components/view";
import { Box, Container } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <AppBarComponent />
      <div className="container">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
            px: 1,
          }}
        >
          <Container maxWidth="xl">
            <ViewDashboard />
          </Container>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
