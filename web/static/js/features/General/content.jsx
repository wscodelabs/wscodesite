import React from 'react'

export default class Content extends React.Component{
  render(){
    return (
    <div className="scroll-wrap">
      {this.props.contentData}
    </div>
  )
}
}
