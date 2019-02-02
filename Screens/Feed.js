import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, NavigationBar, Title, Button ,Spinner, Card, Image, Caption, Subtitle } from '@shoutem/ui';
import FeedCard from './Componetns/FeedCard';

import Fire from '../Fire';

class Feed extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isReady: false,
            feedData: null
        }
    }

    snapshotToArray = (snapshot) => {
        let a = [];
        snapshot.forEach(function(childSnapshot) {
            let b = childSnapshot.val();
            b.key = childSnapshot.key;
            a.push(b);
        });
        return a;
    };

    componentWillMount = async () => {
        await Fire.db.ref('data/').on('value', (snapshot) => {
            let arraySnapshot = this.snapshotToArray(snapshot);
            this.setState({
                feedData: arraySnapshot,
                isReady: true
            });
        })
    };

    componentWillUnmount = () => {
        Fire.db.ref('data/').on('vale')
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <NavigationBar
                    inline
                    centerComponent={<Title>Feed</Title>}
                    rightComponent={
                        <Button
                            onPress={() => Fire.auth.signOut()}
                        >
                            <Text>Log Out</Text>
                        </Button>
                    }
                />
                <View style={{marginTop: 70}}>
                    <ScrollView style={{height: '100%'}}>
                        {this.state.isReady ? (
                            this.state.feedData.map((a, k) => {
                                return (
                                    <TouchableOpacity key={k} onPress={() => this.props.navigation.navigate('Post', a)}>
                                        <FeedCard
                                            img={a.img}
                                            title={a.title}
                                            date={a.date}
                                        />
                                    </TouchableOpacity>
                                )
                            })) : <Spinner/>
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Feed;