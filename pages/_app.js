import LayoutTransition from "../components/LayoutTransition";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

const transitions = {
  "/": "left",
  "/profile": "right",
  "/services": "left",
  "/gallery": "right",
};

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="bg-black overflow-x-hidden">
      <LayoutTransition
        route={router.route}
        transition={transitions[router.route]}
      >
        <Navbar />
        <Component {...pageProps} key={router.route} />
      </LayoutTransition>
    </div>
  );
}

export default MyApp;
