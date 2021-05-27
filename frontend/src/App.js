import './App.css';
import Layout from './components/Layout/Layout';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route path='/'>

        </Route>

        <Route path='/actors'>

        </Route>

        <Route path='/movies'>

        </Route>
      </Switch>
      
    </Layout>
  );
}

export default App;
