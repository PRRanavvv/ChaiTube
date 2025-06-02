import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ButtonList from './components/ButtonList';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <div className='bg-gray-100'>
        <Head />
        <RouterProvider router={appRouter} />
        {/* Assuming ButtonList should be part of MainContainer */}
        <ButtonList />
      </div>
    </Provider>
  );
}

export default App;
