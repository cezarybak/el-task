export type SearchListVars = {
  queryString: string;
  type: "REPOSITORY" | "USER";
  first: number;
};

export type SearchListData = {
  search: {
    repositoryCount: number;
    userCount: number;
    edges: [{ node: NodeType }];
  };
};

export type NodeType = {
  id: string;
  __typename: "User" | "Repository";
  login?: string;
  name: string | null;
  avatarUrl?: string;
  followers?: {
    totalCount: string;
  };
  following?: {
    totalCount: string;
  };
  starredRepositories?: {
    totalCount: string;
  };
  primaryLanguage?: {
    id: string;
    name: string;
    color: string;
  };
  description?: string;
  updatedAt?: string;
  stargazerCount?: number;
};
