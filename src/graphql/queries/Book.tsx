import { gql } from '@apollo/client';

const BOOKS_QUERY = gql`
  query books($limit: Int!) {
    books(limit: $limit) {
      id
      name
      position
    }
  }
`;

export { BOOKS_QUERY };
