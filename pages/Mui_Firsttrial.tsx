import { Fragment } from "react";
import {Container} from "@mui/material";
import Head from "next/head";
import CardStack from "../component/CardStack";
import ScrollingAppBar from "../component/ScrollingAppBar";

function MUI_Firsttrial() {


  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>This is a first try</title>
      </Head>
      <Container maxWidth="md">{<ScrollingAppBar />}</Container>
      <Container maxWidth="md">{<CardStack />}</Container>
      
    </Fragment>
  );
}

export default MUI_Firsttrial
