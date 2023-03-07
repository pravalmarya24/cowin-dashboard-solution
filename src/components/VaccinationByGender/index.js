import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

// Write your code here
const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props
  return (
    <div className="pie-chart-bg-container">
      <h1 className="vacci-by-gender">Vaccination by Gender</h1>
      <PieChart width="100%" height={300}>
        <Pie
          cx="70%"
          cy="40%"
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey={vaccinationByGenderData.gender}
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
