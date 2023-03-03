import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css';

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

// Components
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {

  // Create a browser router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>

        {/* Nesting routes */}
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<FAQ />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Route>
    )
  )

  return (
    <div className="App" id="main_page">
      {/* Route Provider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
