import { usePortfolio } from "../../api/queries/transactions/usePortfolio";

export function Portfolio() {
  const { data, isSuccess, isError } = usePortfolio();

  if (isError) {
    return <p>Error...</p>;
  }

  if (isSuccess) {
    return (
      <>
        <h2 className="home-header">Portfolio</h2>
        <div className="feature">
          <ul>
            {data.map((item, idx) => (
              <li key={`${item.ticker}-${idx}`}>{item.ticker}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return <p>Loading...</p>;
}
