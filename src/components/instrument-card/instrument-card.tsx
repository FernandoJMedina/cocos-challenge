import { Instrument } from "../../api/models/instrument";
import styles from "./instrument-card.module.scss";

export function InstrumentCard({ ...props }: Instrument) {
  const instrumentReturn =
    ((props.last_price - props.close_price) / props.close_price) * 100;

  const color = instrumentReturn < 0 ? "red" : "green";
  return (
    <li className={styles.container}>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.ticker}</h4>
      </div>
      <div>
        <h3>
          {props.last_price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </h3>
        <h5 style={{ color }}>{instrumentReturn.toFixed(2)}%</h5>
      </div>
    </li>
  );
}
