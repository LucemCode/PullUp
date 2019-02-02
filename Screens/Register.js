import React from 'react';
import KeyboardScrollingView from "./Componetns/KeyboardScrollingView";
import {Button, Icon, NavigationBar, Spinner, Text, TextInput} from "@shoutem/ui";
import {View} from "react-native";
import Fire from "../Fire";

class Register extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
            firstName: "",
            lastName: "",
            inProgress: false
        }
    }

    onSubmit = async () => {
        this.setState({inProgress: true});
        if (this.state.password === this.state.passwordConfirm) {
            try {
                await Fire.auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                try {
                    Fire.auth.currentUser.updateProfile({
                        displayName: this.state.firstName + " " + this.state.lastName
                    })
                } catch (e) {
                    alert(e)
                }
            } catch (e) {
                this.setState({inProgress: false});
                alert(e)
            }
        } else {
            alert("Password do not match")
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
                    <Text style={{color: '#fff', fontSize: 50, marginVertical: 20}}>Sign Up</Text>
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
                        placeholder={'Vorname'}
                        onChangeText={(text) => this.setState({firstName: text})}
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
                        placeholder={'Nachname'}
                        onChangeText={(text) => this.setState({lastName: text})}
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
                        placeholder={'Passwort wiederholen'}
                        secureTextEntry
                        onChangeText={(text) => this.setState({passwordConfirm: text})}
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

                        <Text>Regestrieren</Text>
                    </Button>
                    {this.state.inProgress ? <Spinner style={{color: '#ffffff'}}/>:null}
                </KeyboardScrollingView>
            </View>
        );
    }
}

export default Register;