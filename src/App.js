import './App.css';
import Home from './component/Home';
import { Provider } from "react-redux";
import store from './store/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
