import Overview from "../components-context/Overview";
import Actions from "../components-context/Actions";
import counterStore from "../context/counterStore";

export default function HomeContext() {
  console.log("==> Home (context)");
  const { context, actions } = counterStore;
  return (
    <context.Provider value={actions(0)}>
      <div className="App">
        <h3>Using (Context)</h3>
        <Overview />
        <Actions />
      </div>
    </context.Provider>
  );
}
