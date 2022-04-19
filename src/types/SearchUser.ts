export type SearchUserVars = {
  login: string;
};

export type SearchUserData = {
  user: {
    __typename: "User";
    avatarUrl: string;
    login: string;
    name: string;
    location: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
    starredRepositories: {
      totalCount: number;
    };
  };
};
