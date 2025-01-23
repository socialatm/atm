import logo from '../assets/logo.svg';
import styles from '../App.module.css';
import { A } from '@solidjs/router';

export function Home() {
  return (    
  <div class={styles.App}>    
    <header class={styles.header}>
    <img src={logo} class={styles.logo} alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      class={styles.link}
      href="https://github.com/solidjs/solid"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Solid
    </a>    
    </header>
    <div>
      <A href="/about">About</A>
    </div>
    <div>
      <A href="/oauth/callback">oauth/callback</A>
    </div>
    <div>
      <A href="/client-metadata.json">client-metadata.json</A>
    </div>
    <div>
      <A href="/sign-in">Sign In</A>
    </div>
    <div>
      <A href="/sign-out">Sign Out</A>
    </div>    
  </div>
);  
}
