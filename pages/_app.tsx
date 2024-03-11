import { AppProps } from "next/app";
import "../styles/globals.css";
import { Navbar } from "@/components/base";
import MainLayout from "./MainLayout";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      {router.pathname !== "/" && <Navbar />}
    </>
  );
};

export default App;
