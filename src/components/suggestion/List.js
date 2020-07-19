import React, {Component} from 'react';
import {FlatList} from 'react-native';

import ScreensSuggestionLayout from '../../screens/suggestion/Layout';
import Empty from './Empty';
import Separator from './Separator';
import Suggestion from './Suggestion';

class SuggestionList extends Component {
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };
  render() {
    return (
      <ScreensSuggestionLayout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </ScreensSuggestionLayout>
    );
  }
}

export default SuggestionList;
