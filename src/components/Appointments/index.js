import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    userlist: [],
    title: '',
    date: '',
  }

  addbutton = event => {
    event.preventDefault()
    const {title, date} = this.state

    const formattedDate = date
      ? format(new Date(date), 'dd MMMM yyyy, EEEE')
      : ''
    const datalist1 = {
      id: uuidv4(),
      title,
      date: formattedDate,
      isliked: false,
    }

    this.setState(p => ({
      userlist: [...p.userlist, datalist1],
      date: '',
      title: '',
    }))
  }

  todo = id => {
    this.setState(p => ({
      userlist: p.userlist.map(each => {
        if (id === each.id) {
          return {...each, isliked: !each.isliked}
        }
        return each
      }),
    }))
  }

  userinput = event => {
    this.setState({title: event.target.value})
  }

  userdate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {date, userlist, title} = this.state

    return (
      <div className="greet1">
        <div className="greet2">
          <h1>Add appointment</h1>
          <div className="greet5">
            <form className="form" onSubmit={this.addbutton}>
              <label htmlFor="title" className="title">
                {' '}
                title
              </label>
              <input
                type="text"
                id="title"
                className="input1"
                value={title}
                onChange={this.userinput}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="input2"
                value={date}
                onChange={this.userdate}
              />
              <button type="submit" className="button">
                add{' '}
              </button>
            </form>
            <img
              className="image"
              alt="avarar"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr />
          <div className="greet7">
            <p>Appointment</p>
            <p className="stared">stared</p>
          </div>
          <div className="greet10">
            {userlist.map(each => (
              <AppointmentItem happy={each} todo={this.todo} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
