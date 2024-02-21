import Link from "next/link";
import styles from "@/styles/index.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/home">Home</Link>
        <Link href="/acerca">Acerca</Link>
      </nav>
    </div>
  );
};

export default Navigation;
