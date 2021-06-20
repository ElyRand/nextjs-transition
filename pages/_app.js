import LayoutTransition from "../components/LayoutTransition";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="bg-black overflow-hidden">
      <LayoutTransition route={router.route}>
        <Navbar />
        <Component {...pageProps} key={router.route} />
      </LayoutTransition>
    </div>
  );
}

export default MyApp;
