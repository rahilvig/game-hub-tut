import { Text, HStack, ListItem, Skeleton, Image } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <ListItem>
      <Skeleton height="50px" borderRadius="5px" marginY="5px" />
    </ListItem>
  );
};

export default GenreItemSkeleton;
