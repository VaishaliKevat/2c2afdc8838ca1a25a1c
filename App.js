/**
 * App Screen
*/

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import { Provider } from 'react-redux';
import configureStore from './app/redux/config/store/index';
console.disableYellowBox = true

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false,
      isLoading: true,
      isLoggedIn: false,
      isOnBoardingCompleted: false,
      store: configureStore(() => {
      }).store
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
          <NavigationContainer>
            <RootStackScreen isLoggedIn={this.state.isLoggedIn} isOnBoardingCompleted={this.state.isOnBoardingCompleted} toggleTheme={this.toggleTheme}/>
          </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
