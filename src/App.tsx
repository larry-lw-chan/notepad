import "./assets/normalize.css";
import "./assets/global.css";
import Notepad from "./components/Notepad";
import { NoteProvider } from "./context/NoteProvider";

function App() {
  return (
    <NoteProvider>
      <Notepad />
    </NoteProvider>
  );
}

export default App;
