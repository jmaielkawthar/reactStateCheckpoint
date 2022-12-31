import React, { Component } from 'react'
import './App.css';




export default class App extends Component {
  state={
    fullName:"kawthar jmaiel",
    bio:"IT computing",
    imgSrc: 'https://img.freepik.com/photos-gratuite/femme-romantique-au-gingembre-beret-francais-regardant-arriere-photo-exterieure-adorable-fille-brune-appreciant-journee-automne_197531-11736.jpg?w=2000',
    profession:"web developper",
    isShow:true
  }
  
  handleShow=()=>this.setState({isShow:!this.state.isShow})
  componentDidMount(){
    console.log("componentDidMount")

  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    console.log("render")
     setInterval(this.handleShow, 1000);

    return (
      <div>
        <button onClick={this.handleShow}>{this.state.isShow?"Hide":"Show"}</button>
      {
        this.state.isShow&&  <div>
        <h1>{this.state.fullName}</h1>
        <h4>{this.state.bio}</h4>
        <img src={this.state.imgSrc} id="img-change" alt={this.state.imgSrc}/>  
        <p>{this.state.profession}</p>
        </div>
      }
      </div>
    )
  }
}
