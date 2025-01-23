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
    <div>
      <A href="/about">About</A>
    </div>
    </header>    
  </div>
);  
}
