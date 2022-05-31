import React from "react";
import { createRoot } from "react-dom/client";

import Routes from "./components/Routes";

const root = createRoot(document.getElementById("root"));
root.render(<Routes />);
