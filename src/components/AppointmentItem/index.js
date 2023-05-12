import './index.css'

const AppointmentItem = props => {
  const {happy, todo} = props
  const {id, title, date, isliked} = happy
  const abc = isliked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const btn = () => {
    todo(id)
  }

  return (
    <div className="treet0">
      <div className="treet1">
        <h1>{title}</h1>
        <button type="button" className="button123" onClick={btn}>
          <img className="star" alt="avatar" src={abc} />
        </button>
      </div>

      <p className="dates">{date}</p>
    </div>
  )
}

export default AppointmentItem
