import { Box, Button, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Box maxWidth="sm">
          <Link href="/" passHref>
            <Button variant="contained">Go to the home page</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
