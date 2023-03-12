import React from "react";
import PhotoContextProvider from "./context/photoContext";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
  Routes,
  Navigate,
  Router
} from "react-router-dom";
import Header from "./components/Header";
import NotFound from './components/NotFound'
import Search from "./components/Search";

class App extends React.Component {
  handleSubmit = () => {};

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/">
        {/* <div className="container">
          <Header handleSubmit={this.handleSubmit} history={props.history} />
        </div> */}
        {/* <Router basename="/#"> */}
          <Routes>
            <Route path="/"
            element={<Header />}
              />
            {/* <Route index path="/" element={<Home />} /> */}
          </Routes>  
        {/* </Router> */}
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

// element={props => (
//   <Header
//     handleSubmit={this.handleSubmit}
//     history={props.history}
//   />
// )}

export default App;
