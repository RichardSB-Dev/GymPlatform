export const Plans_Card = ({title, price, caracteristics = []}) => {
  return (
    <div className="Card_container">
        <span className="title">{title}</span>
        <span className="price">{price}</span>
        <button className="btn">Contratar</button>
        <div className="plan-caracteristics_container">
            {caracteristics.Map((value) => (
                <div className="caracteristic_container">
                    <span>✔️</span>
                    <span>{value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
