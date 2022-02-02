import React, { Component } from 'react';
import Introduction from './introduction/Introduction';
import Services from './services/Services';
import Testimonials from './testimonials/Testimonials';
import Slider from './slider/Slider'
import Contact from './contact/Contact';
import { Search } from '../Navbar/Search';

export class Landing extends Component {

componentDidMount(){
      document.getElementById("home-landing").style.display = "block"
      this.props.ScrollUp();
}

  render() {   
    return (
        <>
            <Search  categories={this.props.categories} services={this.props.services} />
            <Introduction categories={this.props.categories} />
            <Slider />
            <Services services={this.props.services} />
            <Testimonials />
            <Contact />
        </>
    );
  }
}

export default Landing;
