import React, { useEffect, useState } from "react";
import { GoodsSelection } from "./components/GoodsSelection";

import { fetchData } from "./network/api";
import { API_ROUTES } from "./network/api_routes";
import { TAuto } from "./types";

function App() {
  return (
    <div className="App">
      <GoodsSelection />
    </div>
  );
}

export default App;
