import './App.css';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/my-react-app">
      <div className="App">
        <header className="App-header">
          <h1>欢迎使用 React!</h1>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
