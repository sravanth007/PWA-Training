import React, { Component } from 'react';
import Counter from './counter';
class counters extends Component {
    state = { 
          counters:[
            {id:1, value :7},
            {id:2, value :12},
            {id:3, value :10},
            {id:4, value :15},
            {id:5,value :45}
         ]
     } ;
    handleReset =() =>{
       const counters= this.state.counters.map( c => {
            c.value=0;
            return c;
        });
        this.setState({counters});

    };

    handleDelete = counterId =>{
        const counters=this.state.counters.filter(c =>c.id !== counterId);
        this.setState({counters});
    
    };
    render() { 
        return (<div>
            <button  
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset </button>
            
        {this.state.counters.map(counter => (
        <Counter 
         key={counter.id}  
         onDelete={this.handleDelete} 
         counter={counter}
        />
         ) )}
        </div>);
    }
}
 
export default counters;