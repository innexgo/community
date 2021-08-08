import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from './pages/Error';
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home';
import Stories from './pages/Stories';
import About from './pages/About';
import Submit from './pages/Submit';

// Bootstrap CSS & JS
import './styles/style.scss';
import 'bootstrap/dist/js/bootstrap';

import Story1 from './pages/Story1';
import Story2 from './pages/Story2';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stories" exact component={Stories} />
        <Route path="/about" exact component={About} />
        <Route path="/submit" exact component={Submit} />

        <Route path="/story1" exact component={Story1} />
        <Route path="/story2" exact component={Story2} />

        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
