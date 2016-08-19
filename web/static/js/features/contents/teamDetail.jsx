import React from 'react'
export default class TeamDetail extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {userData} =this.props
    return (
        <div className="col-xs-12 col-md-3">
          <div className="text-center">
              <img className="img-circle" src={userData.image} width="100px" height="100px" />
              <h4 className="text-center">{userData.name}</h4>
              <h5 className="text-center">{userData.post}</h5>
          </div>
        </div>
    )
  }

}
