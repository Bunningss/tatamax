import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// COmponents
import Navbar from "./Components/Navbar";
import Toppanel from "./Components/Toppanel";

// Pages
const Index = lazy(() => import("./Pages/Index"));

function App() {
  return (
    <BrowserRouter>
      <Toppanel />
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Index />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
