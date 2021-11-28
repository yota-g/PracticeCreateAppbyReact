import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
// import { HamburgerIcon } from "@chakra-ui/icons";

import { MenuIconButton } from "../../atom/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    //asをつけることでnavとレンダリングができる。nav以外の指定も可能。
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          {/* baseである程度の段階でのサイズを指定、ブレイクポイントmdの時はどうするという書き方をできる(カスタマイズ可能) */}
          {/* 今回だとブレイクポイント以上になったらlgになる。 base,mdである程度管理することができる。*/}
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          {/* baseはモバイル */}
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
});
