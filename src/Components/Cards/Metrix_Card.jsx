export const Metrix_Card = ({title, value}) => {
  return (
    <div className='Card_container'>
        <span className="Value">{value}</span>
        <p className="title">{title}</p>
    </div>
  )
}
