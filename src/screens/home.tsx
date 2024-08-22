import { Instruments } from "../features/instruments/instruments";
import { Portfolio } from "../features/portfolio/portfolio";

export default function Home() {
  return (
    <>
      <Portfolio />
      <Instruments />
    </>
  );
}
