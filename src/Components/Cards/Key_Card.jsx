export const Key_Card = ({icon, title, description}) => {
  return (
    <div className="Card_container">
        <span className="icon">{icon}</span>
        <span className="title">{title}</span>
        <p className="description">{description}</p>
    </div>
  )
}
