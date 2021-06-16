import React from 'react';
import firebase from 'firebase'
import {
    StyleSheet,
    Text, 
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Movie from './Movie'

class Category extends React.Component {

  constructor () {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    // Get a database reference to our posts
    var db = firebase.database();

    if (this.props.category == 'fav') {
      var ref = db.ref('fav-movies');
    } else if (this.props.category == 'pop') {
      var ref = db.ref('pop-movies');
    } else {
      var ref = db.ref('tv-shows');
    }

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", snapshot => {
      this.setState({
        movies: snapshot.val() 
      })
    }, function (errorObject) {
      alert("The read failed");
    });
  }

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
      <View style={{ height: 210, marginTop: 20}}>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            this.state.movies.map((data, key) => {
              return (
                <View key={key}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie', {...data, key: key})}>
                    <Movie 
                      {...data}
                    />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})