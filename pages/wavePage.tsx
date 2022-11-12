import type { NextPage } from "next";
import { AppStateProvider } from "../AppContext";
import App from "../components/App";

const WavePage: NextPage = () => {
  return (
    <AppStateProvider>
      <App />
    </AppStateProvider>
  );
};

export default WavePage;
