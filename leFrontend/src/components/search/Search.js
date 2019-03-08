import React, { Component } from 'react';
import "../../css/Search.css"
import Modal from '../../Modal'
// const styles = {
//   width:"200px",
//   height:"200px",
//   "background-color":"red"
// }
export default class  Search extends Component {
  state = {
    isOpen:false
  }

  render(){
    return (
      <div className ={this.state.isOpen ?"something" :"search-container"}>
      <button onClick={(e) => this.setState({ isOpen: true })}>Open Dialog</button>
      <h1>{this.props.match.params.id.toUpperCase()} </h1>
      <Modal className={this.state.isOpen?"modal":""} isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
<h1  >TEST DRIVE</h1>
      </Modal>


    </div>
  )
  }
}
