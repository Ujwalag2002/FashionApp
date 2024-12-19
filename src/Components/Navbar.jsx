// import React,{Component} from "react";
// export default class Navbar extends Component {
//     render() {
//         return(
//             <>
//                 <div id="navbar">
//                     <nav>    
//                     <ul>
//                         <i className="fa-solid fa-store">Fashion App</i>
//                         <i><input type="text" />
//                         <button>Search</button></i>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Products</li>
//                         <li>Category</li>
//                     </ul>
//                     </nav>
//                 </div>
//             </>
//         )
//     }
// }


import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <ul>
         <i className="fa-solid fa-store" id="logo">  Fashion App</i>
          <i>
            <input
              type="text"
              placeholder="Search Products"
              value={this.props.searchTerm}
              onChange={this.props.handleSearch}
            /><i className="fa-solid fa-magnifying-glass" id="glass"></i>
            {/* <button onClick={this.props.searchProducts}>Search</button> */}
          </i>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Category</li>
        </ul>
      </div>
    );
  }
}