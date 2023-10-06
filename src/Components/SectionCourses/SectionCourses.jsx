import Card from "../Card/Card"

import './SectionCourses.css'
const SectionCourses = (props) => {
  return (
    <div className="wapper section">

      <div className="container ">

      <div className="heading">

      <h1>{props.title}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ducimus illum corporis magni voluptas, ex eum dolorum quia officia! Deleniti quia ut</p>
      
      </div>

      <div className="row">

      {
        props.data.map((card)=>(
            <Card key={card.id} title={card.title} image={card.image} />
        ))
      }
      
      </div>
      

    </div>

    </div>
  )
}

export default SectionCourses
