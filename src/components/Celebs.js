import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Image,
    ScrollView
} from 'react-native';

class Celebs extends React.Component {
    render() {
      return (
        <View 
            style={{
                width: 100, 
                height: 100,
                paddingHorizontal: 10,
                alignItems: 'center'
            }}
        >
            <Image
                style={{
                    width: 80, 
                    height: 80,
                    resizeMode: 'cover',
                    borderRadius: 50
                }}
                source={{uri: this.props.image}}
            />
            <Text 
                numberOfLines={1} 
                ellipsizeMode='tail'
                style={{
                    color: '#B6B6B6',
                    fontWeight: '700',
                    marginTop: 5,
                    paddingHorizontal: 5,
                    fontSize: 11
            }}>
                {this.props.name}
            </Text>
        </View>
      );
    }
}

export default Celebs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})