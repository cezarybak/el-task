export type SearchListVars = {
  queryString: string;
  type: "REPOSITORY" | "USER";
  first: number;
};

export type SearchListData = {
  search: {
    repositoryCount: number;
    userCount: number;
    edges: [{ node: User | Repo }];
  };
};

export type User = {
  id: string;
  __typename: "User";
  avatarUrl: string;
  login: string;
  bio: string;
  name: string | null;
  location: string;

  followers: {
    totalCount: string;
  };
  following: {
    totalCount: string;
  };
  starredRepositories: {
    totalCount: string;
  };
};

export type Repo = {
  id: string;
  __typename: "Repository";
  name: string | null;
  licenseInfo: {
    id: string;
    key: string;
  };
  issues: {
    totalCount: string;
  };
  primaryLanguage: {
    id: string;
    name: string;
    color: string;
  };
  description: string;
  updatedAt: string;
  stargazerCount: number;
};
