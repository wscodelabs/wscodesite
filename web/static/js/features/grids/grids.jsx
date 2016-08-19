import React from 'react'

export default class Grid extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <a className="grid__item" href="#" onClick={(evt)=>{this.props.changeContent(this.props.component)}}>
        <h2 className="title title--preview text-grid">{this.props.title}</h2>
        <div className="loader"></div>
        <div className="meta meta--preview">
          <span className="meta__avatar text-center">
            <i className={this.props.icon}></i>
          </span>
        </div>
      </a>
    )
  }
}
