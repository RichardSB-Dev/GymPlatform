export const Funcionalities_Card = ({title, description, img}) => {
  return (
    <div className='Card_container'>
        <div className="img_container">
            <img src={img} alt="" className="img" />
        </div>
        <label className="title">{title}</label>
        <p className="description">{description}</p>
    </div>
  )
}
