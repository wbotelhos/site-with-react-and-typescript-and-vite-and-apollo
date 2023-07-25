import { BookProps } from "../types/Book";
import { BOOKS_QUERY } from '../graphql/queries/Book';
import { useQuery } from '@apollo/client';

const Books = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY, {
    variables: { limit: 100 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data.books.map((item: BookProps) => {
        return (
          <li key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        )
      })}
    </ul>
  );
}

export default Books;
