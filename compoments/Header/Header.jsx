/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <img src="/images/logo.svg" alt="ig.news"/> */}
        <nav>
          <a className={styles.active}>Home</a>
          <a>Batalha</a>
        </nav>

      </div>
    </header>
  );
}
