import React from 'react'

export default class  WhatWeDoContent extends React.Component{
  render(){
    return (
      <div>
        <article className="content__item">
          <h1 className="text-center text-heading1">What We Do</h1>
          <div className="">
            <div className="row">
              <div className="col-xs-12 col-md-3" style={{minHeight:200}}>
                <span className="text-center"> <i className="text-center fa fa-4x  fa-mobile do-icons"></i></span>
                <h3 className="text-blue">Mobile Applictions</h3>
                <i>
                  We Develop Native/Hybrid multi platform Modern Mobile Apps
                </i>
              </div>
              <div className="col-xs-12 col-md-3" style={{minHeight:200}}>
                <span className="text-center"><i className="fa fa-4x fa-laptop do-icons"></i></span>
                <h3>Web Applictions</h3>
                <i>
                  We Develop Real-time Highly Optimized Modern Web Apps using Cutting Edge Web Technologies
                </i>
              </div>
              <div className="col-xs-12 col-md-3" style={{minHeight:200}}>
                <span className="text-center"><i className="fa fa-4x fa-building do-icons"></i></span>
                <h3>Enterprise Applictions</h3>
                <i>
                  We Develop Enterprise level Softwares and Applications with the core of Scalability and Modularity
                </i>
              </div>
              <div className="col-xs-12 col-md-3" style={{minHeight:200}}>
                <span className="text-center"><i className="fa fa-2x fa-connectdevelop do-icons"></i></span>
                <h3>Internet Of Things</h3>
                <i>
                  We conduct Various Research and Development on Internet Of Things (IOT) and its applications.
                </i>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
