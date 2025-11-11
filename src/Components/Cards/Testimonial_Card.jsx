export const Testimonial_Card = ({img, text, name, job}) => {
  return (
    <div className='Card_container'>
        <div className="img_container">
            <img src={img} alt="" />
        </div>
        <p className="oppinion">{text}</p>
        <span className="name">{name}</span>
        <span className="job">{job}</span>
    </div>
  )
}
