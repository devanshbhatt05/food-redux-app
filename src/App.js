import logo from './logo.svg';
import './App.css';
import { Provider, createStoreHook } from 'react-redux';


import store from './store';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Navbar from './components/Navbar';




function App() {
  return (
    <Provider store= {store}>
      <div className="App">
      <Navbar/>
        <PostForm/>

        <Posts/>
      
      </div>
    </Provider>
  );
}

export default App;
