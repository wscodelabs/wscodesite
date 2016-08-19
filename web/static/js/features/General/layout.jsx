import React from 'react'
import SideBar from '../sidebar/Sidebar.jsx'
import GridContainer from '../grids/gridsContainer.jsx'
import Content from './content.jsx'
import AboutUsContent from '../contents/aboutUs.jsx'
export  default class AppLayout extends React.Component{
  constructor(props){
    super(props)
    this.state={
      contentData: <AboutUsContent />
    }
    this.changeContentData= this.changeContentData.bind(this)
  }
  changeContentData(content){
    this.setState({contentData:content})
  }

  render(){

      return (
        <div className="gridContainer">
          <button id="menu-toggle" className="menu-toggle"><span>Menu</span></button>
           <div id="theSidebar" className="sidebar">
              <SideBar />
           </div>
           <div id="theGrid" className="main">
              <GridContainer onChangeContentData={this.changeContentData} />
              <section className="content">
                <Content contentData={this.state.contentData} />
                <button className="close-button"><i className="fa fa-close"></i><span>Close</span></button>

              </section>
           </div>

        </div>
      )
  }
}