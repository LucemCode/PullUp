import React from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { WellcomeScreen, Login, Regsiter, Feed, Post } from './Screens/ScreenIndex';

import Fire from './Fire';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            staticAreLoaded: false,
            callbackFromServer: false,
            userAuth: false
        };

        Fire.init();
    }

    componentWillMount = async () => {
        await Font.loadAsync({
            'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf')
         });
        await Asset.fromModule(
            require('./assets/img/bg.jpg'),
            require('./assets/img/PullUp.png'),
        ).downloadAsync();
        this.setState({staticAreLoaded: true});
    };

    componentDidMount = () => {
        Fire.auth.onAuthStateChanged((user) => {
            this.setState({callbackFromServer: true});
            if (user) {
                this.setState({userAuth: true});
            } else {
                this.setState({userAuth: false});
            }
        })
    };

    render(){
        return(
            <View style={{height: "100%"}}>
                {(this.state.staticAreLoaded && this.state.callbackFromServer) ?
                    (this.state.userAuth ? <this.PrivatNav/>
                        : <this.PublicNav/>
                    )
                : <AppLoading/>}
            </View>
        )
    }

    PublicNav = createStackNavigator({
        WellcomeScreen: {
            screen: WellcomeScreen,
            path: "/",
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login,
            path: "/login",
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: Regsiter,
            path: "/register",
            navigationOptions: {
                header: null
            }
        }
    });

    PrivatNav = createStackNavigator({
        Feed: {
            screen: Feed,
            path: "/",
            navigationOptions: {
                header: null
            }
        },
        Post: {
            screen: Post,
            path: "/post:id",
            navigationOptions: {
                header: null
            }
        }
    });
}

export default App;