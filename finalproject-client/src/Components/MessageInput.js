import React from 'react';

class MessageInput extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();

        var message = this.refs.message.value;
        this.props.onNewMessage(message);
        this.refs.message.value = '';
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="messageinput">Message:</label>
                <br/>
                <textarea id = "messageinput"ref = "message" rows="10" cols="50"></textarea>
                <button>Submit</button>
            </form>
        );
    }
}

export default MessageInput;