import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Corrected import path for Bootstrap JS
import './App.css';
import Usertable from './components/tables/Usertable';
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster />
      <Usertable />
    </div>
  )
}

export default App
