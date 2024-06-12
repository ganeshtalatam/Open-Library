import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { SimpleGrid } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

export interface IBook {
  author_key: string[];
  author_name: string[];
  ebook_count_i: number;
  ebook_access: string[];
  edition_count: number;
  edition_key: string[];
  title: string;
}

export const getMyBooksFromLS = () => {
  const myBooksFromLS: string | null = localStorage.getItem("MY_BOOKS");
  if (!myBooksFromLS) return [];
  return JSON.parse(myBooksFromLS) ?? [];
};

const BooksGrid = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [myBooks, setMyBooks] = useState<IBook[]>(getMyBooksFromLS());
  // const [isLoading, setLoading] = useState(false);

  // setLoading(true);

  useEffect(() => {
    axios
      .get<{ docs: IBook[] }>(
        "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1"
      )
      .then((res) => {
        setBooks(res.data.docs);
        // setLoading(true);
      });
  }, []);

  const handleAddBook = (newBook: IBook) => {
    const newMyBooks = [...myBooks, newBook];
    setMyBooks(newMyBooks);
    localStorage.setItem("MY_BOOKS", JSON.stringify(newMyBooks));
  };

  return (
    <div>
      {/* {isLoading && <Spinner />} */}
      <SearchInput />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding="10px"
        spacing={35}
        //   templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {books.map((book) => {
          const isBookInMyBooks = myBooks.find(
            (myBook) => myBook.edition_key[0] === book.edition_key[0]
          );
          return (
            <BookCard
              book={book}
              key={book.ebook_count_i}
              onAddBook={!isBookInMyBooks ? handleAddBook : undefined}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default BooksGrid;
