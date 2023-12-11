import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
