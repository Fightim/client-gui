import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Cause, Error404, Login, RegistKey } from "./screen/@page";

const LOCAL_STORAGE_KEY = "user-token";

export const ROUTER_PATH = {
  start: "/",
  login: "/login",
  registerKey: "/key",
  cause: "/cause",
  rest: "/*",
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute restricted={true} />}>
          <Route path={ROUTER_PATH.start} element={<Navigate to={ROUTER_PATH.login} replace />} />
          <Route path={ROUTER_PATH.login} element={<Login />} />
          <Route path={ROUTER_PATH.rest} element={<Error404 />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={ROUTER_PATH.registerKey} element={<RegistKey />} />
          <Route path={ROUTER_PATH.cause} element={<Cause />} />
          <Route path={ROUTER_PATH.rest} element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const PublicRoute = ({ restricted = false }) => {
  const isLogined = localStorage.getItem(LOCAL_STORAGE_KEY);
  return isLogined && restricted ? <Navigate to={ROUTER_PATH.cause} replace /> : <Outlet />;
};

const PrivateRoute = () => {
  const isLogined = localStorage.getItem(LOCAL_STORAGE_KEY);
  return isLogined ? <Outlet /> : <Navigate to={ROUTER_PATH.login} replace />;
};
