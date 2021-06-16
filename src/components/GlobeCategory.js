import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    ScrollView
} from 'react-native';

import Celebs from './Celebs'

class GlobeCategory extends React.Component {
    render() {
      return (
        <View 
        style={{
          flex: 1,
          paddingTop: 20, 
      }}>
        <Text style={{ 
          color: 'white',
          fontSize: 24,
          fontWeight: '500',
          paddingHorizontal: 20 
        }}>
          {this.props.name}
        </Text>
        <Text style={{ 
          color: '#B6B6B6',
          fontWeight: '100',
          marginTop: 5,
          paddingHorizontal: 20
        }}>
          {this.props.description}
        </Text>
        <View style={{ height: 100, marginTop: 20}}>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Celebs name="Leonardo DiCaprio" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfB0FVcM0Wo6NeXEJP5LZqLuCCrI0KV6ViyjaI_FVURTKlF06O"/>
            <Celebs name="Amy Adams" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW5KWkMtH_jFEVgEhxD-wIly4NkuD_Diw9u_qoRUZrvI7HNaVY"/>
            <Celebs name="Tom Hardy" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSQB4gOVs_WoeQp_Hubfym6cMpIqDZiMey-YVwHaauU0mjZqiW"/>
            <Celebs name="Lily Collins" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCp3qAAMW7rFkpCljrDbXC2-vNOix_bZDWrkotE70WhDUPySmI"/>
            <Celebs name="Christian Bale" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQLv8mTFoEgVo6meIS0IQO--Dyo-lhGPkd76l2JTXsxl5LT3e8"/>
          </ScrollView>
        </View>
      </View>
      );
    }
}

export default GlobeCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})