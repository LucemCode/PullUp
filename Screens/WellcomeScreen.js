import React from 'react';
import { NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import { Text, ImageBackground, Overlay, Image, Button, NavigationBar } from '@shoutem/ui';

class WellcomeScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#3B193E'}}>
                <NavigationBar
                    styleName={"clear"}
                />
                <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={require('../assets/img/bg.jpg')}
                >
                    <Overlay
                        //style={{backgroundColor: '#3B193E', flex: 1, justifyContent: 'center', alignItems: 'center', opacity: 0.9}}
                        styleName={"fill-parent image-overlay"}
                    >
                        <Image
                            style={{height: 150, width: 180, margin: 20}}
                            source={require('../assets/img/PullUp.png')}
                        />
                        <Text styleName={"h-center"} style={{color: 'white', fontSize: 50}}>PullUp</Text>
                        <Text style={{margin: 10}}>Teile deine Fotos. Ganz einfach!</Text>
                        <Button
                            style={{margin: 10, paddingHorizontal: 40,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 6.27,
                                elevation: 10,
                                underlayColor: '#333333'
                            }}
                            onPress={() => this.props.navigation.navigate("Login")}
                        >
                            <Text>Login</Text>
                        </Button>
                        <Button
                            style={{margin: 10, paddingHorizontal: 40,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 6.27,
                                elevation: 10,
                                underlayColor: '#333333'
                            }}
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text>Registrieren</Text>
                        </Button>
                    </Overlay>
                </ImageBackground>
            </View>
        );
    }
}

export default WellcomeScreen;