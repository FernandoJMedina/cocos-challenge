import { useInstruments } from "../../api/queries/transactions/useInstruments";

export function Instruments() {
  const { data, isSuccess, isError } = useInstruments();

  if (isError) {
    return <p>Error...</p>;
  }

  if (isSuccess) {
    return (
      <div className="feature">
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.ticker}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <p>Loading...</p>;
}
