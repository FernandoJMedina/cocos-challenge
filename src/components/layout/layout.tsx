import { PropsWithChildren } from "react";
import styles from "./layout.module.scss";

export default function Layout(props: PropsWithChildren) {
  return <main className={styles.container}>{props.children}</main>;
}
