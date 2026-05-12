
import './index.css';
import './App.css';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';


function App() {
  return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-6xl mx-auto">
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Task Manager
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <AddTask />
        </div>

     <div className="bg-white rounded-2xl shadow-lg p-6 max-h-[600px] overflow-y-auto">
  <TaskList />
</div>

      </div>
    </div>
  </div>
);
}

export default App;
