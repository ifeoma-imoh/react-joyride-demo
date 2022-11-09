import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import "./App.css";

import Joyride from "react-joyride";

const steps = [
  {
    target: ".header > h3",
    content: "Welcome!! Please spare a minute to learn about our page",

    disableBeacon: true,
  },
  {
    target: ".login",
    content: "You can login here",
  },
  {
    target: ".signup",
    content: "Sign up here, if you're new",
  },
  {
    target: ".packages h3",
    content: "The packages we offer",
  },
  {
    target: ".explore",
    content: "Click here to find out more about other packages",
  },
  {
    target: ".footer .form",
    content: "Subscribe to our newsletter here",
  },
];

function App() {
  return (
    <>
      <Joyride
        steps={steps}
        continuous={true}
        styles={{
          options: {
            arrowColor: "#5caeab",
            backgroundColor: "#5caeab",
            overlayColor: "rgba(92, 174, 171, .3)",
            primaryColor: "#5caeab",
            textColor: "#fff",
          },
          spotlight: {
            backgroundColor: "transparent",
          },
        }}
        showProgress={true}
        showSkipButton={true}
      />
      <div className="App">
        <Hero />
        <Packages />
        <Footer />
      </div>
    </>
  );
}

export default App;
