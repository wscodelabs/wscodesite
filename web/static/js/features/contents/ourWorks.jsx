import React from 'react'
import OurWorksDetail from './ourWorksDetail.jsx'
const ourWorks=[
  {
    logo:'http://txtile.io/img/logo.png',
    title:'Txtile',
    description:'Sms Survey System with realtime Analytics.',
    link:'http://txtile.io/'
  },
  {
    logo:'https://s3.postimg.io/uxk3za26b/Screen_Shot_2016_08_17_at_7_07_57_PM.png',
    title:'BounceBucket',
    description:'Convert more automotive visitors into leads',
    link:'http://app.bouncebucket.com/'
  },
  {
    logo:'https://s3.postimg.org/eh41khr0z/Screen_Shot_2016_08_17_at_7_09_48_PM.png',
    title:'CEFCARE',
    description:'Ethereum Smart Contract based Healthcare System',
    link:'http://cefcare.com/'
  },
  {
    logo:'https://s3.postimg.io/ia3midoz7/logo.png',
    title:'Survey Forever',
    description:'Create Your Own Survey Forms And Integrate into Several means with realtime analytics',
    link:null
  }
]
export default class OurWorks extends React.Component{
  render(){
    const Works=ourWorks.map((workData)=> <OurWorksDetail works={workData} key={workData.title} />)
    return (
      <div>
        <article className="content__item">
          <h4 className="text-center text-heading1"> Our Projects</h4>
          <div className="row">
            {Works}
          </div>
        </article>
      </div>
    )
  }

}
