import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenOne from './src/Screens/ScreenOne';
import ScreenTwo from './src/Screens/ScreenTwo';

//redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  const Main = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="ScreenOne"
            component={ScreenOne}
            options={{title: 'Influencers'}}
          />
          <Stack.Screen
            name="ScreenTwo"
            component={ScreenTwo}
            options={{
              title: 'Profile',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
