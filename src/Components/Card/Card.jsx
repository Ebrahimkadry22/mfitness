import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-body'>
      <img src={`../../../public/image/${props.image}`} />
      <div className='card-heading'>
      <h5>{props.title}</h5>
      </div>
      <div className='card-dis'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa</p>
      </div>
      </div>
    </div>
  )
}

export default Card
