import React from 'react'

export default class OurWorksDetail extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const {works} =this.props
    const link= works.link? <div className="text-center"><a className="btn" href={works.link} target="_blank"> Visit</a> </div> : ''
    return (
      <div className="col-md-6">
        <div className="well well-lg box-div box" style={{padding:'5%',minHeight:250, marginTop:5}}>
          <img src={works.logo} width="90%"/>
          <p className="text-project-desc">
            {works.description}
          </p>
        </div>

      </div>
    )
  }
}
