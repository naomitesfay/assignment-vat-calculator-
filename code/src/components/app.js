import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
  vatRate: 25,
  incVat: 0,
  exVat: 0
  }

}

handleRadioChange = (event) => {
  const vat = parseInt(event.target.value, 10)
  this.setState ({
  vatRate: vat,
  incVat: exVatToIncVat(vat, this.state.exVat)

    })
  }

handleIncVat = (event) => {
  const inc = parseInt(event.target.value, 10)
  this.setState ({
  incVat: inc,
  exVat: incVatToExtVat(this.state.vatRate, inc)

    })
  }

handleExVat = (event) => {
  const ex = parseInt(event.target.value, 10)
  this.setState ({
      exVat: ex,
      incVat: exVatToIncVat(this.state.vatRate, ex)
  })

}

  render() {
    return (
      <div className="App">
          <div className="Momscontainer">
            <form>
              <label htmlFor="25%">25%</label>
                  <input type="radio"
                  value="25"
                  checked={this.state.vatRate === 25}
                  onChange={this.handleRadioChange}
                  />


              <label htmlFor="12%">12%</label>
                  <input type="radio"
                    value="12"
                    checked={this.state.vatRate === 12}
                    onChange={this.handleRadioChange}
                    />


              <label htmlFor="6%">6%</label>
                  <input type="radio"
                    value="6"
                    checked={this.state.vatRate === 6}
                    onChange={this.handleRadioChange}
                    />


              <label>
                  Inklusive moms (kr):
                  <input type="number"
                  placeholder="0"
                  value={this.state.incVat}
                  onChange={this.handleIncVat}
                  />
              </label>


              <label>
                  Exklusive moms (kr):
                  <input type="number"
                  placeholder="0"
                  value={this.state.exVat}
                  onChange={this.handleExVat}
                  />
              </label>



              <label>
                  Momssumma (kr):
                  <input type="number"
                  name="name"
                  value= {this.state.incVat - this.state.exVat} />
              </label>

          </form>
        </div>
      </div>
    )
  }

}

export default App
