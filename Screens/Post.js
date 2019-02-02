import React from 'react';
import { View } from 'react-native';
import {
    Button,
    NavigationBar,
    Title,
    ImageBackground,
    Overlay,
    ScrollView,
    Caption,
    Tile,
    Text,
    Icon
} from "@shoutem/ui";

class Post extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            data: this.props.navigation.state.params
        }
    }

    render() {
        let makeDate = (a) => {
            let A = new Date(a);
            let b = A.getUTCDate()
            let c = A.getMonth()
            let d = A.getFullYear()
            let e = A.getHours()
            let f = A.getMinutes()
            return ` ${b}.${c}.${d} ${e}:${f}`
        };

        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    inline
                    centerComponent={<Title>Post</Title>}
                    leftComponent={
                        <Button
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon style={{color: '#000000'}} name="left-arrow"/>
                        </Button>
                    }
                />
                <View style={{flex: 1, marginTop: 70}}>
                    <ScrollView>
                        <ImageBackground
                            styleName="large"
                            source={{ uri: this.state.data.img }}
                        >
                            <Tile>
                                <Overlay>
                                    <Title styleName="md-gutter-bottom">{this.state.data.title}</Title>
                                    <Caption>{makeDate(this.state.data.date)}</Caption>
                                </Overlay>
                            </Tile>
                        </ImageBackground>
                        <Text style={{margin: 30}}>{this.state.data.content}</Text>
                    </ScrollView>
                </View>
            </View>
        )
    };
};

export default Post;