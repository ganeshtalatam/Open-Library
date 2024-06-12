import { useState } from "react";
import { getMyBooksFromLS, IBook } from "./BooksGrid";
// import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import BookCard from "./BookCard";
import { Button, Grid, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";
import ColorModeSwitch from "./ColorModeSwitch";
import { useNavigate } from "react-router-dom";

const BookShelf = () => {
  const [myBooks, setMyBooks] = useState<IBook[]>(getMyBooksFromLS());

  const handleRemove = (removeBook: IBook) => {
    const koob = myBooks.filter(
      (mybook) => mybook.edition_key[0] !== removeBook.edition_key[0]
    );
    setMyBooks(koob);
    localStorage.setItem("MY_BOOKS", JSON.stringify(koob));
  };

  const navigate = useNavigate();

  return (
    <Grid>
      <HStack justifyContent="space-between" padding="20px">
        <Button variant="icons" onClick={() => navigate("/")}>
          <CiMenuBurger />
        </Button>
        <Heading fontSize={{ sm: "large", md: "xx-large" }}>
          Open Library
        </Heading>
        <ColorModeSwitch />
      </HStack>
      <SimpleGrid
        justifySelf="center"
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding="20px"
        spacing={35}
      >
        {myBooks.map((book) => (
          <BookCard book={book} onRemoveBook={handleRemove} />
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default BookShelf;
