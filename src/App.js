import React, { useEffect } from "react";
import AddMovie from "./components/AddMovie";
import { movieDetailQuery } from "./graphql/query";
import useGraphqlQuery from "./hooks/use-graphql-query";
import AppRoutes from "./routes";
// require('dotenv').config()

const App = () => {

  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
  }, []);
  // const { data, error } = useGraphqlQuery({
  //   query: movieDetailQuery,
  //   variables: { movieDetailId: "573a13d4f29313caabd9904d" },
  // });
  // console.log("data: ", data);
  // console.log("error: ", error);

  // useEffect(() => {}, []);

  // return <AddMovie />;

  return <AppRoutes />;
};

export default App;
