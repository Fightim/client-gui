import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Cause, Error404, Login, RegistKey } from "./screen/@page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute restricted={true} />}>
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/key" element={<RegistKey />} />
          <Route path="/cause" element={<Cause />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const PublicRoute = ({ restricted = false }) => {
  const isLogined = localStorage.getItem("user-token");
  return isLogined && restricted ? <Navigate to="/cause" replace /> : <Outlet />;
};

const PrivateRoute = () => {
  const isLogined = localStorage.getItem("user-token");
  return isLogined ? <Outlet /> : <Navigate to="/login" replace />;
};
