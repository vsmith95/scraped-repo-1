import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import VernonHome from "./components/VernonHome";
import WilliHome from "./components/WilliHome";
import WWD from "./components/WWD";
import Insurance from "./components/Insurance";

function App() {
    const [pages] = useState([
      {
          name: "willihome",
          display: "Willimantic",
          component: <WilliHome />
      },
      {
          name: "vernon",
          display: "Vernon",
          component: <VernonHome />
      },
      {
          name: "whatwedo",
          display: "What We Do",
          component: <WWD />
      }
      {
          name: "insurance",
          display: "Insurance",
          component: <Insurance />
      },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
      <body className="App">
          <Header
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />
          <Hero />
          <main>
              {currentPage.component}
          </main>
          <Footer />
      </body>
  );
}

export default App;
