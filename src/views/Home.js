import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" />
        <div>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" />
          </Grid>
        </div>
      </Container>
      <Footer title="Alrynto" description="Test Purpose only" />
    </ThemeProvider>
  );
}
