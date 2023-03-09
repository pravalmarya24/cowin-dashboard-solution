import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

// Write your code here
const VaccinationCoverage = props => {
  const {vaccinationByCoverageData} = props

  const dataFormatted = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vacci-coverage-bg-container">
      <h1 className="vacci-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        width={700}
        height={400}
        data={vaccinationByCoverageData}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          dataKey={dataFormatted}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
