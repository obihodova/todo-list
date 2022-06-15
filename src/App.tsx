
import "./App.css";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import InputWindow from "./components/InputWindow";

function App() {
  return (
    <div className="app">
      <h1>Add Your List Here &#9996;</h1>
      <InputWindow />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;