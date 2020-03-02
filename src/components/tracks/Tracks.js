import React, { Component } from "react";
import {Consumer} from "../../context"
import Spinner from '../layout/spinner'
import Track from '../tracks/Track'

class Tracks extends Component {    

    //consumer we are passing state in consumer 
  render() {
    return (
      <div>
        <Consumer>
            {value =>{ 
                console.log(value)
                const {trackList, heading} = value
                if(trackList === undefined || trackList .length === 0){
                    return <Spinner/>
                }else{
                    return (
                        <>
                        <h3 className='text-center mb-4 '>{heading}</h3>
                        <div className='row'>
                            {trackList.map(item =>(
                                <Track key={item.track.track_id} track = {item.track}/>
                            ))}
                        </div>
                        </>
                    );
                }
            }}
        </Consumer>
      </div>
    );
  }
}

export default Tracks;
