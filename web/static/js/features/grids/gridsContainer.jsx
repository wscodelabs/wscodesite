import React from 'react'
import Grid from './grids.jsx'
import AboutUsContent from '../contents/aboutUs.jsx'
import WhatWeDoContent from '../contents/whatWeDoContent.jsx'
import TeamContent from '../contents/teamContent.jsx'
import OurWorks from '../contents/ourWorks.jsx'
import Training from '../contents/trainingContent.jsx'
import AnimateGrid from '../../gridAnnimation'

//import AnimateGrid from '../../client/lib/js/gridAnnimation'
const grids =[
  {title:'Who we Are',component:<AboutUsContent />,index:0, icon:'fa fa-4x fa-info-circle'},
  {title:'What we Do',component:<WhatWeDoContent />,index:1, icon:'fa fa-4x fa-cubes'},
  {title: 'Meet the Team', component: <TeamContent />, index:2, icon:'fa fa-4x fa-users'},
  {title: 'Projects', component:<OurWorks />, index:3, icon:'fa fa-4x fa-desktop'},
  {title: 'Free Training', component:<Training />, index:4, icon:'fa fa-4x fa-book'}

]

export default class GridContainer extends React.Component{
  constructor(props){
    super(props)

    this.changeContent=this.changeContent.bind(this)
  }
  changeContent(content){
      this.props.onChangeContentData(content)
  }
  componentDidMount(){

    new AnimateGrid().load()
  }

  render(){

    let Grids = grids.map((grid)=>{
        return <Grid changeContent={this.changeContent} title={grid.title} component={grid.component} icon={grid.icon}  key={grid.index}/>
    })
   return (
     <section className="grid">
       <header className="top-bar">
         <div className="filter">
           <a href="https://github.com/wscodelabs" target="_blank"><i className="fa  fa-2x fa-github-square" style={{fontSize:'2.2em'}}></i></a>
         </div>
       </header>
       {Grids}
     </section>



   )
  }
}
