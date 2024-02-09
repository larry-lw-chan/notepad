import "./assets/normalize.css";
import "./assets/global.css";
import { GlobalProvider } from "./context/GlobalProvider";
import Notepad from "./components/Notepad";

function App() {
  return (
    <GlobalProvider>
      <Notepad />
    </GlobalProvider>
  );
}

export default App;
