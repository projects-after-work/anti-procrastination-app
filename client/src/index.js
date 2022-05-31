import React from "react";
import { createRoot } from "react-dom/client";

import Routes from "./components/Routes";

import "./index.scss";

const root = createRoot(document.getElementById("root"));
root.render(<Routes />);
