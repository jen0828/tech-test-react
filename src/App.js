import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SubmitForm from './SubmitForm/SubmitForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={SubmitForm} />
      </div>
    </Router>
  );
}

export default App;
