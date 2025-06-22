import {Route, Switch} from 'react-router-dom'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Project'
import Career from './components/Career'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/career" component={Career} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default App
