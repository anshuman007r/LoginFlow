import React, { Component } from 'react'
import { createAppContainer, NavigationActions } from 'react-navigation';
import { AppNavigator } from './component/Navigation'
// import { store } from './storage/store'
import { Provider } from 'react-redux'


export default class App extends Component {

  render() {
    return (
        // <Provider >
          <AppContainer 
            ref={nav => { this.navigator = nav; }}
            onNavigationStateChange={(prevState, currentState, action) => {
              // const currentScreen = APP_UTIL.getActiveRouteName(currentState);
              // const prevScreen = APP_UTIL.getActiveRouteName(prevState);
              // console.log("State test", prevScreen, currentScreen)
              // if (prevScreen !== currentScreen) {
              //   const screen = currentScreen
              //   console.log('Current Screen', screen)
              //   store.dispatch(setScreen(screen))
              // }
            }}
          />
        // </Provider>

    )
  }
}

const AppContainer = createAppContainer(AppNavigator)