import "./styles.css";
import HomeRedux from "./pages/Home-redux";
import HomeContext from "./pages/Home-context";
export default function App() {
  return (
    <>
      <center>
        <h1>Welcome to my App</h1>
      </center>
      <HomeContext />
      <HomeRedux />
    </>
  );
}
