import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import ScreensCategoryLayout from '../../screens/category/Layout';
import Empty from '../suggestion/Empty';
import Separator from './Separator';
import Category from './Category';

class CategoryList extends Component {
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Category {...item} />;
  };
  render() {
    return (
      <ScreensCategoryLayout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </ScreensCategoryLayout>
    );
  }
}

function mapStateToProps(state) {
  debugger;
}

export default connect(mapStateToProps)(CategoryList);
