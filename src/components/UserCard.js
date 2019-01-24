import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class UserCard extends Component {
  render() {
      const {personResult}=this.props;
      const personId=this.props.match.params.id;
      if (personResult.length ===0 || personId >=personResult.length){
           return <p>no hay datos que pintar</p>;
      }else{
      const selectedPerson=personResult[personId];
      const fullName=`${selectedPerson.name.first} ${selectedPerson.name.last}`;
      const image=selectedPerson.picture.large;
      const age=selectedPerson.dob.age;
      const city=selectedPerson.location.city;
    return (
        <Fragment>
        <div className="person">
            <h2 className="person__name">{fullName}</h2>
            <img src={image} alt={fullName}/>
            <div className="person__age">{age}</div>
            <div className="person__city">{city}</div>
        </div>
        <div className="app__go--back"> 
        <Link className="app__go--back-link" to="/" >Volver al listado</Link>
        </div>
        </Fragment>
        );
    
  }}
}
UserCard.PropTypes={
    fullName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city:PropTypes.string.isRequired,
 }

export default UserCard;