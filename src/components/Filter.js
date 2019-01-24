import React, {Component} from "react";
import PropTypes from 'prop-types';


class Filter extends Component {
  render() {
    return (
        <div className="app__filter">
      <div className="app__filter--item">
      <input className="app__filter--fullname" type="text" placeholder="buscador de personas" onKeyUp={this.props.keyupAction}/>
      </div>
      </div>
    );
  }
}
Filter.PropTypes={
    keyupAction:PropTypes.func.isRequired
}
export default Filter;