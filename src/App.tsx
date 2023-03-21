import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import patternsCollection from "./assets/patterns.json";

import styles from "./App.module.scss";
import { Card } from "./components/Card";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        {patternsCollection.map((obj) => (
          <Card
            key={obj.title}
            title={obj.title}
            description={obj.description}
            placeholder={obj.placeholder}
            pattern={obj.pattern}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
