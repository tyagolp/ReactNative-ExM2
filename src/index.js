import React, { Component } from 'react';

import { View, Text } from 'react-native';
import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import createNavigation from './routes';

// import { Container } from './styles';

export default class App extends Component {
  state = {
    teste: '',
  };

  componentDidMount() {
    console.tron.log('teste');
  }

  render() {
    const Router = createNavigation();
    return <Router />;
  }
}
