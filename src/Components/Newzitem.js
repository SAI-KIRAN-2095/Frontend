import React, { Component } from "react";

export class Newzitem extends Component {
 
  render() {
    let {title, description, imageurl, newsurl}= this.props;
    return (
      <div  className="my-4">
                <div className="card" style={{width:"20rem"}}>
                        <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body text-bg-secondary ">
                            <h5 className="card-title">{title}... </h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target=" _blank" className="btn btn-sm btn-light">read more</a>
                             
                        </div>
                        <div class="card-body btn btn-dark ">
                          <a href="/" class="card-link btn btn-dark">Card link</a>
                          <a href="/" class="card-link btn btn-dark">Another link</a>
                        </div>
                </div>
                
      </div>
      
    );
  }
}

export default Newzitem;
