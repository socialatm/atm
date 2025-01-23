/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, A } from '@solidjs/router';
import { Home } from "./pages/home";
import { About } from "./pages/about";

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
<Router>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <App />
</Router>
), root!);
