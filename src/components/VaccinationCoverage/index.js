import {BarChart, Bar, XAxis, YAxis} from 'react'
import './index.css'

// Write your code here
const VaccinationCoverage = props => {
  const {vaccinationByCoverageData} = props

  const DataFormatted = number => {
    if (number > 1000) {
      return `${number / 1000}.toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vacci-coverage-bg-container">
      <h1 className="vacci-coverage-heading">Vaccination Coverage</h1>
      <BarChart width={1000} height={300} data={vaccinationByCoverageData}>
        <XAxis dataKey={vaccinationByCoverageData.vaccineDate} />
        <YAxis dataKey={DataFormatted} />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
