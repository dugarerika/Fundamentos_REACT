import React from 'react';
import LoginPage from '../auth/LoginPage';
// import TweetsPage from '../tweets/TweetsPage';

class App extends React.Component{


  render() {

    return (
      <div className="App">
        {/*<TweetsPage />*/}
        <LoginPage/>
      </div>
    );
  }

}

export default App;
