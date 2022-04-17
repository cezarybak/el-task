import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/apollo-client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
