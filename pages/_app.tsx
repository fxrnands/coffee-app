import { AppProps } from "next/app";
import "../styles/globals.css";
import { Navbar } from "@/components/base";
import MainLayout from "./MainLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Navbar />
    </>
  );
};

export default App;
