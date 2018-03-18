import React from 'react';

class MessageOutput extends React.Component{
    render(){
        var messages = this.props.messages
        return(
            <ul>
                {messages.map((message,index)=>
                    <li key={index}>{message}</li>
                )}
            </ul>
        );
    }
}

export default MessageOutput;