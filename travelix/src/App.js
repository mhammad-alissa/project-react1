import './App.css';
import './elements_responsive.css'
import './elements_styles.css'

import {React , Component} from 'react'
import Landing from './components/landing/Landing';
import Category from './components/category/Category';



class App extends Component {

  constructor(){
    super();
    this.state = {
      categories : []
    }
  }

  async componentDidMount() {
    const url     = "http://localhost/project-react1/travelix/category.php";
    const res     = await fetch(url);
    const data    = await res.json();

    this.setState({
      categories : data
    })
  }


  render() {
    return (
      <div className="App">
        <Landing categories={this.state.categories} />
        <Category />
      </div>
    );
  }
}

export default App;
