// import React,{Component} from "react";
// export default class About extends Component {
//     render() {
//         return(
//             <>
//                 <div id="background">
//                <div id="bg">
//                     <div id="bg-c1">
//                         <h1 >One Fashion Stop for anything.</h1>
//                         <button id="b1"> <i className="fa-solid fa-bag-shopping" id="bag"></i><b>Order Now</b></button><br /><br />
//                         <button id="b2"><b>Explore More</b></button>
//                     </div>
//                     <div>
//                         <img id="bg-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/16f5a569539491.5b85247817afa.jpg" alt="" />
//                     </div>
//                 </div>
//                </div>
//             </>
//         )
//     }
// }

import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div>
          <h1 className="about_head">One Fashion Stop for anything.</h1>
          <button id="b1"> <i className="fa-solid fa-bag-shopping" id="bag"></i><b>Order Now</b></button><br /><br />
          <button id="b2"><b>Explore More</b></button>
          </div>
          <div id="shop">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/16f5a569539491.5b85247817afa.jpg" alt="" />
          </div>
        </div>
      </>
    );
  }
}