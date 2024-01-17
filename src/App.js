import "./styles.css";
import HomeRedux from "./pages/Home-redux";
import HomeContext from "./pages/Home-context";
import HomeSignal from "./pages/Home-signal";

export default function App() {
  console.log("==> App");
  return (
    <>
      <center>
        <h1>Welcome to my App</h1>
      </center>
      <HomeContext />
      <HomeRedux />
      <HomeSignal />
    </>
  );
}
