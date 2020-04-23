// imrc and then TAB for next line
import React, { Component } from 'react';
import "./house.css";

// cc and then TAB for class Component
// this component is going to have state
class house extends Component {
    state = {  }
    render() { 
        const house = this.props.house;
        return (  
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="House" />
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                </div>
            </div>      
        </div>
        )
    }
}
 
export default house;