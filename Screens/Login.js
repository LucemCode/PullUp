import React from 'react';
import KeyboardScrollingView from './Componetns/KeyboardScrollingView';
import { KeyboardAvoidingView } from 'react-native';
import { View, Spinner, Text, TextInput, Button, NavigationBar, Icon } from '@shoutem/ui';

import Fire from '../Fire';

class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            inProgress: false,
        }
    }

    onSubmit = async () => {
        this.setState({inProgress: true});
        try {
            await Fire.auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        } catch (e) {
            this.setState({inProgress: false});
            alert(e)
        }
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#3B193E', paddingHorizontal: 40, paddingTop: 110}}>
                <NavigationBar
                    styleName={"clear"}
                    leftComponent={
                        <Button
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon style={{color: '#fff'}} name="left-arrow"/>
                        </Button>
                    }
                />
                <KeyboardScrollingView>
                    <Text styleName={"bold"} style={{fontSize: 50, color: '#fff'}}>Log In</Text>
                    <TextInput
                        style={{marginVertical: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,
                            elevation: 10,
                        }}
                        placeholder={'Email'}
                        onChangeText={(text) => this.setState({email: text})}
                    />
                    <TextInput
                        style={{marginVertical: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,
                            elevation: 10,
                        }}
                        placeholder={'Passwort'}
                        secureTextEntry
                        onChangeText={(text) => this.setState({password: text})}
                    />
                    <Button
                        style={{marginVertical: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,
                            elevation: 10,
                        }}
                        onPress={this.onSubmit}
                    >

                        <Text>Login</Text>
                    </Button>
                    {this.state.inProgress ? <Spinner style={{color: '#ffffff'}}/>:null}
                </KeyboardScrollingView>
            </View>
        );
    }
}

export default Login;