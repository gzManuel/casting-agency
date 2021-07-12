import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';

import Layout from './components/Layout/Layout';
import ActorDetailPage from './pages/ActorDetailPage';
import MovieDetailPage from './pages/MovieDetailPage';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import Spinner from './components/UI/Spinner';
import useHttp from './hooks/useHttp';
import { getUserRole } from './lib/api';


function App() {
  // Functions
  const { getAccessTokenSilently } = useAuth0();

  // Variables
  const { isAuthenticated, isLoading, user } = useAuth0();

  // Getting user role
  const { sendRequest, httpState } = useHttp(getUserRole);

  // Setting token in localstorage and execute getUserRole request.
  useEffect(() => {
    // If There's not "token" in local storage and is authenticated 
    if (!isSetInLocalStorage('token') && isAuthenticated) {
      // Get token and save in to local storage.
      getAccessTokenSilently().then(token => {
        localStorage.setItem('token', token);
        // Get user role
        console.log(user);
        sendRequest(user.sub);
      });
    }
  }, [getAccessTokenSilently, isAuthenticated, sendRequest, user]);

  /**
   * Check if there is set an item in localstorage.
   * @param {string} key the Key of the item.
   * @returns {boolean}
   */
  const isSetInLocalStorage = (key) => {
    return localStorage.getItem(key) !== null;
  }

  // Set rol in local storage to avoid request when the page is refreshed.
  // if the status is completed and the local storage don't have the role item.
  if (httpState.status === 'completed' && !isSetInLocalStorage('role')) {
    localStorage.setItem('role', httpState.data.role);
  }

  // isLoading == the user information is not loaded from auth0;
  // isAuthenticated == if the user is authenticated;
  // Show the Spinner, if the user information is not loading, or if is Authenticated and isn't set in localStorage role
  if (isLoading || (isAuthenticated && !isSetInLocalStorage('role'))) {
    return <Spinner />
  }

  return (
    <Layout onShowInformation={!isAuthenticated} >

      <Switch>

        <Route path='/actors/:actorId' >
          <ActorDetailPage />
        </Route>

        <Route path='/movies/:movieId'>
          <MovieDetailPage />
        </Route>

        <Route path='/actors'>
          <ActorsPage />
        </Route>

        <Route path='/movies'>
          <MoviesPage />
        </Route>

        <Route path='/' exact>
          <Redirect to='/actors' />
        </Route>

        <Route path='/*'>
          <NotFoundPage />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
