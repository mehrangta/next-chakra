import { Box } from "@chakra-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";

// in roots.
const Page2 = ({  }) => {

  return (
    <>

      {/*<Header />*/}

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Box
        as="main"
        mt={{ base: "40px", md: "70px" }}
        minH="calc(100vh - 320px)"
      >

          test
      </Box>

      {/*<Footer />*/}
    </>
  );
};

export default Page2
