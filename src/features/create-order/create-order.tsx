import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { portfolioAtom } from "../../atoms/portfolio.atom";
import styles from "./create-order.module.scss";

export function CreateOrder() {
  const [portfolioItem, setPortfolioItem] = useAtom(portfolioAtom);

  return (
    <AnimatePresence>
      {portfolioItem ? (
        <>
          <motion.div
            key="backdrop"
            onClick={() => setPortfolioItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.1 } }}
            className={styles.backdrop}
          />
          <motion.div
            key="content"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "tween" }}
            className={styles.container}
          ></motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
