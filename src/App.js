import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import { Grid,  Dialog, DialogContent, DialogTitle, FormControlLabel, Checkbox, FormLabel, FormGroup, Button, Typography, DialogActions } from '@material-ui/core';
import "react-input-range/lib/css/index.css"
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      civicsTitle:'Civics Exam',
      civicsTestOpen: false,
      page:1,
      currentPage:0,
    }
  }

handleOpen = () => {
  this.setState({
    civicsTestOpen:true
  })
};

handleClose = () => {
  this.setState({
    civicsTestOpen:false
  })
};

onNextClick() {
    this.setState({
      currentPage: this.state.currentPage + 1,
      page: this.state.page + 1
    })
}

renderQuestions() {

  const questions = [
    {id: 1, title:"Who lived in America before the Europeans arrived?", answer1:'Chinese', answer2:'Russians', answer3:'Pacific Islanders', answer4:'American Indians'},
    {id: 2, title:"Who was the first President of the United States?", answer1:'John Hancock', answer2:'James Madison', answer3:'Benjamin Franklin', answer4:'George Washington'},
    {id: 3, title:"What was one important thing that Abraham Lincoln did?", answer1:'Led the U.S. during the Civil War', answer2:'Led the U.S. during the War of 1812', answer3:'Led the U.S. during the American Revolution', answer4:'Led the U.S. during the Mexican-American War'},
    {id: 4, title:"When is Independence Day celebrated?", answer1:'April 19th', answer2:'July 4th', answer3:'September 17th', answer4:'November 11th'},
    {id: 5, title:'Who is the "Father of Our Country?"', answer1:'Abraham Lincoln', answer2:'Thomas Jefferson', answer3:'Benjamin Franklin', answer4:'George Washington'},
    {id: 6, title:" What Ocean is on the East Coast of the United States?", answer1:'Arctic Ocean', answer2:'Indian Ocean', answer3:'Pacific Ocean', answer4:'Atlantic Ocean'},
    {id: 7, title:"What did Martin Luther King, Jr. do?", answer1:'Fought for civil rights', answer2:'Became the first black U.S. Senator', answer3:'established the Harvard Law School', answer4:'Ran for President of the United States'},
    {id: 8, title:"Which of the following is one of the two longest rivers in the United States?", answer1:'Ohio River', answer2:'Potomac River', answer3:'Colorado', answer4:'Mississippi River'},
    {id: 9, title:"What do Americans show loyalty to when saying the Pledge of Allegiance?", answer1:'The state where you live', answer2:'The United States of America', answer3:'The Declaration of Independence', answer4:'The President of the United States of America'},
    {id: 10, title:"Why did the colonists fight the British?", answer1:'Because of high taxes', answer2:'Because the British invaded France', answer3:'Because the colonists wanted a new king', answer4:'Because the colonists wanted religious freedom'},
  ]

  return (

    <div>
      <Grid container spacing={12} style={{marginTop:10}}>

            <Grid container style={{marginBottom:10, padding:20}}>
            {
              questions.map((item, key) => {
                return (
                  <Grid key={key} item xs={6} style={{marginBottom:10, padding:20}}>
                    <FormLabel component="legend">{item.id + ". " + item.title}</FormLabel>
                    <FormGroup>
                      <FormControlLabel key={key} 
                      // onClick={() => this.onChoiceSelect(item, 1)}
                          control={
                              <Checkbox color='default' />
                          }
                          label={item.answer1}
                      />
                     <FormControlLabel key={key} 
                      // onClick={() => this.onChoiceSelect(item, 1)}
                          control={
                              <Checkbox color='default' />
                          }
                          label={item.answer2}
                      />
                     <FormControlLabel key={key} 
                      // onClick={() => this.onChoiceSelect(item, 1)}
                          control={
                              <Checkbox color='default' />
                          }
                          label={item.answer3}
                      />
                     <FormControlLabel key={key} 
                      // onClick={() => this.onChoiceSelect(item, 1)}
                          control={
                              <Checkbox color='default' />
                          }
                          label={item.answer4}
                      />
                      
                      </FormGroup>
                  </Grid>
                )
              })
            }
            </Grid>

          </Grid>
    </div>
  )
}
  

render() {
  return  (
    <div className="App">
      <header className="App-header">
        <p>
          {this.state.civicsTitle}
        </p>

        <p style={{fontSize:20}}>
          The following exam in composed of 100 multiple choice questions. <br></br>You must get a 60% or higher to pass the exam and graduate, but you have as many tries as you need. 
        </p>

        <div style={{width:'60%', margin:20}}>

            <button style={{marginTop:15, paddingRight:20, paddingLeft:20, fontWeight:'bold'}} onClick={this.handleOpen}>
              Begin
            </button>

        </div>
      
      </header>

   <Dialog 
      onClose={this.handleClose} 
      aria-labelledby="simple-dialog-title"
      open={this.state.civicsTestOpen}
      maxWidth="md"
      fullWidth={true}
       >
      <DialogTitle id="simple-dialog-title">Civics Exam</DialogTitle>
      <DialogContent>
        {this.renderQuestions()}
      </DialogContent>

      <DialogActions>
        <Grid item xs={8} style={{textAlign:'center'}}>
                  <Typography style={{fontSize:16, marginTop:10, fontWeight:'bold'}}>{this.state.page} / 10</Typography>
        </Grid>
        <Grid item xs={2} style={{textAlign:'right'}}>
          <Button onClick={() => this.onNextClick()} style={{backgroundColor:'#FFF', marginRight:10}}>
              <Typography style={{color:'#000', fontSize:14, fontWeight:'bold'}}>Next</Typography>
          </Button>
        </Grid>
      </DialogActions>

    </Dialog>

    </div>
    )
  } 
}

export default App;
