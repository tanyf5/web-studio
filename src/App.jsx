import "./App.css";
import Benefits from "./components/Benefits/Benefits";
import benefits from "./data/benefits.json";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";

export default function App() {
  return (
    <>
      <Benefits benefits={benefits} />
      <Team />
      <Portfolio />
    </>
  );
}
