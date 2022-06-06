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
import Story12 from './pages/stories/Story12';
import Story13 from './pages/stories/Story13';
import Story14 from './pages/stories/Story14';
import Story15 from './pages/stories/Story15';
import Story16 from './pages/stories/Story16';
import Story17 from './pages/stories/Story17';
import Story18 from './pages/stories/Story18';
import Story19 from './pages/stories/Story19';
import Story20 from './pages/stories/Story20';
import Story21 from './pages/stories/Story21';
import Story22 from './pages/stories/Story22';
import Story23 from './pages/stories/Story23';


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
        <Route path="/story12" exact component={Story12}/>
        <Route path="/story13" exact component={Story13}/>
        <Route path="/story14" exact component={Story14}/>
        <Route path="/story15" exact component={Story15}/>
        <Route path="/story16" exact component={Story16}/>
        <Route path="/story17" exact component={Story17}/>
        <Route path="/story18" exact component={Story18}/>
        <Route path="/story19" exact component={Story19}/>
        <Route path="/story20" exact component={Story20}/>
        <Route path="/story21" exact component={Story21}/>
        <Route path="/story22" exact component={Story22}/>
        <Route path="/story23" exact component={Story23}/>
        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App1;
