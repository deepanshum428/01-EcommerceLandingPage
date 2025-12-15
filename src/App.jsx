import { useState } from "react";

import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { ShopProvider } from "./Context/shopContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ShopProvider>
      <AppRoutes />
    </ShopProvider>
  );
}

export default App;
