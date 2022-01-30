import React, { Component } from 'react';
import IntroItem from './IntroItem';

export class Introduction extends Component {
  render() {
    return (
    	<div className="intro">
		<div className="container">
			<div className="row">
				<div className="col">
					<h2 className="intro_title text-center">We have the best tours</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-10 offset-lg-1">
					<div className="intro_text text-center">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. </p>
					</div>
				</div>
			</div>
			<div className="row intro_items">

				{/* <!-- Intro Item --> */}
				<IntroItem categories={this.props.categories} />
		
			</div>
		</div>
	</div>
    );
  }
}

export default Introduction;
