
import './App.css';
import Counter from './counter/Counter.jsx';
import  Sum from './exercises/sum.js';
import FilterSearch from './filterSearch/FilterSearch.jsx';
import List from './list/List.jsx';
import Login from './login/Login.jsx';
import TextToggle from './textToggle/TextToggle.jsx';
import TodoList from './todoList/TodoList.jsx';

function App() {
  return (
    <div className="App">
  {/* <Sum/> */}
  <Counter/>
  <TextToggle/>
  <List/>
  <TodoList/>
  <FilterSearch/>
  <Login/>
    </div>
  );
}

export default App;
