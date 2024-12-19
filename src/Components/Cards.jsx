// import React,{Component} from "react";
// export default class Cards extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products :[],
//             count: {}
//         }
//     }

//     componentDidMount() {
//         let api = fetch("https://fakestoreapi.com/products")
//         api.then(res=>res.json()).then((products)=>{
//             let counts=products.reduce((init,prod)=>{
//                 init[prod.id]=0;
//                 return init;
//             },{});
//             this.setState({products,counts})
//         })
//         api.catch(err=>console.log(err))
//     }

//     increment = (id) => {
//         this.setState((prev)=>({ counts: {...prev.counts,[id]:prev.counts[id]+1}}))
//     }
//     reset = () => {
//         this.setState({ count: 0 })
//     }

//     render() {
//         return (
//             <>
//                 <div style={{backgroundColor:"#c5f2b7",paddingLeft:"80px"}}>
//                 <div className="cards" >
//                         {this.state.products.map(x=>{
//                                 return(
                                    
//                                         <div className="card-contents" key={x.id} >
//                                             <img src={x.image} className="card_img"  alt="img"></img>
//                                             <div id="card-text">
//                                                 <h3>{x.title}</h3>
//                                                 <p className="tooltip-text">{x.description}</p>
//                                                 <h5>Category: {x.category}</h5>
//                                                 <h2>Price: {x.price}</h2>
//                                                 <br />
//                                                 <div id="cart" >
//                                                     <button id="cartbutton"><i className="fa-solid fa-cart-shopping"></i>   Add to Cart</button>
//                                                     <button onClick={()=>this.increment(x.id)} className="b1">+</button>
//                                                     <h1 id="count">{this.state.counts[x.id]}</h1>
//                                                     <button onClick={(id) => { this.setState((prev)=>({ counts: {...prev.counts,[x.id]:prev.counts[x.id]-1}})) }}  className="b2">-</button>
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
                                   
//                                 )
//                             })}   
//                    </div>
//                 </div>                 
//             </>
//         )
//     }
// }


import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      counts: {},
      searchTerm: "",
      filteredProducts: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        let counts = products.reduce((init, prod) => {
          init[prod.id] = 0;
          return init;
        }, {});
        this.setState({ products, filteredProducts: products, counts });
      })
      .catch((err) => console.log(err));
  }

  handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredProducts = this.state.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ searchTerm, filteredProducts });
  };

  increment = (id) => {
    this.setState((prev) => ({
      counts: { ...prev.counts, [id]: prev.counts[id] + 1 },
    }));
  };

  decrement = (id) => {
    this.setState((prev) => ({
      counts: {
        ...prev.counts,
        [id]: Math.max(prev.counts[id] - 1, 0), 
      },
    }));
  };

  render() {
    return (
      <>
        <Navbar
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
        <div className="main-card">
          {this.state.filteredProducts.map((x) => (
            <div key={x.id} className="main">
              <div className="productimage">
                <img src={x.image} id="images" alt={x.title} />
                <div className="productdetails">
                  <h3>{x.title}</h3>
                  <p>{x.description}</p>
                  <h4>Category: {x.category}</h4>
                  <h4>
                    Price: ${x.price}
                    <br />
                    Rating: {x.rating.rate}⭐ ({x.rating.count})
                  </h4>
                  <div id="button">
                    <button><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                    <button onClick={() => this.increment(x.id)} className="b1">
                      +
                    </button>
                    <h1 id="count">{this.state.counts[x.id]}</h1>
                    <button
                      onClick={() => this.decrement(x.id)}
                      className="b2"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}