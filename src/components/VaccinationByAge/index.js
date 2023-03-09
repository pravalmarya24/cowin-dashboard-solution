import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

// Write your code here
const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props
  return (
    <div className="pie-chart-bg-container">
      <h1 className="vacci-by-gender">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAgeData}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </Pie>
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
