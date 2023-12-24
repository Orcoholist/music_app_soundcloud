import MainPage from "./pages/MainPage/MainPage";
import style from "./../src/global.module.scss";
import Playbar from "./components/Playbar/Playbar";

const App = () => (
  <div className={style.wrapper}>
    <MainPage />
    <Playbar/>
  </div>
);
export default App;
