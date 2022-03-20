import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubmitForm from './SubmitForm/SubmitForm';
import EligibleCards from './EligibleCards/EligibleCards';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SubmitForm} />
          <Route exact path="/detail" component={EligibleCards} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
