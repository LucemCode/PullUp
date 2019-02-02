import React from 'react';
import { View, ScrollView, Keyboard } from 'react-native';

class KeyboardScrollingView extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            scrolling: false,
            height: 0,
        }
    }

    componentDidMount = () => {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    };

    componentWillUnmount = () => {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    };

    _keyboardDidShow = () => {
        this.setState({
            scrolling: true,
            height: 300
        })
    };

    _keyboardDidHide = () => {
        this.setState({
            scrolling: false,
            height: 0
        })
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView scrollEnabled={this.state.scrolling}>
                    {this.props.children}
                    <View style={{height: this.state.height}}/>
                </ScrollView>
            </View>
        )
    };
};

export default KeyboardScrollingView;