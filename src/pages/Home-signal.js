import Overview from "../components-signal/Overview";
import Actions from "../components-signal/Actions";

export default function HomeSignal() {
  console.log("==> Home (signal)");
  return (
      <div className="App">
        <h3>Using (Signal)</h3>
        <Overview />
        <Actions />
      </div>
  );
}
