import React from "react";
import { ApolloProvider } from "@apollo/client";

import client from "../../common/apollo-client";
import TopicsTable from "../topicsTable/topicsTable";

const App: React.FC = () => { 
  return (
    <div>
      <ApolloProvider client={client}>
        <TopicsTable />
      </ApolloProvider>
    </div>
  );
};

export default App;
