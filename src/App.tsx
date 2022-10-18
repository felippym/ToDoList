import { Header } from "./assets/components/Header";
import { TaskList } from "./assets/components/TaskList";
import "./styles/main.css";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
