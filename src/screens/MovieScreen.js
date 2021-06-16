import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class MovieScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  handleOpenTrailer = () => {
    const movie = this.props.navigation.state.params;
    Linking.canOpenURL(movie.trailer).then(supported => {
      if (supported) {
        Linking.openURL(movie.trailer);
      } else {
        alert("Can't open trailer");
      }
    });
  }

  handleShare = () => {
    const movie = this.props.navigation.state.params;
    const tweet = `https://twitter.com/intent/tweet?text=Go%20watch%20${movie.title}%20trailer:%20${movie.trailer}`;

    Linking.canOpenURL(tweet).then(supported => {
      if (supported) {
        Linking.openURL(tweet);
      } else {
        alert("Can't open trailer");
      }
    });
  }

  handleEdit = () => {
    const movie = this.props.navigation.state.params;
    this.props.navigation.navigate('Edit', {...movie})
    //firebase.database().ref(`fav-movies/${movie.key}`).update({title: 'Interstellar'})
  }

  render() {
    const gradientHeight = 500;
    const data = Array.from({ length: gradientHeight })
    const movie = this.props.navigation.state.params;

    return (
      <>
        <View style={styles.moviescreen}>
          <ImageBackground 
            source={{uri: movie.image}}
            style={styles.image}
          > 
            {
              data.map((_, i) => (
                <View 
                  key={i}
                  style={{
                    position: 'absolute',
                    backgroundColor: 'black',
                    height: 1,
                    bottom: (gradientHeight - i - 1),
                    right: 0,
                    left: 0,
                    zIndex: 2,
                    opacity: (1/ gradientHeight) * (i + 1)
                  }}
                />
              ))
            }
          </ImageBackground>  
          <View style={styles.infoMovie}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.info}>{movie.info}</Text>
            </View>
            <View style={styles.aboutRow}>
              <View style={styles.summaryTitleRow}>
                <Text style={styles.summaryTitle}>SUMMARY</Text>
                <View style={styles.stars}>
                  <View style={{justifyContent: 'center'}}>
                    <Icon name="star" size={16} color="#fe4141"/>
                  </View>
                  <Text style={styles.ratingText}>{movie.rating}</Text>
                </View>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.about}>{movie.about}</Text>
              </View>
              <View style={styles.actorsRow}>
                <Text style={styles.actors}>{movie.stars}</Text>
              </View>
            </View>
            <View style={styles.actionRow}>
              <View style={styles.actionContent}>
                <TouchableOpacity onPress={this.handleOpenTrailer}>
                  <View style={styles.trailerButton}>
                    <View style={styles.trailerIcon}>
                      <Icon name="movie" size={15} color="#fe4141"/>
                    </View>
                    <Text style={styles.trailerText}> WATCH TRAILER</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.shareButtons}>
                <View style={styles.share}>
                  <TouchableOpacity onPress={this.handleEdit}>
                    <Icon name="create" size={40} color="#fe4141"/>
                  </TouchableOpacity>
                </View>
                <View style={styles.share}>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon name="clear" size={40} color="#fe4141"/>
                  </TouchableOpacity>
                </View>
                <View style={styles.share}>
                  <TouchableOpacity onPress={this.handleShare}>
                    <Icon name="share" size={40} color="#fe4141"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default MovieScreen;

const styles = StyleSheet.create({
    moviescreen: {
      flex: 1,
      backgroundColor: 'black'
    },
    image: {
      height: 430,
      width: null,
      resizeMode: 'cover',
      position: 'relative'
    },
    gradient: {
    },
    infoMovie: {
      flex: 1,
      height: null,
      width: null,
      textAlign: 'justify',
      paddingHorizontal: 16
    },
    titleRow: {
      flex: 1,
      justifyContent: 'center'
    },
    title: {
      color: '#e7e7e7',
      fontFamily: 'Montserrat',
      fontSize: 36,
      fontWeight: '400'
    },
    info: {
      color: '#B6B6B6',
      fontFamily: 'Open Sans',
      fontSize: 12,
      fontWeight: '600'
    },
    aboutRow: {
      flex: 2,
      justifyContent: 'center'
    },
    summaryTitleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    summaryRow: {
      paddingTop: 10
    },
    summaryTitle: {
      color: '#e7e7e7',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: '400'
    },
    stars: {
      flexDirection: 'row',
    },
    ratingText: {
      paddingHorizontal: 3,
      color: '#fe4141'
    },
    about: {
      color: '#B6B6B6',
      fontFamily: 'Open Sans',
      fontSize: 13,
      fontWeight: '400',
      textAlign: 'justify'
    },
    actorsRow: {
      paddingTop: 8
    },
    actors: {
      color: '#e7e7e7',
      fontFamily: 'Open Sans',
      fontSize: 12,
      fontWeight: '300',
      fontStyle: 'italic'
    },
    actionRow: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    actionContent: {
      flex: 1,
      justifyContent: 'center',
    },
    trailerButton: {
      borderColor: '#fe4141',
      borderWidth: 1,
      borderRadius: 5,
      padding: 4,
      width: 152,
      flexDirection: 'row'
    },
    trailerIcon: {
      justifyContent: 'center',
      marginLeft: 2,
    },
    trailerText: {
      color: '#fe4141',
      fontWeight: '400',
      fontSize: 14,
      marginRight: 2,
      marginLeft: 2,
      position: 'relative',
    },
    shareButtons: {
      flex: 1,
      flexDirection: 'row',
    },
    share: {
      flex: 1,
      justifyContent: 'center',
    },
})

