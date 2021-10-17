import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
https://www.googleapis.com/books/v1/volumes?q=${query}
`;