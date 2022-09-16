import React from "react";
import Navbar from "../componetns/Navbar";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
