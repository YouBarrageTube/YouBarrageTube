import React from 'react';
import MessageInput from './MessageInput';
import MessageOutput from './MessageOutput';
import axios from 'axios';
import './Message.css';

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[]
        }
        this.handleNewMessage = this.handleNewMessage.bind(this);
    }

    handleNewMessage(newMessage){
        var self = this;
        var messages = this.state.messages;

        axios.post('/message',{
            message:newMessage
        }).then(function (response) {
            messages.push(response.data);
            self.setState({
                messages:messages
            });
        });
    }

    render(){
        return (
            <div className='Message'>
                <MessageInput onNewMessage={this.handleNewMessage}/>
                <MessageOutput messages={this.state.messages}/>
            </div>
        )
    }
}

export default Message;