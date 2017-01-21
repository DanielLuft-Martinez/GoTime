
import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import MyScene from './MyScene';
//import MapTest01 from './MapTest01';

class MyAwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            //funtion to go to map test 01
            onToMap={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: "Map Test",
                index: 1,


              });
            }}


            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}
AppRegistry.registerComponent('MyAwesomeProject', () => MyAwesomeProject);
