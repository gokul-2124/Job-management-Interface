import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import JobForm from './components/JobForm';

function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/jobs/new" element={<JobForm />} />
        </Routes>
    </Router>
  );
}

export default App;

