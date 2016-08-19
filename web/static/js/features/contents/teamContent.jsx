import React from 'react'
import TeamDetail from './teamDetail.jsx'
const teams=[
  {name: 'Piyush Thapa', post: 'Co-founder', image:'https://avatars3.githubusercontent.com/u/6322399?v=3&u=4df45deed1034b8f63f48463587215b953245e9c&s=140'},
  {name: 'Khem Poudel', post: 'Sr.Developer & Data architect', image:'https://avatars3.githubusercontent.com/u/12524250?v=3&s=460'},
  {name: 'John Sunam', post: 'core Javascript Developer', image:'https://avatars3.githubusercontent.com/u/10027298?v=3&s=400'},
  {name: 'Aayush Thapa', post: 'Head in UX/UI', image:'https://s4.postimg.io/gl7rx0qgt/img_aayush.jpg'},
  {name: 'Enrique Delgado', post: 'CTO, CEF Foundation US', image:'https://avatars3.githubusercontent.com/u/362412?v=3&s=400'},
]
export default class TeamContent extends React.Component{
  render(){
    const Teams=teams.map((teamData)=> <TeamDetail userData={teamData} key={teamData.name} />)
  return (
    <div>
      <article className="content__item">
         <h2 className="text-center text-heading1"> Core Members</h2>
        <div className="row">
          {Teams}
        </div>
      </article>
    </div>
  )
  }

}
