import { useInstruments } from "../../api/queries/transactions/useInstruments";
import { InstrumentCard } from "../../components/instrument-card/instrument-card";

export function Instruments() {
  const { data, isSuccess, isError } = useInstruments();

  if (isError) {
    return <p>Error...</p>;
  }

  if (isSuccess) {
    return (
      <>
        <h2 className="home-header">Instruments</h2>
        <div className="feature">
          <ul>
            {data.map((item) => (
              <InstrumentCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </>
    );
  }

  return <p>Loading...</p>;
}
