import React from 'react';
import { View, Image, Caption, Spinner, Title } from '@shoutem/ui';

class FeedCard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            imgLoad: true
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
            <View>
                <View style={{
                    margin: 9,
                    padding: 9,
                    backgroundColor: "#fff",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
                    elevation: 8,
                }}>
                    <Title style={{
                        marginBottom: 10,
                    }}>
                        {this.props.title}
                    </Title>
                    <Caption style={{
                        marginBottom: 4
                    }}>
                        {makeDate(this.props.date)}
                    </Caption>
                    <View>
                        {this.state.imgLoad ? <Spinner/>
                        :   null}
                        <Image
                            style={{width: "100%"}}
                            styleName={"large-banner"}
                            source={{uri: this.props.img}}
                            onLoadEnd={() => this.setState({imgLoad: false})}
                        />
                    </View>
                </View>
            </View>
        )
    };
};

export default FeedCard;