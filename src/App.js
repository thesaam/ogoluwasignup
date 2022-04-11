import { BrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </div>
  );
}

export default App;
