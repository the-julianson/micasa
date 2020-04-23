import React from 'react';
import House from '../house';

//sfc and then Tab to create a Stateless Function Component 
const FeaturedHouse = (props) => {
    if (props.house) return (
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-center">
                    Featured house
                </h3>
            </div>
            <House house={props.house} />
        </div>)
    return (<div>No featured house at this time</div>)
}
 
export default FeaturedHouse;  

console.log(FeaturedHouse)