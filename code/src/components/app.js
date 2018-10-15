import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    value: 'katt',
    vatRate: 25,
    incVat: 0,
    exVat: 0
  }

}

handleincVat = (event) => {
    this.setState ({
      value: event.target.value
    })
  }

handleExtVat = (event) => {
  this.setState ({
    selectedValue: event.target.value
  })

}


handlevatRate = (event) => {
  this.setState ({
    selectedValue: event.target.value
  })

}



  render() {
    return (
      <div className="App">
        <div className="radiocontainer">

      <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
      <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p>

          <div className="Momscontainer">
            <form>
              <label>
                  Inklusive moms (kr):
                    <input type="text"
                    name="name"
                    placeholder="0"
                    value={this.state.value}
                    onChange={this.handleIncVat}
                    />
              </label>

          <input type="submit" value="Submit" />
              <label>
                Exklusive moms (kr):
                  <input type="text"
                  name="name"
                  placeholder="0"
                  />
              </label>

          <input type="submit" value="Submit" />
            <label>
            Momssumma (kr):
                  <input type="text" name="name" placeholder="0"/>
              </label>
                  <input type="submit" value="Submit" />

        </form>


          </div>
        </div>
      </div>
    )
  }

}

export default App
