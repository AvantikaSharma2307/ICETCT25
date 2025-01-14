import React, { Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner.jsx";
// import Navbar from "./Components/Navbar/Navbar.jsx";
// import CallForPapers from "./pages/Call-for-papers.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
// import AboutUs from "./Components/AboutUs/AboutUs.jsx";
// import { Tabcomponent } from "./Components/tabcomponent.jsx";

const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./Components/AboutUs/AboutUs.jsx"));
const Registration = React.lazy(() => import("./pages/Registration"));
const Speaker = React.lazy(() => import("./pages/Speaker"));
const Submission = React.lazy(() => import("./pages/Submission"));
const Contact = React.lazy(() => import("./pages/Contact"));
// const Commities = React.lazy(() => import("./pages/Commities"));
const Accomodation = React.lazy(() => import("./pages/Accomodation"));
const CallForPapers = React.lazy(() => import("./pages/Call-for-papers"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar.jsx"));
const Tabcomponent = React.lazy(() => import("./Components/tabcomponent.jsx"));
// const Organisingcommittie = React.lazy(() =>
//   import("./pages/Organisingcommittie.jsx")
// );

function App() {
  return (
    <div className="main">
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Home />
        <AboutUs/>
        <CallForPapers />
        <Submission />
        <Registration />
        <Accomodation />
        <Speaker />
        {/* <Organisingcommittie /> */}
        <Tabcomponent />
        <Contact />
        <Footer/>
        {/* <Commities /> */}
       
       
       
      </Suspense>
    </div>
  );
}

export default App;
