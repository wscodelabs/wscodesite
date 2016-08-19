import React from 'react'

export default class AboutUsContent extends React.Component{
render(){
  return (
    <div>
      <article className="content__item">
        <div className="">
          <div className="row"  style={{paddingBottom:"30px"}}>
              <div className=" hidden-xs col col-md-4">
                  <img src="http://www.lawandtrends.com/files/post/imagencabecera/42972/creatividad_innovacion.jpg" alt=""  width="100%" />
              </div>
              <div className="col col-xs-12 col-md-8">
                <h3 className="text-heading">Who we are</h3>
                 <span className="small-content"> We are group of innovative minds who love to use the cutting edge of next generation technology.</span>
                 <p>
                   <p>
                     We build High quality realtime application. If you are planning to create those next generation application you are in the right place
                   </p>
                 </p>
              </div>
          </div>
          <div className="row" style={{paddingTop:"30px"}}>
            <div className="col-xs-12 col-md-4">
              <div className="well box-div box">
                <div style={{padding:"20px"}}>
                  <h3 className="text-heading">Mission & Vision</h3>
                  <p className="text-content">
                    Our main aim is to deliver highly quality product and to maintain long lasting relationship with our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="well box-div box">
                <div style={{padding:"20px"}}>
                  <h3 className="text-heading">Quality System</h3>
                  <p className="text-content">
                  We adapt and use the latest platform & technology for better product. The technology plays vital role for
                  the product scalability and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="well box-div box">
                <div style={{padding:"20px"}}>
                  <h3 className="text-heading">Grow With Us</h3>
                  <p className="text-content">
                  We conduct several devcamp of new Technology for free to help society grow with us in technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

}
