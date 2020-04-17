import moment from 'moment'
import flightsPartOne from '../epa-cor.json'
import flightsPartTwo from '../epa-mdz.json'

export const getAllFlights = () => ([...flightsPartOne.flights, ...flightsPartTwo.flights])

export const getFlights = (originCode, destinationCode) => {
  const flights = getAllFlights().filter((item) => (item.origin === originCode && item.destination === destinationCode))
  return flights
}


export const parseDate = (date) => {
  const newDate = moment(date)
  return newDate.format('ddd, MMM Do YYYY, h:mm:ss a')
}

export const getDuration = (oldDate, newDate) => {
  const now = moment(newDate)
  const date = moment(oldDate)
  const duration = moment.utc(moment.duration(now.diff(date)).asMilliseconds()).format('HH:mm')
  return duration
}
