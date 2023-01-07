import React from "react";
import { RoutePath } from "./src/types/routes";
import { Route, Routes } from "react-router-dom";
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import { RequireAuth } from "./src/contexts/Auth/RequireAuth";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route
        path={RoutePath.HOME}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default Router;
