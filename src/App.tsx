import React from "react";
import { ThemeProvider } from "styled-components";
import ExampleComponent from "./components/exampleComponent/ExampleComponent";
import { DefaultTheme } from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DefaultTheme}>
        <ExampleComponent text="Hello world" />
      </ThemeProvider>
    </div>
  );
}

export default App;
