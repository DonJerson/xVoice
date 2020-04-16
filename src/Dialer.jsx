import React, { Component } from 'react';

const SIP = require("sip.js");
const UA = SIP.UA;

class Dialer extends Component {
    state = {  }
    constructor(props){
        super(props)
        let calls = []
        this.state={calls}
    }
    componentDidMount(){
        let calls = []
        let userAgent = new UA({
            uri: '101@172.81.180.199',
            authorizationUser: '101',
            password: '3FHsNrWQXLV9sn7'
          });
          userAgent.subscribe('101@172.81.180.199', 'presence')
          userAgent.on('invite', (session) => {
                calls.push(session)
                console.log(session)
                //session.accept()
            });
        console.log(userAgent)
        this.setState({userAgent,calls})
    }
    render() { 
        return ( <>
        
        <h1>Qloq</h1>
        {this.state.calls.map(call=>(
            <p>{call}</p>
        ))}
        
        </> );
    }
}
 
export default Dialer;