import './App.css';
import CovidTable from './components/CovidTable//index';

import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CovidTable />
      </Provider >
    </div>
  );
}

export default App;
