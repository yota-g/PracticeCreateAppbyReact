import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {/* 携帯の時はpが小さくて大きな画面の時は、大きくなるようになる。　 */}
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="じゃけぇ"
          fullName="Takumi Okada"
        />
      </WrapItem>
    </Wrap>
  );
});
