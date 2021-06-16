import React from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    Image,
    ImageBackground, 
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialIcons';

import firebase from 'firebase'

class EditMovie extends React.Component {
    static navigationOptions = {
      header: null
    }

    constructor () {
      super();
      this.state = {
        info: '',
        about: '',
        rating: 0,
        stars: ''
      }
    }

    componentDidMount () {
        const movie = this.props.navigation.state.params;
        this.setState({
            info: movie.info,
            about: movie.about,
            rating: movie.rating.toString(),
            stars: movie.stars
        })
    }
    
    handleEdit = () => {
        const movie = this.props.navigation.state.params;
        firebase.database().ref(`fav-movies/${movie.key}`).update({
            info: this.state.info,
            about: this.state.about,
            rating: this.state.rating,
            stars: this.state.stars
        })
        this.props.navigation.navigate('Home')
    }

    render() {
        const movie = this.props.navigation.state.params;
        const background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeM7-r4hAo0Di6mIA-U4guIdnryS8CLtDqX8Cd9Mfy5tp8T1N4';
      return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: background}}
                style={styles.imageBack}
            >
                <View style={styles.backOverlay}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="clear" size={32} color="white"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleEdit}>
                            <Icon name="done" size={32} color="white"/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.content}>
                        <View style={styles.imageRow}>
                            <Image 
                            source={{uri: movie.image}}
                            style={styles.image}
                            />
                            <Text style={styles.title}>{movie.title}</Text>
                        </View>
                        <View style={styles.inputRow}>
                            <Hoshi
                                label={'INFO'}
                                borderColor={'#e7e7e7'}
                                borderHeight={1}
                                inputPadding={16}
                                labelStyle={{ color: 'white', fontSize: 14 }}
                                inputStyle={{ color: '#B6B6B6' }}
                                onChangeText={text => {this.setState({info: text})}}
                                value={this.state.info}
                            />
                        </View>
                        <View style={styles.inputRow}>
                            <Hoshi
                                label={'SUMARRY'}
                                borderColor={'#e7e7e7'}
                                borderHeight={1}
                                inputPadding={16}
                                labelStyle={{ color: 'white', fontSize: 14 }}
                                inputStyle={{ color: '#B6B6B6', textAlign: 'right' }}
                                onChangeText={text => {this.setState({about: text})}}
                                value={this.state.about}
                            />
                        </View>
                        <View style={styles.inputRow}>
                            <Hoshi
                                label={'RATING'}
                                borderColor={'#e7e7e7'}
                                borderHeight={1}
                                inputPadding={16}
                                labelStyle={{ color: 'white', fontSize: 14 }}
                                inputStyle={{ color: '#B6B6B6' }}
                                onChangeText={text => {this.setState({rating: text})}}
                                value={this.state.rating}
                            />
                        </View>
                        <View style={styles.inputRow}>
                            <Hoshi
                                label={'STARS'}
                                borderColor={'#e7e7e7'}
                                borderHeight={1}
                                inputPadding={16}
                                labelStyle={{ color: 'white', fontSize: 14 }}
                                inputStyle={{ color: '#B6B6B6' }}
                                onChangeText={text => {this.setState({stars: text})}}
                                value={this.state.stars}
                            />
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
      );
    }
}

export default EditMovie;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBack: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative'
    },
    backOverlay: {
        flex: 1,
        backgroundColor: 'black',
        opacity: .9
    },
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    content: {
        marginHorizontal: 18,
    },
    imageRow: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
        width: 120, 
        height: 120,
        resizeMode: 'cover',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: 'white'
    },
    title: {
        color: '#e7e7e7',
        fontFamily: 'Montserrat',
        fontSize: 30,
        fontWeight: '400',
        paddingTop: 10,
        textAlign: 'center'
    },
    inputRow: {
        paddingVertical: 10
    }
})