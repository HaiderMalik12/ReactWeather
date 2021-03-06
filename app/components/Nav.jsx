import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

export default class Nav extends React.Component {

    constructor(props){
        super(props);

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e){
        e.preventDefault();
        alert('Not Yet Wired Up');
    }
  render() {
    return (
       <div className="top-bar">
           <div className="top-bar-left">
               <ul className="menu">
                   <li className="menu-text">React Weather App</li>
                   <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink></li>
                   <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
                   <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
               </ul>
           </div>
           <div className="top-bar-right">
               <form onSubmit={this.onSearch}>
                   <div className="menu">
                       <li><input type="search" placeholder="Search Weather"/></li>
                       <li>
                           <input type="submit" className="button" value="Get Weather"/>
                       </li>
                   </div>
               </form>
           </div>
       </div>
    );
  }
}
