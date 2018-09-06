import React, { Component } from "react";
import { Consumer } from "../../context";
import {Spinner} from '../layout/spinner';
import {Track} from './Track'

class Tracks extends Component {
  render() {
    return (


      <Consumer>
        {value => {

          console.log(value);
          if(value.track_list===undefined || value.track_list.length===0){

            return  (
                <div className="text-center" >
                <Spinner/>
                </div>
               ) 
          }else{
            return (
                    <React.Fragment>
                    <h3 className="text-center mb-4">
                    {value.heading}
                    </h3>
                    <div className="row">
                
                    {value.track_list.map(item=>(
                      <Track  key={item.track.track_id} track={item.track} />  
                    ))}
                    
                    </div>
                    
                    </React.Fragment>
               
            )
          }
        }}
      </Consumer>
    );
  }
}
export default Tracks;
