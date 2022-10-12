import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Error404, Login } from "./screen/@page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

/**
<Route path={routePaths.Main} element={PublicRoute({ Component: <MainPage /> })} />
<Route path={routePaths.Login} element={PublicRoute({ Component: <LoginPage />, restricted: true })} />
<Route path="*" element={PublicRoute({ Component: <Error404Page /> })} />

 const PublicRoute = ({ Component, restricted = false }) => {
   const isLogined = localStorage.getItem("piickle-token");
   return isLogined && restricted ? <MainPage /> : Component;
  };
  
  const PrivateRoute = ({ Component }) => {
    const isLogined = localStorage.getItem("piickle-token");
    return isLogined ? Component : <LoginPage />;
  };
  */
