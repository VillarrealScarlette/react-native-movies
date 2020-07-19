import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import ScreensHome from './src/screens/Home';
import Header from './src/components/UI/Header';
import SuggestionList from './src/components/suggestion/List';
import CategoryList from './src/components/category/List';
import Player from './src/components/player/Player';
import API from './src/utils/api';

class App extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <ScreensHome>
          <Header />
          <Player />
          {/* <Text>buscador</Text>
        <Text>categorias</Text> */}
          <CategoryList list={this.state.categoryList} />
          <SuggestionList list={this.state.suggestionList} />
        </ScreensHome>
      </Provider>
    );
  }
}

export default App;
