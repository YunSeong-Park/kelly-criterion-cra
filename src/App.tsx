import React from "react";
import StockTab from "./components/StockTab/StockTab";
import StockInfoForm from "./components/StockInfoForm/StockInfoForm";
import KellyCurve from "./components/KellyCurve/KellyCurve";
import { css } from "@emotion/react";
import Notify from "./components/Notify/Notify";

function App() {
  return (
    <div className="App">
      <StockTab />
      <main
        css={css`
          display: flex;
        `}
      >
        <StockInfoForm />
        <KellyCurve />
        <Notify />
      </main>
    </div>
  );
}

export default App;
