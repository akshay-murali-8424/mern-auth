import { Box } from "@mui/material";
import React from "react";
import NavBar from "../../components/userHeader/userHeader";

function Home() {
  const myStyle = {
    backgroundImage: "url('https://images.alphacoders.com/597/597903.jpg')",
    backgroundColor: "#000",
    height: "100vh",
    fontSize: "50px",
    backgroundSize:"cover"
   
  };
  return (
    <>
      <NavBar />
      <Box sx={myStyle} />
    </>
  );
}

export default Home;
