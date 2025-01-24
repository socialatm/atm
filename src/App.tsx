import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { OAuthCallback } from "./routes/oauth/callback";
import { ClientMetadata } from './routes/client-metadata.json';
import { SignIn } from './routes/sign-in';
import { SignOut } from './routes/sign-out';
import { Chat } from './routes/chat';
import { Marketplace } from './routes/marketplace';
import { Settings } from './routes/settings';
import { Feeds } from './routes/feeds';
import { Lists } from './routes/lists';
import { Search } from './routes/search';
import { Status } from './routes/status';
import { Notifications } from './routes/notifications';
import { Profile } from './routes/profile';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/oauth/callback" component={OAuthCallback} />
      <Route path="/client-metadata.json" component={ClientMetadata} />
      <Route path="/about" component={SignIn} />
      <Route path="/about" component={SignOut} />
      <Route path="/chat" component={Chat} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/settings" component={Settings} />
      <Route path="/feeds" component={Feeds} />
      <Route path="/lists" component={Lists} />
      <Route path="/search" component={Search} />
      <Route path="/status" component={Status} />
      <Route path="/profile" component={Profile} />
      <Route path="/notifications" component={Notifications} />     
    </Router>
  );
};

export default App;
