import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import { Grid, Typography, Card, CardContent, Button,
  IconButton, Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions, TextField } from '@material-ui/core';
import "react-input-range/lib/css/index.css"
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      collegeName:'University of Tennessee - Knoxville',
      isLoading: true,
      collegeTuitionPriceInState:12724,
      collegeTuitionPriceOutOfState:31144,
      GPAValue: 0.00,
      ScholarshipValue: 0,
      ACTValue: 0,
      yourCostOpen: false,
      yourCostValue:"0"
    }
  }

 calculateTuition(){
  if(this.state.ACTValue > 29 && this.state.GPAValue > 3.8){
    this.setState({
      collegeTuitionPriceInState:9724
    })
  } else {
    this.setState({
      collegeTuitionPriceInState:12724
    })
  }
 }

handleOpen = () => {
  this.setState({
    yourCostOpen:true
  })
};

handleACT = (value) => {
  this.setState({
    ACTValue:value
  })
  this.calculateTuition()
}

handleClose = () => {
  this.setState({
    yourCostOpen:false
  })
};
  

render() {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

const collegePriceInState = this.state.collegeTuitionPriceInState
const collegePriceInStateFormated = formatter.format(collegePriceInState)

const collegePriceOutOfState = this.state.collegeTuitionPriceOutOfState
const collegePriceOutOfStateFormated = formatter.format(collegePriceOutOfState)

const collegeMaxScholarship = formatter.format(75000)

  return  (
    <div className="App">
      <header className="App-header">
        <p>
          College Calculator
        </p>

        <p style={{fontSize:30}}>
          {this.state.collegeName} <br></br> In-state Tuition: {collegePriceInStateFormated}
        </p>
        {/* <p style={{fontSize:30}}>
          Out-of-state Tuition: {collegePriceOutOfStateFormated}
        </p> */}


        <div style={{width:'60%', margin:20}}>

            
            <label className='labels'>Your GPA</label> 
            <div style={{marginTop:20}}>
              <InputRange
                step={.01}
                maxValue={4.00}
                minValue={0.00}
                formatLabel={GPAValue => GPAValue.toFixed(2)}
                value={this.state.GPAValue}
                onChange={value => this.setState({ GPAValue:value })}
                // onChangeComplete={GPAValue => console.log("GPA: " + GPAValue)} 
                />
            </div>

            <br></br>

            <label className='labels'>
              Your ACT
            </label>
            <div style={{marginTop:20}}>
              <InputRange
                step={1}
                maxValue={36}
                minValue={0}
                formatLabel={ACTValue => ACTValue}
                value={this.state.ACTValue}
                onChange={value => this.handleACT(value)}
                // onChangeComplete={ACTValue => console.log("ACT: " + ACTValue)}
                />
            </div>

            <br></br>

            <label className='labels'>
              Any additional scholorships, grants, or savings
            </label>
            <div style={{marginTop:20}}>
              <InputRange
                step={1}
                maxValue={75000}
                minValue={0}
                formatLabel={ScholarshipValue => formatter.format(ScholarshipValue)}
                value={this.state.ScholarshipValue}
                onChange={value => this.setState({ ScholarshipValue:value })}
                // onChangeComplete={ScholarshipValue => console.log("Scholarship: " + ScholarshipValue)}
                />
            </div>

            <button style={{marginTop:15}} onClick={this.handleOpen}>
              Calculate
            </button>

        </div>
      
      </header>

   <Dialog 
      onClose={this.handleClose} 
      aria-labelledby="simple-dialog-title"
      open={this.state.yourCostOpen}
      maxWidth='sm'
      fullWidth={true}
       >
      <DialogTitle id="simple-dialog-title">Your college cost for {this.state.collegeName}:</DialogTitle>
      <DialogContent>
        {this.state.GPAValue}
        <br></br>
        {this.state.ACTValue}
        <br></br>
        {this.state.ScholarshipValue}
      </DialogContent>
    </Dialog>

    </div>
    )
  } 
}

export default App;
