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
import CareersLayout from "./layouts/CareersLayout";

// Components
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact, { contactAction } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

function App() {

  // Create a browser router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>

        {/* Nesting routes - Help layout */}
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<FAQ />}></Route>
          <Route path="contact" element={<Contact />} action={contactAction}></Route>
        </Route>

        {/* Custom 404 page - temporary */}
        <Route path="*" element={<NotFound />}></Route>

        {/* Careers layout */}
        {/* The loader will run that function ahead of time */}
        <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
          <Route
            index
            element={<Careers />}
            loader={careersLoader}
          >

          </Route>

          {/* Route parameters */}
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />

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
