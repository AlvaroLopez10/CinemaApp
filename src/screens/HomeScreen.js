import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import Category from '../components/Categories'
import GlobeCategory from '../components/GlobeCategory'

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
      return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{
                backgroundColor: 'black'
            }}>
                <Category name="My Favorite Movies" description="This are my favorite movies" category="fav" navigation={this.props.navigation}/>
                <GlobeCategory name="Popular Celebs" description="Most Popular Celebs"/>
                <Category name="Popular Movies" description="Most popular movies" category="pop" navigation={this.props.navigation}/>
                <Category name="Popular Tv Shows" description="Most popular tv shows" category="tv" navigation={this.props.navigation}/>
            </ScrollView>
            </SafeAreaView>
        </>
      );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})