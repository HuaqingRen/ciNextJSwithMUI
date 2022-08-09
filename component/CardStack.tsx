import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { ciItemConverter } from "../component/common_funcs";
import BasicCard from "../component/BasicCard";
import testDataJson from "../resource/cisongtest.json";

export default function CardStack() {
  let ObjCiList = ciItemConverter(testDataJson);

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        > 
        {
            ObjCiList.ciItems.map((Item) => {return  <Container>
                {<BasicCard inputItem={Item} />}
              </Container>})
        }
        </Stack>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
