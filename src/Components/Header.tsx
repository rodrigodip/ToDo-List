import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./src/assets/rocket.svg"/>
        <div className={styles.titulo}>
          <p>to</p>
          <p>do</p>
        </div>
      </div>
    </header>
  );
}