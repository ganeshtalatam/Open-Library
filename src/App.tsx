import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
// import BookCard from "./components/BookCard";
import BooksGrid from "./components/BooksGrid";

interface Book {
  author_key: string[];
  author_name: string[];
  ebook_count_i: number;
  ebook_access: string[];
  edition_count: number;
  edition_key: string[];
  title: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1")
      .then((res) => setBooks(res.data.docs));
  }, []);
  console.log(books);
  return (
    <Grid templateAreas={`"nav" "body"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="body" justifySelf="center" paddingY="50px">
        <BooksGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
