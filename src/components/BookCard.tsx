import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import { IBook } from "./BooksGrid";

interface Props {
  book: IBook;
  onAddBook?: (book: IBook) => void;
  onRemoveBook?: (book: IBook) => void;
}

const BookCard = ({ book, onAddBook, onRemoveBook }: Props) => {
  const { title, edition_count } = book;
  return (
    <Card border="darkgreen" height="225px">
      <CardHeader>
        <Text size="md">Book Title: {title} </Text>
      </CardHeader>
      <CardBody>
        <Text>Edition Count: {edition_count}</Text>
      </CardBody>
      {onAddBook && (
        <CardFooter>
          <Button onClick={() => onAddBook(book)}>Add to Bookshelf</Button>
        </CardFooter>
      )}
      {onRemoveBook && (
        <CardFooter>
          <Button onClick={() => onRemoveBook(book)}>Remove Bookshelf</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default BookCard;
