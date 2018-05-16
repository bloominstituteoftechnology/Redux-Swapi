 import React, { Component } from 'react'; 
 import { connect } from 'react-redux'; 
 import { fetchingSwapi } from "../actions" 
 import logo from '../logo.svg'; 
 import '../styles/App.css'; 
 
 
 class App extends Component { 
   componentDidMount() { 
     this.props.fetchingSwapi(); 
   } 
 
 
   render() { 
     return ( 
      <div className="App"> 
         <h1>Star Wars Characters List</h1> 
         {this.props.fetching ? ( 
             <img src={logo} className="App-logo" alt="logo" /> 
         ) : ( 
           <ol> 
             {this.props.chars.map(char => { 
               return <li key={char.name}>{char.name}</li>; 
             })} 
           </ol> 
         )} 
       </div> 
     ); 
   } 
 } 
 
 
 const mapDispatchToProps = state => { 
   return { 
     chars: state.charsReducer.chars, 
     fetching: state.charsReducer.fetching 
   } 
 } 
 
export default connect(mapDispatchToProps, { fetchingSwapi })(App); 
