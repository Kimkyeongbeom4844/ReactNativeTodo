import React from "react";
import { Provider } from "react-redux";
import { store } from "./stores";
import WorkPage from "./views/WorkPage";

const App = () => {
  return (
    <Provider store={store}>
      <WorkPage />
    </Provider>
  );
};

export default App;
