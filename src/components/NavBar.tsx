import { Button, Heading, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { useNavigate } from "react-router-dom";
// import SearchInput from "./SearchInput";
import { CiMenuBurger } from "react-icons/ci";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Button variant="icons" onClick={() => navigate("/mybooks")}>
        <CiMenuBurger />
      </Button>
      <Heading fontSize={{ sm: "large", md: "xx-large" }}>Open Library</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
