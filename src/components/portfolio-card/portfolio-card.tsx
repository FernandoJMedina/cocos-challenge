import { useSetAtom } from "jotai";
import { currencyFormat } from "../../../helpers/currency";
import type { Portfolio } from "../../api/models/portfolio";
import { portfolioAtom } from "../../atoms/portfolio.atom";
import styles from "./portfolio-card.module.scss";

export function PortfolioCard({ ...props }: Portfolio) {
  const setPortfolio = useSetAtom(portfolioAtom);

  const profit = (props.last_price - props.avg_cost_price) * props.quantity;
  const performance =
    ((props.last_price - props.avg_cost_price) / props.avg_cost_price) * 100;
  const perfColor = performance < 0 ? "red" : "green";

  return (
    <li className={styles.container} onClick={() => setPortfolio(props)}>
      <div>
        <h3>{props.ticker}</h3>
        <h4>Qty: {props.quantity}</h4>
      </div>
      <div>
        <h5>M. value: {currencyFormat(props.last_price * props.quantity)}</h5>
      </div>
      <div>
        <h5>Profit: {currencyFormat(profit)}</h5>
      </div>
      <div>
        <h5>
          Perf:{" "}
          <span style={{ color: perfColor }}>{performance.toFixed(2)}%</span>
        </h5>
      </div>
    </li>
  );
}
