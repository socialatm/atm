import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { OAuthCallback } from "./routes/oauth/callback";
import { ClientMetadata } from './routes/client-metadata.json';
import { SignIn } from './routes/sign-in';
import { SignOut } from './routes/sign-out';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/oauth/callback" component={OAuthCallback} />
      <Route path="/client-metadata.json" component={ClientMetadata} />
      <Route path="/about" component={SignIn} />
      <Route path="/about" component={SignOut} />        
    </Router>
  );
};

export default App;
