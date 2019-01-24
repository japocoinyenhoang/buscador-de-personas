import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";
class UserList extends Component {
  render() {
    const {blackResults}=this.props;

    return ( 
    <ul className="app__list">
    {blackResults.map(item=>{
      return(
        <li className="app__list__item" id={item.id} key={item.id}>
        <Link to={`/person/${item.id}`} className="app__list--link">
        <ListItem
        fullName={`${item.name.first} ${item.name.last}`}
        image={item.picture.medium} 
        age={item.dob.age}
        city= {item.location.city} />
        </Link>
        </li>
      )
    })}
    </ul>);
  }
}

UserList.PropTypes={
    blackResults:PropTypes.arrayOf(PropTypes.object)
}

export default UserList;