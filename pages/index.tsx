import type { NextPage } from "next";
import { AppStateProvider } from "../AppContext";
import App from "../components/App";

const Home: NextPage = () => {
  return (
    <AppStateProvider>
      <App />
    </AppStateProvider>
  );
};

export default Home;
