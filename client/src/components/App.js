import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Outlet />
    </>
  );
}
