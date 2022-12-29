import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/userHeader/userHeader";
import { selectUserAuth } from "../../redux/Features/reducers/userAuthSlice";

function Home() {
  const myStyle = {
    backgroundImage: "url('https://images.alphacoders.com/597/597903.jpg')",
    backgroundColor: "#000",
    height: "100vh",
    fontSize: "50px",
    backgroundSize:"cover"
   
  };
  const data=useSelector(selectUserAuth)
  if(data.token){
    return (
      <>
        <NavBar />
        <Box sx={myStyle} />
      </>
    );
  }else{
    return(
     <Navigate to='/login'/>
    )
  }
}

export default Home;
