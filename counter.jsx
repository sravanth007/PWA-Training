import React, { Component } from 'react';

class Counter extends Component {
    
    styles = {
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'times new roman'
    }


 handleIncrement= product => {
     console.log(product);
     this.setState({ value:this.state.value + 1 });
 };



 render() { 
     

      
        return (
        <div>
             {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button  onClick ={product => this.handleIncrement(product) }  
            className="btn btn-secondary btn-sm">Increment
            </button>
            <button onClick= {() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2">Delete </button>
            
            </div>);
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter; 