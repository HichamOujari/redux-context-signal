import Overview from "../components-redux/Overview";
import Actions from "../components-redux/Actions";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function HomeRedux() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Using (Redux)</h3>
        <Overview />
        <Actions />
      </div>
    </Provider>
  );
}
