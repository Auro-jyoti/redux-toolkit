import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#1a1a1a] h-full">
        <h1>Todo Using Redux</h1>
        <Todos />
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;
