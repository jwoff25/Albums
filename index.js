// Import library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => (
  <View>
    <Header headerText={'Albums Dumbledore'} />
    <AlbumList />
  </View>
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
