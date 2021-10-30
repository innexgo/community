import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from './pages/Error';
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home';
import Stories from './pages/Stories';
import About from './pages/About';
import Submit from './pages/Submit';
import Community from './pages/Community';
import Campus from './pages/Campus';
import Classroom from './pages/Classroom';

// Bootstrap CSS & JS
import './styles/style.scss';
import 'bootstrap/dist/js/bootstrap';

import Story1 from './pages/stories/Story1';
import Story2 from './pages/stories/Story2';
import Story3 from './pages/stories/Story3';
import Story4 from './pages/stories/Story4';
import Story5 from './pages/stories/Story5';
import Story6 from './pages/stories/Story6';
import Story7 from './pages/stories/Story7';
import Story8 from './pages/stories/Story8';
import Story9 from './pages/stories/Story9';
import Story10 from './pages/stories/Story10';
import Story11 from './pages/stories/Story11';

function App1() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stories" exact component={Stories} />
        <Route path="/about" exact component={About} />
        <Route path="/submit" exact component={Submit} />
        <Route path="/community" exact component={Community} />
        <Route path="/campus" exact component={Campus} />
        <Route path="/classroom" exact component={Classroom} />
        <Route path="/story1" exact component={Story1} />
        <Route path="/story2" exact component={Story2} />
        <Route path="/story3" exact component={Story3} />
        <Route path="/story4" exact component={Story4} />
        <Route path="/story5" exact component={Story5} />
        <Route path="/story6" exact component={Story6}/>
        <Route path="/story7" exact component={Story7}/>
        <Route path="/story8" exact component={Story8}/>
        <Route path="/story9" exact component={Story9}/>
        <Route path="/story10" exact component={Story10}/>
        <Route path="/story11" exact component={Story11}/>

        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App1;
