import React, { Component } from 'react';
import Player from './Player';

class BarragePlayer extends Component {
    constructor(props){
        super(props);
        this.state={
            isPlaying:false
        };
        this.play = this.play.bind(this);
    }
    componentDidMount () {
        console.log(this);
    }
    play(){
        this.setState({
            isPlaying: !this.state.isPlaying
        });
        console.log(this.state.isPlaying);
    }

    render(){
        return(
            <div>
                <Player handleButtonClick={this.play}/>
            </div>
        );
    }
}

export default BarragePlayer;