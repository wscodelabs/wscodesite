import React from 'react'
import LikeBox from '../General/likeBox.jsx'
/*
*  <div className="row">
 <div className="col-xs-4 col-md-4">
 <a className="btnz share facebook" href="#"><i className="fa fa-facebook"></i></a>
 </div>
 <div className="col-xs-4 col-md-4">
 <a className="btnz share twitter" href="#"><i className="fa fa-twitter"></i></a>
 </div>
 </div>
* */
export default class Sidebar extends React.Component{
  render(){
    return (
   <div>
     <button className="close-button fa fa-fw fa-close"></button>
     <div className="row">
       <div className="col-xs-12 col-md-12">
         <img src="https://s3.postimg.org/5uc7d9iab/ws1.png" width="100%"/>
       </div>
     </div>
     <div className="row">
       <div className="col-xs-12 col-md-12">
         <span className="text-center"><i className="fa fa-map-marker text-center"></i> Kathmandu, Nepal</span>
       </div>
     </div>


     <div className="related">
       <LikeBox />
     </div>
   </div>
  )
  }
}
