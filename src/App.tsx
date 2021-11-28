// import { Button, ChakraProvider } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    //Chakra使用時はChakraProviderを囲む必要がある
    //themeでcssを提供することができる。
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
        {/* <Button colorScheme="teal">ボタン</Button>
        <p>ああああああああ</p> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}
