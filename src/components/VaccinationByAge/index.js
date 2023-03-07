import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

// Write your code here
const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props
  return (
    <div className="pie-chart-bg-container">
      <h1 className="vacci-by-gender">Vaccination by age</h1>
      <PieChart width="100%" height={300}>
        <Pie
          cx="70%"
          cy="40%"
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey={vaccinationByAgeData.age}
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </Pie>
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
