import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/apollo-client";
import SearchDataProvider from "./utils/context/SearchProvider";

import "./App.scss";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <SearchDataProvider>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
          </SearchDataProvider>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
