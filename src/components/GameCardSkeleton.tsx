import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
