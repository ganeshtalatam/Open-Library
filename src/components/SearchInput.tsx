import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup marginBottom="20px">
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius="20"
        variant="fill"
        placeholder="Search By Book Name"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
