/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  // console.log(selectedUser);
  useEffect(() => getUsers(), []);
  //propsで渡す関数は毎回レンダリングされると困るのでuseCallbackを使用する。
  const onClickUser = useCallback(
    (id: number) => {
      // console.log(id);
      onSelectUser({ id, users, onOpen });
      // onOpen();
    },
    [users, onSelectUser, onOpen]
  );
  //usersが変更されるたびに更新される必要があるので連携配列に入れる。
  //初期配列にしておくと、画面表示時に一覧が表示される
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {/* 携帯の時はpが小さくて大きな画面の時は、大きくなるようになる。　 */}
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
