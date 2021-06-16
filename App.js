/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import MovieScreen from './src/screens/MovieScreen'
import EditMovieScreen from './src/screens/EditMovieScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Movie: {screen: MovieScreen},
  Edit: {screen: EditMovieScreen},
});

const App = createAppContainer(MainNavigator);

export default App;