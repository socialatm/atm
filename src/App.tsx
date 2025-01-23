import type { Component } from 'solid-js';
import { Router, Route, A } from '@solidjs/router';
import { Home } from "./routes/home";
import { About } from "./routes/about";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />        
    </Router>
  );
};

export default App;
