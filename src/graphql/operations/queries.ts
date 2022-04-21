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
            bio
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
            licenseInfo {
              id
              key
            }
            issues {
              totalCount
            }
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

export const SearchUser = gql`
  query SearchUser($login: String!) {
    user(login: $login) {
      avatarUrl
      login
      name
      location
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
  }
`;
