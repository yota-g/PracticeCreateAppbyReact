import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import "./styles.css";

export default function App() {
  return (
    //Chakra使用時はChakraProviderを囲む必要がある
    //themeでcssを提供することができる。
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>ああああああああ</p>
    </ChakraProvider>
  );
}
