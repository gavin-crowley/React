import "./App.css";
import { Switch, Route } from "react-router-dom";
import Crud from "./crud";
import Update from "./crud/Update";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Crud} />
        <Route exact path="/update/:id" component={Update} />
      </Switch>
    </div>
  );
}

export default App;
