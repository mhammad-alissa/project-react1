import React, { Component } from 'react';
import Introduction from './introduction/Introduction';
import Services from './services/Services';
import Testimonials from './testimonials/Testimonials';
import Slider from './slider/Slider'
import Contact from './contact/Contact';

export class Landing extends Component {
  render() {
    return (
        <>
            <Introduction categories={this.props.categories} />
            <Slider />
            <Services />
            <Testimonials />
            <Contact />
        </>
    );
  }
}

export default Landing;
