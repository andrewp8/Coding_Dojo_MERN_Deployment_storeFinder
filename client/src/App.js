import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './views/Dashboard';
import DisplayOneStore from './views/DisplayOneStore';
import AddStore from './views/AddStore';
import UpdateStore from './views/UpdateStore';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/store/:id" element={<DisplayOneStore />} />
        <Route path="/store/add" element={<AddStore />} />
        <Route path="/store/:id" element={<DisplayOneStore />} />
        <Route path="/store/edit/:id" element={<UpdateStore />} />
      </Routes>
    </div>
  );
}

export default App;
