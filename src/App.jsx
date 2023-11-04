import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Diagnosis from "./pages/Diagnosis";
import Information from "./pages/Information";
import Team from "./pages/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "About",
      element: <About />,
    },
    {
      path: "Diagnosis",
      element: <Diagnosis />,
    },
    {
      path: "Information",
      element: <Information />,
    },
    {
      path: "Team",
      element: <Team />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
