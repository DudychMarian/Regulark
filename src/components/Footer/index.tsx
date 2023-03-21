import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; REGULARK {new Date().getFullYear()}</p>
      <ul>
        <li>
          <a href="https://github.com/DudychMarian/Regulark/issues" target="_blank">
            Issues
          </a>
        </li>
        <li>
          <a href="https://github.com/DudychMarian/Regulark#how-do-i-report-a-bug-or-suggest-an-idea" target="_blank">
            Contacts
          </a>
        </li>
        <li>
          <a href="https://github.com/DudychMarian/Regulark" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
