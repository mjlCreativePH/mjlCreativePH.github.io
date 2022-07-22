import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="m-0 box-border bg-gray-100">
      <Navbar />
      <Component {...pageProps}/>
    </div>
  );
};

export default MyApp;
