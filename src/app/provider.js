"use client";
import { Fragment, useCallback, useEffect, useState } from "react";

import Cookies from "universal-cookie";
import Header from "@/components/Header/Header";
import { extendTheme } from "@chakra-ui/react";
const vazirmatnFont = Vazirmatn({ subsets: ["latin"] });
const theme = extendTheme({
  styles: {
    global: {
      "html, body, label": {
        fontFamily: vazirmatnFont.style.fontFamily,
        direction: "rtl",
      },
    },
  },
  fonts: {
    heading: vazirmatnFont.style.fontFamily,
    body: vazirmatnFont.style.fontFamily,
  },
  breakpoints: {
    xs: "0em",
  },
});
const Providers = (props) => {
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <Header />
        {props.children}
      </ChakraProvider>
    </Fragment>
  );
};

export default Providers;
