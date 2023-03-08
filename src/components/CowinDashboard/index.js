import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

// Write your code here
const apiStatus = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatusUpdates: apiStatus.initial,
    vaccinationByAgeData: [],
    vaccinationByGenderData: [],
    vaccinationByCoverageData: [],
  }

  componentDidMount() {
    this.getCoWinData()
  }

  getCoWinData = async () => {
    this.setState({apiStatusUpdates: apiStatus.progress})

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    console.log(data)
    // console.log(response)
    if (response.ok === true) {
      const newVaccinationByCoverageData = data.last_7_days_vaccination.map(
        each => ({
          dose1: each.dose_1,
          dose2: each.dose_2,
          vaccineDate: each.vaccine_date,
        }),
      )

      const newVaccinationByGenderData = data.vaccination_by_gender.map(
        each => ({
          count: each.count,
          gender: each.gender,
        }),
      )

      const newVaccinationByAgeData = data.vaccination_by_age.map(each => ({
        age: each.age,
        count: each.count,
      }))

      console.log(newVaccinationByGenderData)

      this.setState({
        apiStatusUpdates: apiStatus.success,
        vaccinationByCoverageData: newVaccinationByCoverageData,
        vaccinationByGenderData: newVaccinationByGenderData,
        vaccinationByAgeData: newVaccinationByAgeData,
      })
    } else {
      this.setState({apiStatusUpdates: apiStatus.failure})
    }
  }

  coWinDataView = () => {
    const {
      vaccinationByCoverageData,
      vaccinationByGenderData,
      vaccinationByAgeData,
    } = this.state
    return (
      <>
        <VaccinationCoverage
          vaccinationByCoverageData={vaccinationByCoverageData}
        />
        <VaccinationByGender
          vaccinationByGenderData={vaccinationByGenderData}
        />
        <VaccinationByAge vaccinationByAgeData={vaccinationByAgeData} />
      </>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFaliureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-size"
      />
      <h1 className="co-win-heading">Something went wrong</h1>
    </div>
  )

  renderView = () => {
    const {apiStatusUpdates} = this.state
    switch (apiStatusUpdates) {
      case apiStatus.success:
        return this.coWinDataView()
      case apiStatus.progress:
        return this.renderLoader()
      case apiStatus.failure:
        return this.renderFaliureView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-dashboard-bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo-size"
          />
          <h1 className="co-win-heading">Co-WIN</h1>
        </div>
        <h1 className="co-win-vaccination-para">CoWin Vaccination in India</h1>
        {this.renderView()}
      </div>
    )
  }
}

export default CowinDashboard
