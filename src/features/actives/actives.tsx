import { useSearchActives } from "../../api/queries/transactions/useSearchActives";
import styles from "./actives.module.scss";

type ActiveProps = {
  activeTerm: Uppercase<string>;
};

export function Actives({ activeTerm }: ActiveProps) {
  const { data, isSuccess, isError, isLoading } = useSearchActives(activeTerm);

  if (isError) {
    return <p>Error...</p>;
  }
  if (isSuccess) {
    if (data.length === 0) {
      return <p className={styles.description}>No results found</p>;
    }
    return (
      <ul className={styles.list}>
        {data.map((i) => (
          <li key={i.id}>{i.ticker}</li>
        ))}
      </ul>
    );
  }
  return (
    <p className={styles.description}>
      {!isLoading ? "Here will be the results" : "Loading..."}
    </p>
  );
}
