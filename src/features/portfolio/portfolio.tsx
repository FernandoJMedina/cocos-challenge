import { usePortfolio } from "../../api/queries/transactions/usePortfolio";

export function Portfolio() {
  const { data, isSuccess, isError } = usePortfolio();

  if (isError) {
    return <p>Error...</p>;
  }

  if (isSuccess) {
    return (
      <div className="feature">
        <ul>
          {data.map((item, idx) => (
            <li key={`${item.ticker}-${idx}`}>{item.ticker}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <p>Loading...</p>;
}
