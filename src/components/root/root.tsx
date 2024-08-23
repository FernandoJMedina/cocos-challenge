import { PropsWithChildren } from "react";
import { FiHome, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Layout from "../layout/layout";
import styles from "./root.module.scss";

export default function Root(props: PropsWithChildren) {
  return (
    <Layout>
      {props.children}
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/">
          <FiHome size={18} /> Home
        </NavLink>
        <NavLink className={styles.link} to="/search">
          <FiSearch size={18} />
          Search
        </NavLink>
      </nav>
    </Layout>
  );
}
