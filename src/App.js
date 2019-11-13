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

onPreviousClick(){
  this.setState({
    currentPage: this.state.currentPage - 1,
    page: this.state.page - 1
  })
}

renderQuestions() {

  const quiz = [{pageNumber:1, questions:[
                                          {id: 1, title:"Who lived in America before the Europeans arrived?", answer1:'Chinese', answer2:'Russians', answer3:'Pacific Islanders', answer4:'American Indians'},
                                          {id: 2, title:"Who was the first President of the United States?", answer1:'John Hancock', answer2:'James Madison', answer3:'Benjamin Franklin', answer4:'George Washington'},
                                          {id: 3, title:"What was one important thing that Abraham Lincoln did?", answer1:'Led the U.S. during the Civil War', answer2:'Led the U.S. during the War of 1812', answer3:'Led the U.S. during the American Revolution', answer4:'Led the U.S. during the Mexican-American War'},
                                          {id: 4, title:"When is Independence Day celebrated?", answer1:'April 19th', answer2:'July 4th', answer3:'September 17th', answer4:'November 11th'},
                                          {id: 5, title:'Who is the "Father of Our Country?"', answer1:'Abraham Lincoln', answer2:'Thomas Jefferson', answer3:'Benjamin Franklin', answer4:'George Washington'},
                                          {id: 6, title:"What Ocean is on the East Coast of the United States?", answer1:'Arctic Ocean', answer2:'Indian Ocean', answer3:'Pacific Ocean', answer4:'Atlantic Ocean'},
                                          {id: 7, title:"What did Martin Luther King, Jr. do?", answer1:'Fought for civil rights', answer2:'Became the first black U.S. Senator', answer3:'established the Harvard Law School', answer4:'Ran for President of the United States'},
                                          {id: 8, title:"Which of the following is one of the two longest rivers in the United States?", answer1:'Ohio River', answer2:'Potomac River', answer3:'Colorado', answer4:'Mississippi River'},
                                          {id: 9, title:"What do Americans show loyalty to when saying the Pledge of Allegiance?", answer1:'The state where you live', answer2:'The United States of America', answer3:'The Declaration of Independence', answer4:'The President of the United States of America'},
                                          {id: 10, title:"Why did the colonists fight the British?", answer1:'Because of high taxes', answer2:'Because the British invaded France', answer3:'Because the colonists wanted a new king', answer4:'Because the colonists wanted religious freedom'},
                                        ]},
                {pageNumber:2, questions:[
                                          {id: 11, title:"Who wrote the Declaration of Independence?", answer1:'James Madison', answer2:'Abraham Lincoln', answer3:'Thomas Jefferson', answer4:'George Washington'},
                                          {id: 12, title:"Which of the following is an American Indian tribe?", answer1:'Huli', answer2:'Kikuyu', answer3:'Maori', answer4:'Navajo'},
                                          {id: 13, title:"Why does the American flag have 13 stripes?", answer1:'They represent the 13 original colonies.', answer2:'They represent the 13 signatures on the U.S. Constitution.', answer3:'They represent the 13 military heroes of the Revolutionary War.', answer4:'They represent the 13 members of the Second Continental Congress.'},
                                          {id: 14, title:"Why does the American flag have 50 stars?", answer1:'One star for each state.', answer2:'One star for each president.', answer3:'One star for each original colony.', answer4:'One star for each constitutional amendment.'},
                                          {id: 15, title:'What is the name of the national anthem?', answer1:'God Bless the U.S.A.', answer2:'America the Beautiful', answer3:'My Country Tis of Thee', answer4:' The Star-Spangled Banner'},
                                          {id: 16, title:"Which of the following are national U.S. holidays?", answer1:'Columbus Day and Flag Day', answer2:'Labor Day and Veterans Day ', answer3:"Memorial Day and Mother's Day", answer4:"Valentine's Day and Thanksgiving Day"},
                                          {id: 17, title:"What is one reason colonists came to America?", answer1:'Education', answer2:'Better health', answer3:'Elect a new king', answer4:'Religious freedom'},
                                          {id: 18, title:"What was the name of the U.S. war between the North and the South?", answer1:'Civil War', answer2:'World War II', answer3:'War of 1812', answer4:'Revolutionary War'},
                                          {id: 19, title:"Which of the following reasons led to the Civil War?", answer1:'Taxes', answer2:'Slavery', answer3:'Oil rights', answer4:'Religious freedom'},
                                          {id: 20, title:"What did Susan B. Anthony do?", answer1:'Founded the Red Cross', answer2:"Fought for women's rights", answer3:'Made the first American flag', answer4:'Established a college for women'},
                                        ]},

              {pageNumber:3, questions:[
                                        {id: 21, title:"Where is the Statue of Liberty located?", answer1:'Boston, MA', answer2:'New York, NY', answer3:'Washington, DC', answer4:'San Francisco, CA'},
                                        {id: 22, title:"What is the deadline for filing federal income tax forms?", answer1:'April 15th', answer2:'June 30th', answer3:'September 15th', answer4:'December 31th'},
                                        {id: 23, title:"Who did the United States fight in World War II?", answer1:'Japan, Germany, and Italy', answer2:'Japan, Germany, and France', answer3:'Russia, China, and Japan', answer4:'Russia, France, and Great Britain'},
                                        {id: 24, title:"Which of the following wars was fought by the United States in the 1800s?", answer1:'Korean War', answer2:'World War I', answer3:'Spanish-American War', answer4:'French and Indian War'},
                                        {id: 25, title:'Who is in charge of the executive branch?', answer1:'The President', answer2:'The Chief Justice', answer3:'The Majority Leader', answer4:' The Speaker of the House'},
                                        {id: 26, title:"What does the judicial branch do?", answer1:'Amends the Constitution and overturns laws', answer2:'Decides if a law goes against the Constitution', answer3:"Stipulates the number of Supreme Court Justices", answer4:"Provides legal advice to the President and his staff"},
                                        {id: 27, title:"Which of the following includes two ways that Americans can participate in their democracy?", answer1:'Vote and run for office', answer2:'Read a newspaper and volunteer at the local food bank', answer3:"Get a driver's license and purchase real estate property", answer4:'Go to college and start a career'},
                                        {id: 28, title:"What group of people was taken to America and sold as slaves?", answer1:'Africans', answer2:'Canadians', answer3:'Spaniards', answer4:'Italians'},
                                        {id: 29, title:"When was the Declaration of Independence adopted?", answer1:'July 4th, 1770', answer2:'July 4th, 1776', answer3:'July 4th, 1870', answer4:'July 4th, 1876'},
                                        {id: 30, title:"Which of the following includes three of the 13 original states?", answer1:'Georgia, Indiana, New York', answer2:"Maine, Ohio, and West Virginia", answer3:'Vermont, Florida, and Pennsylvania', answer4:'Maryland, Virginia, and North Carolina'},
                                      ]},

              {pageNumber:4, questions:[
                                        {id: 31, title:"What happened at the Constitutional Convention?", answer1:'The Constitution was written.', answer2:'The Constitution was ratified.', answer3:'The Magna Carta was signed.', answer4:'The Declaration of Independence was written.'},
                                        {id: 32, title:"When was the U.S. Constitution written?", answer1:'1776', answer2:'1787', answer3:'1812', answer4:'1865'},
                                        {id: 33, title:"What is one thing Benjamin Franklin is famous for?", answer1:'Decorated war general', answer2:'Inventor of the telegraph', answer3:'Fourth president of the United States', answer4:'Oldest member of the Constitutional Convention'},
                                        {id: 34, title:"What territory did the United States buy from France in 1803?", answer1:'Alaska', answer2:'Florida', answer3:'Hawaii', answer4:'Louisiana'},
                                        {id: 35, title:'What is one promise made when becoming a citizen of the United States of America?', answer1:'To register to vote', answer2:'To get an education', answer3:'To join a political party', answer4:'To defend the U.S. Constitution'},
                                        {id: 36, title:"When must all men register for the Selective Service?", answer1:'At birth', answer2:'At age 16', answer3:"At age 18", answer4:"Men no longer have to register"},
                                        {id: 37, title:"What did the Emancipation Proclamation do?", answer1:'Called for an end to the Civil War', answer2:'Called for the creation of state borders', answer3:"Called for an end to Southern Secession", answer4:'Called for the freeing of slaves in the Confederate States'},
                                        {id: 38, title:"Who was the President during World War I?", answer1:'Warren Harding', answer2:'Woodrow Wilson', answer3:'Franklin Roosevelt', answer4:'Theodore Roosevelt'},
                                        {id: 39, title:"What stops one branch of government from becoming too powerful?", answer1:'The military', answer2:'The Bill of Rights', answer3:'Checks and balances', answer4:'The Federal Reserve'},
                                        {id: 40, title:"What is one responsibility that only applies to United States citizens?", answer1:'Pay taxes', answer2:"Obey the laws", answer3:'Serve on a jury', answer4:'Attend private school'},
                                      ]},

              {pageNumber:5, questions:[
                                        {id: 41, title:"Which of the following includes two rights of everyone living in the United States?", answer1:'Freedom to work and freedom of speech', answer2:'Freedom to work and freedom to make laws', answer3:'Freedom of speech and freedom of assembly', answer4:'Freedom to make laws and freedom of assembly'},
                                        {id: 42, title:"Which war was fought by the United States in the 1900s?", answer1:'Civil War', answer2:'World War I', answer3:'Revolutionary War', answer4:'Mexican-American War'},
                                        {id: 43, title:"What is the supreme law of the land?", answer1:'The U.S. Constitution', answer2:'The Articles of Confederation', answer3:'The Emancipation Proclamation', answer4:'The Declaration of Independence'},
                                        {id: 44, title:"What does the Constitution do?", answer1:'Sets up and defines the government', answer2:'Draws boundaries of congressional districts', answer3:'Sets codes of conduct for obeying local and federal laws', answer4:'Determines whether citizens are prosecuted to the full extent of the law'},
                                        {id: 45, title:'The idea of self-government is in the first three words of the Constitution. What are these words?', answer1:'We the United', answer2:'We the People', answer3:'We the Citizens', answer4:'We the Americans'},
                                        {id: 46, title:"What is an amendment?", answer1:'A change to the Constitution', answer2:'A preamble to the Constitution', answer3:"An explanation of the Bill of Rights", answer4:"An introduction to the Bill of Rights"},
                                        {id: 47, title:"What do we call the first ten amendments to the Constitution?", answer1:'The Preamble', answer2:'The Bill of Rights', answer3:"The Articles of the Confederation", answer4:'The Declaration of Independence'},
                                        {id: 48, title:"What did the Declaration of Independence do?", answer1:'Declared freedom for the slaves', answer2:'Declared equal rights for women', answer3:'Declared freedom from Great Britain', answer4:'Declared an end to the war with Great Britain'},
                                        {id: 49, title:"Which of the following includes two rights stated in the Declaration of Independence?", answer1:'The military', answer2:'The Bill of Rights', answer3:'Checks and balances', answer4:'The Federal Reserve'},
                                        {id: 50, title:"What is one responsibility that only applies to United States citizens?", answer1:'Life and liberty', answer2:"Free speech and justice", answer3:'Bear arms and pay taxes', answer4:'Vote and pursuit of happiness'},
                                      ]},

            {pageNumber:6, questions:[
                                        {id: 51, title:"Who vetoes bills?", answer1:'The President', answer2:'The Majority Leader', answer3:'The President Pro Tempore', answer4:'The Speaker of the House of Representatives'},
                                        {id: 52, title:'What is the "rule of law"?', answer1:'Everyone must follow the law', answer2:'Laws remain the same in every state.', answer3:'Government leaders are above the laws.', answer4:'Laws only apply to United States citizens.'},
                                        {id: 53, title:"What is one branch of the federal government?", answer1:'Governor', answer2:'Judicial', answer3:'Military', answer4:'Treasury'},
                                        {id: 54, title:"Who makes federal laws?", answer1:'The Congress', answer2:'The Supreme Court', answer3:'The Attorney General', answer4:'The Justice Department'},
                                        {id: 55, title:'If the President can no longer serve, who becomes President?', answer1:'The Vice President', answer2:'The Secretary of State', answer3:'The President Pro Tempore', answer4:'The Speaker of the House of Representatives'},
                                        {id: 56, title:"Who signs bills to become laws?", answer1:'The President', answer2:'The Vice President', answer3:"The Secretary of State", answer4:"The Chief Justice of the Supreme Court"},
                                        {id: 57, title:"What is the highest court in the United States?", answer1:'The District Court', answer2:'The Superior Court', answer3:"The Supreme Court", answer4:'The Municipal Court'},
                                        {id: 58, title:"If both the President and the Vice President can no longer serve, who becomes President?", answer1:'The Secretary of State', answer2:'The U.S. Attorney General', answer3:'The President Pro Tempore', answer4:'The Speaker of the House of Representatives'},
                                        {id: 59, title:"Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", answer1:'To make treaties', answer2:"To issue driver's licenses", answer3:'To provide public education', answer4:'To establish police departments'},
                                        {id: 60, title:"Who is the Commander in Chief of the military?", answer1:'The President', answer2:"The Secretary of Defense", answer3:'The U.S. Attorney General', answer4:'The Chairman of the Joint Chiefs of Staff'},
                                      ]},

            {pageNumber:7, questions:[
                                        {id: 61, title:"What is the capital of Kentucky?", answer1:'Louisville', answer2:'Bowling Green', answer3:'Lexington', answer4:'Frankfort'},
                                        {id: 62, title:'What is one right that only applies to United States citizens?', answer1:'Speak freely', answer2:'Own a weapon', answer3:'Practice a religion', answer4:'Run for federal office'},
                                        {id: 63, title:"How old do citizens have to be to vote for President?", answer1:'Starting at 16 years of age and older', answer2:'Starting at 18 years of age and older', answer3:'Starting at 21 years of age and older', answer4:'Starting at 35 years of age and older'},
                                        {id: 64, title:"Under our Constitution, some powers belong to the states. What is one power of the states?", answer1:'Print money', answer2:'Create an army', answer3:'Issue passports', answer4:'Provide public education'},
                                        {id: 65, title:'Who is one of the authors of the Federalist Papers?', answer1:'John Adams', answer2:'James Madison', answer3:'Thomas Jefferson', answer4:'George Washington'},
                                        {id: 66, title:"Who was President during both the Great Depression and World War II?", answer1:'Harry Truman', answer2:'Calvin Coolidge', answer3:"Woodrow Wilson", answer4:"Franklin Roosevelt"},
                                        {id: 67, title:"Before he was President, Eisenhower was a general. What war was he in?", answer1:'Civil War', answer2:'Korean War', answer3:"World War II", answer4:'Spanish-American War'},
                                        {id: 68, title:"During the Cold War, what was the main concern of the United States?", answer1:'Colonialism', answer2:'Communism', answer3:'Imperialism', answer4:'Sectionalism'},
                                        {id: 69, title:"What movement tried to end racial discrimination?", answer1:'Civil rights movement', answer2:"Progressive movement", answer3:'Temperance movement', answer4:'Women’s suffrage movement'},
                                        {id: 70, title:"What historical event happened on September 11, 2001 in the United States?", answer1:'The stock market crashed.', answer2:"Columbia space shuttled exploded.", answer3:'Terrorists attacked the United States.', answer4:'Hurricane Katrina struck New Orleans.'},
                                      ]},

            {pageNumber:8, questions:[
                                        {id: 71, title:"What Ocean is on the West Coast of the United States?", answer1:'Arctic Ocean', answer2:'Indian Ocean', answer3:'Pacific Ocean', answer4:'Atlantic Ocean'},
                                        {id: 72, title:'Which of the following is a U.S. territory?', answer1:'Cuba', answer2:'Guam', answer3:'Hawaii', answer4:'Panama'},
                                        {id: 73, title:"Which U.S. state borders Canada?", answer1:'Alaska', answer2:'Connecticut', answer3:'Oregon', answer4:'Wisconsin'},
                                        {id: 74, title:"Which U.S. state borders Mexico?", answer1:'Texas', answer2:'Arkansas', answer3:'Louisiana', answer4:'Alabama'},
                                        {id: 75, title:'What is the capital of the United States?', answer1:'Boston, MA', answer2:'New York, NY', answer3:'Philadelphia, PA', answer4:'Washington, DC'},
                                        {id: 76, title:"What is one right or freedom from the First Amendment?", answer1:'To vote', answer2:'Jury trial', answer3:"Free speech", answer4:"To bear arms"},
                                        {id: 77, title:"What is freedom of religion?", answer1:'Religious leaders are exempt from the law.', answer2:'States may choose a religion for the people.', answer3:"Religious institutions do not have to pay taxes.", answer4:'People may or may not choose to practice a religion.'},
                                        {id: 78, title:"What is the economic system in the United States?", answer1:'Barter or trade economy', answer2:'Socialist or mutual economy', answer3:'Capitalist or market economy', answer4:'Communist or collective economy'},
                                        {id: 79, title:"What are the two parts of the U.S. Congress?", answer1:'The President and the Cabinet', answer2:"The Supreme Court and the Superior Court", answer3:'The U.S. Treasury and the State Department', answer4:'The Senate and the House of Representatives'},
                                        {id: 80, title:"How many U.S. Senators are there?", answer1:'25', answer2:"50", answer3:'100', answer4:'435'},
                                      ]},
                ]
    
console.log(quiz)

  return (
   

    <div>
      <Grid container spacing={12} style={{marginTop:10}}>
        {this.state.page === 1 ? 
        <Grid container style={{marginBottom:10, padding:20}}>
            {
              quiz[0].questions.map((item, key) => {
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
            </Grid> : this.state.page === 2 ?
                   <Grid container style={{marginBottom:10, padding:20}}>
                   {
                     quiz[1].questions.map((item, key) => {
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
                   </Grid> : this.state.page === 3 ?
                   <Grid container style={{marginBottom:10, padding:20}}>
                   {
                     quiz[2].questions.map((item, key) => {
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
                   </Grid> : this.state.page === 4 ?
                   <Grid container style={{marginBottom:10, padding:20}}>
                   {
                     quiz[3].questions.map((item, key) => {
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
                   </Grid> : this.state.page === 5 ?
                   <Grid container style={{marginBottom:10, padding:20}}>
                   {
                     quiz[4].questions.map((item, key) => {
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
                   </Grid> : this.state.page === 6 ?
                   <Grid container style={{marginBottom:10, padding:20}}>
                   {
                     quiz[5].questions.map((item, key) => {
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
                   </Grid> : this.state.page === 7 ?
                   <Grid container style={{marginBottom:10, padding:20}}>
                   {
                     quiz[6].questions.map((item, key) => {
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
                   </Grid> : this.state.page === 8 ?
                   <Grid container style={{marginBottom:10, padding:20}}>
                   {
                     quiz[7].questions.map((item, key) => {
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
                   </Grid> : null }
          
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

        {this.state.page === 1 ? null : 
        <Button onClick={() => this.onPreviousClick()} 
            style={{backgroundColor:'#25D192', marginLeft:10}}>
            <Typography style={{color:'#000', fontSize:14, fontWeight:'bold'}}>Back</Typography>
          </Button>
         }
          
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
