import React from 'react';
import KeyboardScrollingView from "../Componetns/KeyboardScrollingView";
import {Button, Text, TextInput} from "@shoutem/ui";
import {View} from "react-native";

class Register extends React.Component {

    render() {
        return (
            <View style={{backgroundColor: '#3B193E', flex: 1, justifyContent: 'center', padding: 10}}>
                <KeyboardScrollingView>
                    <Text style={{color: '#fff', fontSize: 50, marginVertical: 20}}>Sign Up</Text>
                    <Text style={{color: '#fff', fontSize: 30, marginVertical: 20}}>Wie ist dein Name?</Text>
                    <TextInput
                        style={{fontSize: 20, marginVertical: 10}}
                    />
                    <TextInput
                        style={{fontSize: 20, marginVertical: 10}}
                    />
                    <Button
                        style={{marginVertical: 10}}
                    >
                        <Text>Weiter</Text>
                    </Button>
                </KeyboardScrollingView>
            </View>
        );
    }
}

export default Register;