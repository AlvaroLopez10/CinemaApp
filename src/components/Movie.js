import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Image,
    ScrollView
} from 'react-native';

class Movie extends React.Component {
    render() {
      return (
        <View 
            style={{
                width: 140, 
                height: 210,
                paddingHorizontal: 10,
                alignItems: 'center'
            }}
        >
            <Image
                style={{
                    flex: 15,
                    width: 120, 
                    height: null,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    borderWidth: 1,
                }}
                source={{uri: this.props.cover}}
            />
            <Text 
                numberOfLines={1} 
                ellipsizeMode='tail'
                style={{
                    flex: 2, 
                    color: '#B6B6B6',
                    fontWeight: '700',
                    marginTop: 5,
                    paddingHorizontal: 5,
                    fontSize: 12
            }}>
                {this.props.title}
            </Text>
        </View>
      );
    }
}

export default Movie;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})