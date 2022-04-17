import { gql } from "@apollo/client";

export const SearchList = gql`
  query SearchList($queryString: String!, $type: SearchType!, $first: Int) {
    search(query: $queryString, type: $type, first: $first) {
      repositoryCount
      userCount
      edges {
        node {
          ... on User {
            __typename
            avatarUrl
            id
            login
            name
            location
            avatarUrl
            followers {
              totalCount
            }
            following {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
          ... on Repository {
            name
            id
            __typename
            primaryLanguage {
              id
              name
              color
            }
            description
            updatedAt
            stargazerCount
          }
        }
      }
    }
  }
`;
