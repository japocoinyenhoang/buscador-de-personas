import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import{getApiData} from './services/personService';
import Filter from './components/Filter';
import './App.css';
import UserList from './components/UserList';
import UserCard from './components/UserCard';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      query:'',
      results: this.getSaveData()
    };
    this.getQuery=this.getQuery.bind(this);
  }
 getQuery(e){
   const userQuery=e.currentTarget.value;
   this.setState({
     query:userQuery
   })
 }
  filterThis(){
  const filteredResult=this.state.results.filter (item=>{
    const fullName=`${item.name.first} ${item.name.last}`;
    if (fullName.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())){
      return true;
    }else{
      return false;
    }
  //  ternario// return (fullName.includes(this.state.query))?true : false ;
  });
  return filteredResult;
}

  getSaveData(){
    const userData=localStorage.getItem('userData');
    if(userData !==null){
      return JSON.parse(userData);
    }else{
      this.getPersons();
      return []
    }
  }
  saveData(data){
    localStorage.setItem('userData', JSON.stringify(data));
  }
  getPersons(){
    getApiData()
    .then(data=>{
      const cleanData=data.results.map((item, index)=>{return{...item, id:index}});
      this.setState({
        results: cleanData
      });
      this.saveData(cleanData);

    });
  }
  render() {
    const blackResults=this.filterThis();
    const {results}=this.state
    return (
      <div className="app">
      <h1 className="app__title">Buscador de Personas</h1>
    <Switch>
      <Route exact path="/" render={()=><Filter keyupAction={this.getQuery} />} />
      
      </Switch>

    <Switch>
      <Route exact path="/" render={()=><UserList blackResults={blackResults} />} />
      <Route path="/person/:id" render={props=><UserCard match={props.match} personResult={results} personId={1} />} />
    </Switch>
    </div>
    );
  }
}

export default App;
