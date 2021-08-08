import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import ScrollToTop from "./components/ScrollToTop";

// Bootstrap CSS & JS
import './styles/style.scss';
import 'bootstrap/dist/js/bootstrap';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
