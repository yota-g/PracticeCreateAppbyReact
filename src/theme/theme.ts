import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        //ここにcssを記載していく
        backgroundColor: "gray.100",
        //chakra uiで提供されている色 数値で色が濃くなる
        color: "gray.800"
      }
    }
  }
});

export default theme;
