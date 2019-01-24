import React, {Component} from "react";
import PropTypes from 'prop-types';


class UserCard extends Component {
  render() {
      const {personResult, personId}=this.props;
      if (personResult.length ===0 || personId >=personResult.length){
           return <p>no hay datos que pintar</p>;
      }else{
      const selectedPerson=personResult[personId];
      const fullName=`${selectedPerson.name.first} ${selectedPerson.name.last}`;
      const image=selectedPerson.picture.large;
      const age=selectedPerson.dob.age;
      const city=selectedPerson.location.city;
    return (
        <div className="person">
            <h2 className="person__name">{fullName}</h2>
            <img src={image} alt={fullName}/>
            <div className="person__age">{age}</div>
            <div className="person__city">{city}</div>
        </div>
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