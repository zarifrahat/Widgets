import React from 'react';
// import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
           time : new Date()
       }
       this.tick = this.tick.bind(this);

    };

    tick(){
        this.setState({
            time: new Date()
        })
    };

    componentDidMount(){
        var handle = setInterval(this.tick, 1000);
    };

    componentWillUnmount(handle){
        handle = 0;
    };

    render(){
        return  (
            <div className="clock">
            <h1>Clock</h1>
            <section>
                <label>Time:</label> 
                <h2>{this.state.time.toTimeString()}</h2> 
                     
                    <label>Date:</label> 
                    <h2>{this.state.time.toDateString()}</h2>
                
           
                    
            </section>
            </div>
        )
    };
    
};


export default Clock;