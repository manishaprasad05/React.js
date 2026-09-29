//Class Component State Object Example
import { Component } from 'react';

class CarStateobject extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            brand:"Ford",
            model:"Mustang",
            color:"Red",
            year:2020
        };
    }
    changeColor=()=>
    {
        this.setState({color:"blue"});
    }
    render() 
    {
        return (
            <div>
            <h2>My {this.state.brand}</h2>
            <p> It is a {this.state.color}
                 -{this.state.model}-
                from {this.state.year}.
            </p>
            <button type="button" onClick={this.changeColor}>
                Change Color</button>
            </div>

            );
    }
}

export default CarStateobject;