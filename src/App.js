import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEmployeePage from './pages/AddEmployeePage';
import EditEmployeePage from './pages/EditEmployeePage';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/add">Add Employee</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEmployeePage />} />
        <Route path="/edit/:id" element={<EditEmployeePage />} />
      </Routes>
    </div>
  );
};

const styles = {
  nav: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
};

export default App;
