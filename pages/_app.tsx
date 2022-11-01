import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
