import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, User } from "./pages";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/apollo-client";
import SearchDataProvider from "./utils/context/SearchProvider";

import "./App.scss";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <SearchDataProvider>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </SearchDataProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
