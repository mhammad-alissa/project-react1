import React, { Component } from 'react';
import Youtube from '../youtube/Youtube';

import image from "./offer_8.jpg"; 

export class Slider extends Component {
  render() {
    return (


		<div className='intro intro-youtube'>
			<div className="container">
				<Youtube videoId={"vVjz8LcOrEU"}/>
			</div>
		</div>
   
        );
  }
}

export default Slider;
