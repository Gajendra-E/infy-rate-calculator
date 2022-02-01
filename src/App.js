import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import _, { object } from 'underscore';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const services = [
  {
    id: 1,
    name: "WEB/DIGITAL CREATIVES"
  },
  {
    id: 2,
    name: "SOCIAL MEDIA CREATIVES"
  },
  {
    id: 3,
    name: "IMAGING CORRECTION"
  },
  {
    id: 4,
    name: "INFOGRAPHICS"
  },
  {
    id: 5,
    name: "VIDEO"
  },
  {
    id: 6,
    name: "WEB CONTENT WRITING"
  },
  {
    id: 5,
    name: "COPYWRITING"
  },
  {
    id: 6,
    name: "TECHNICAL DOCUMENTATION"
  },
  {
    id: 7,
    name: "TECHNICAL DOCUMENTATION"
  },
  {
    id: 8,
    name: "PROOFREADING"
  },
]
const valumes = [
  {
    id: 1,
    name: "10 TO 25",
    price: 250
  },
  {
    id: 2,
    name: "25 TO 50",
    price: 20
  },
  {
    id: 3,
    name: "50 TO 100",
    price: 30
  },
]

const durations = [
  {
    id: 1,
    name: "SHORT TERM (3-6 MONTHS)",
    price: 100
  },
  {
    id: 2,
    name: "LONG TERM (6-9 MONTHS)",
    price: 200
  },
  {
    id: 3,
    name: "ANNUAL (1 YEAR)",
    price: 300
  },

]
const complexities = [
  {
    id: 1,
    name: "SIMPLE ",
    price: 1.2
  },
  {
    id: 2,
    name: "MEDIUM",
    price: 1.5
  },
  {
    id: 3,
    name: "COMPLEX ",
    price: 2
  },

]

function App() {
  // const [valume_range, setValume_range] = React.useState('');
  // const [duration_range, setDuration_range] = React.useState('');
  // const [complexity, setComplexity] = React.useState('');
  // const [total, setTotal] = React.useState('');
  const [service, setService] = React.useState('');
  const [valume, setValume] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [complexity, setComplexity] = React.useState('');
  const [trials, setTrials] = React.useState([]);
  const [trialId, setTrialId] = React.useState(1);
  const [errorObjs, setErrorObjs] = React.useState([]);
  const [final_result, setFinal_result] = React.useState([]);

  const invoiceSubtotal = subtotal(final_result);
  function subtotal(final_result) {
    return final_result.map(({ total_price }) => total_price).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormat(num) {
    return `${num.toFixed(0)}`;
  }
  const invoiceResult = subTotalResult(final_result);
  function subTotalResult(final_result) {
    return final_result.map(({ result }) => result).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormatResult(num) {
    return `${num.toFixed(0)}`;
  }
  const invoice_five_percent_of_result = subTotalFivePercentOfResult(final_result);
  function subTotalFivePercentOfResult(final_result) {
    return final_result.map(({ five_percent_of_result }) => five_percent_of_result).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormatFivePercentOfResult(num) {
    return `${num.toFixed(0)}`;
  }
  const invoice_lower_range = subTotalLowerRange(final_result);
  function subTotalLowerRange(final_result) {
    return final_result.map(({ lower_range }) => lower_range).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormatLowerRange(num) {
    return `${num.toFixed(0)}`;
  }
  const invoice_upper_range = subTotalUpperRange(final_result);
  function subTotalUpperRange(final_result) {
    return final_result.map(({ upper_range }) => upper_range).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormatUpperRange(num) {
    return `${num.toFixed(0)}`;
  }
  const invoice_lower_range_rounded = subTotaLowerRangeRounded(final_result);
  function subTotaLowerRangeRounded(final_result) {
    return final_result.map(({ lower_range_rounded }) => lower_range_rounded).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormatLowerRangeRounded(num) {
    return `${num.toFixed(0)}`;
  }
  const invoice_upper_range_rounded = subTotaUpperRangeRounded(final_result);
  function subTotaUpperRangeRounded(final_result) {
    return final_result.map(({ upper_range_rounded }) => upper_range_rounded).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormatUpperRangeRounded(num) {
    return `${num.toFixed(0)}`;
  }
  // const handleChange = (event) => {
  //   setValume_range(event.target.value);
  // };
  // const handleChangeForDurationRange = (event) => {
  //   setDuration_range(event.target.value);
  // };
  // const handleChangeForComplexity = (event) => {
  //   setComplexity(event.target.value);
  // };
  const handleChangeService = (event) => {
    setService(event.target.value);
  };
  const handleChangeValume = (event) => {
    setValume(event.target.value);
  };
  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };
  const handleChangeComplexity = (event) => {
    setComplexity(event.target.value);
  };
  // const submit= () =>{
  //   setTotal(valume_range+duration_range+complexity)
  // }

  const addNewTrial = () => {
    //this.setState({ mode: modeTrial })
    // let { trials, trialId } = this.state
    // let sortedTrials = null
    // if (modeTrial === "EDIT") {
    //     sortedTrials = _.sortBy(trials, 'id')
    // }
    let trial = {};
    trial.id = trialId;
    trial.service = "";
    trial.valume = "";
    trial.duration = "";
    trial.complexity = "";
    setTrials([...trials, trial])
    setTrialId(trialId + 1)
    // this.setState({ trials: [...trials, trial], trialId: modeTrial === "EDIT" ? sortedTrials[trials.length - 1].id + 1 : trialId + 1 })
  }


  const submit = () => {
    let total = valume*3200 * complexity
    alert("Service Name:- " + service + " , " + "Service Cost:- " + total + "$")
  }

  const calSubmit = () => {
    let errorObjs = []
    let isError = false

    for (let trial of trials) {
  
      for (let key of Object.keys(trial)) {
         
          if ((trial[key] === null || trial[key] === ""||(key === "valume" && (parseInt(trial[key]%10)!==0))  )) {
              let errorObj = {}
              errorObj.errorKey = key;
              errorObj.errorId = trial.id
              errorObjs.push(errorObj)
              isError = true
          }
          // if ((trial[key] !== null && trial[key] !== "")) {
          //   if (key === "valume" && (!trial[key]%10===0)) {
          //     let errorObj = {}
          //     errorObj.errorKey = key;
          //     errorObj.errorId = trial.id
          //     errorObjs.push(errorObj)
          //     isError = true
          //   }
          // }
         
      }
  }

  if (isError === false) {
    // alert(isError)
     //  alert(JSON.stringify(trials))
     let results = trials.map(e =>{
      let total_price =e.valume * 3200 
      let total_result =total_price* e.complexity
      let five_percent_of_result= (total_result/100)*5
      let lower_range = total_result-five_percent_of_result
      let upper_range = total_result+five_percent_of_result
      let lower_range_rounded = Math.floor(lower_range)
      let upper_range_rounded = Math.ceil(upper_range)
      let comp = complexities.find(o => o.price ===e.complexity).name
   //  let  total_price=e.valume+e.duration+e.complexity
    //  alert(total_price)
   
     let obj={}
     obj.id=e.id
     obj.service=e.service
     obj.complexity=comp
     obj.total_price=total_price
     obj.weightage=e.complexity
     obj.result=total_result
     obj.five_percent_of_result=five_percent_of_result
     obj.lower_range= lower_range
     obj.upper_range = upper_range
     obj.lower_range_rounded=lower_range_rounded
     obj.upper_range_rounded=upper_range_rounded
     return obj
      }
        )
       
      
     
       setFinal_result(results)
       setErrorObjs(errorObjs)
  
  }
  else {
    // alert("else----"+isError)
    setErrorObjs(errorObjs)
}

  
        // alert(JSON.stringify(results))
    // let total = valume + duration + complexity
    // alert("Service Name:- " + service + " , " + "Service Cost:- " + total + "$")
  }


  const removeTrial = (id) => {
    let { trials } = this.state;
    let filterTrials = trials.filter(item => item.id !== id)
    this.setState({ trials: filterTrials.length > 0 ? filterTrials : trials })
  }

  const getTextValue = (key, id) => {
    // let isExist = trials.find(v => v.id === id);
    // if (_.isEmpty(isExist) !== true) {
    //   return isExist[key]
    // } else {
    //   return isExist !== undefined ? isExist[key] : ""
    // }

    
    let isExist = trials.find(v => v.id === id);
    return isExist !== undefined ? isExist[key] : ""
  }

  const checkError = (id, key) => {
  //alert(JSON.stringify(errorObjs))
    let findObj = errorObjs.find(item => (item.errorKey === key && item.errorId === id))
    if (findObj !== undefined) {
      return true
    }
  }

  const onTextChange = (value, key, id, regex) => {
    // let { trials, errorObjs } = this.state
    // alert(JSON.stringify(trials) + "" + id + "------" + key)
    let isExist = trials.find(v => v.id === id);
    isExist[key] = value
    // alert(isExist[key])
     let findobj = errorObjs.find(item => (item.errorKey === key && item.errorId === id))
     let errorObjsFilter = errorObjs.filter(item => item !== findobj)
    // setTrials(trials.map(trial => (trial.id === id) ? isExist : trial))
    //setErrorObjs( errorObjsFilter)
    let tr = trials.map(trial => (trial.id === id) ? { ...trial } : trial)
    // alert("--tr--" + JSON.stringify(tr))
    setTrials(tr)
    setErrorObjs( errorObjsFilter)
  }


  return (
    <div style={{ margin: 20 }}>
      <Grid item xs={12} sm={12} spacing={24}
        justify="center" style={{ backgroundColor: "#fff", borderRadius: 5, boxShadow: "0ppx 0px rgba(0, 0, 0, 0.2)", justifyContent: 'center' }}>
        <Toolbar style={{ justifyContent: "center", padding: "5px 20px 0px 0px", marginBottom: 10 }}>
          <Typography style={{
            color: "#37474f",
            fontWeight: "bold",
            fontSize: 25,
            padding: 5
          }}>Infy Rate Calculator</Typography>
        </Toolbar>

        {/* <Grid container>
          <Grid item xs={4} align="center">
          </Grid>
          <Grid item xs={4} align="center">
            <Grid item xs={12} align="center" style={{ margin: 10 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Services</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="service"
                  name="service"
                  label="service"
                  value={service}
                  onChange={handleChangeService}
                >
                  {services.map(item => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} align="center" style={{ margin: 10 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Valume</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="valume"
                  name="valume"
                  label="Valume"
                  value={valume}
                  onChange={handleChangeValume}
                >
                  {valumes.map(item => (
                    <MenuItem key={item.id} value={item.price}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} align="center" style={{ margin: 10 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="duration"
                  name="duration"
                  label="Duration"
                  value={duration}
                  onChange={handleChangeDuration}
                >
                  {durations.map(item => (
                    <MenuItem key={item.id} value={item.price}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} align="center" style={{ margin: 10 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Complexity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="complexity"
                  name="complexity"
                  label="Complexity"
                  value={complexity}
                  onChange={handleChangeComplexity}
                >
                  {complexities.map(item => (
                    <MenuItem key={item.id} value={item.price}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Button onClick={() => submit()} variant="contained">Submit</Button>
          </Grid>
          <Grid item xs={4} align="center">
          </Grid>
        </Grid> */}

        {/* <Typography style={{marginLeft:220,marginBottom:50}} >{total}</Typography> */}
        <Button onClick={() => addNewTrial()} variant="contained">add New Service</Button>
        <div>
          {
            trials.length === 0 ? <div>
              {addNewTrial()}
            </div> :
              trials.length > 0 &&
              trials.map(trial =>
                <div>
                  <Grid container spacing={2} style={{margin:2}} >
                    <Grid item xs={3} >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Services</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="service"
                          name="service"
                          label="service"
                          // value={service}
                          // onChange={handleChangeService}
                          value={getTextValue("service", trial.id)}
                          onChange={(event) => onTextChange(event.target.value, "service", trial.id, null)}
                          error={checkError(trial.id, "service") === true ? true : false}
                          helperText={checkError(trial.id, "service") === true ? "Please select Service" : false}

                        >
                          {/* <MenuItem value={10}>10-25</MenuItem>
                            <MenuItem value={20}>26-50</MenuItem>
                            <MenuItem value={30}>51-100</MenuItem> */}
                          {services.map(item => (
                            <MenuItem key={item.id} value={item.name}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {checkError(trial.id, "service") === true && <FormHelperText style={{ color: "#f44336" }}> {"Please select service"}</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} >
                      {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Volume</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="valume"
                          name="valume"
                          label="Valume"
                          // value={valume}
                          // onChange={handleChangeValume}
                          value={getTextValue("valume", trial.id)}
                          onChange={(event) => onTextChange(event.target.value, "valume", trial.id, null)}
                          // error={this.checkError(trial.id, "valume") === true ? true : false}
                          // helperText={this.checkError(trial.id, "valume") === true ? "Please select Valume" : false}
                        >
                          {valumes.map(item => (
                            <MenuItem key={item.id} value={item.price}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                       <TextField
                        id="valume"
                        label="Volume"
                        name="valume"
                        fullWidth
                        value={getTextValue("valume", trial.id)}
                        onChange={(event) => onTextChange(event.target.value, "valume", trial.id, null)}
                        error={checkError(trial.id, "valume") === true ? true : false}
                        //helperText={checkError(trial.id, "valume") === true ? "Please enter volume" : false}
                      />
                       {checkError(trial.id, "valume") === true && <FormHelperText style={{ color: "#f44336" }}> {"Please enter volume multiples of 10's"}</FormHelperText>}
                    </Grid>
                    <Grid item xs={3} >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="duration"
                          name="duration"
                          label="Duration"
                          // value={duration}
                          // onChange={handleChangeDuration}
                          value={getTextValue("duration", trial.id)}
                          onChange={(event) => onTextChange(event.target.value, "duration", trial.id, null)}
                          error={checkError(trial.id, "duration") === true ? true : false}
                          helperText={checkError(trial.id, "duration") === true ? "Please select duration" : false}
                        >
                          {durations.map(item => (
                            <MenuItem key={item.id} value={item.name}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {checkError(trial.id, "duration") === true && <FormHelperText style={{ color: "#f44336" }}> {"Please select duration"}</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Complexity</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="complexity"
                          name="complexity"
                          label="Complexity"
                          // value={complexity}
                          // onChange={handleChangeComplexity}
                          value={getTextValue("complexity", trial.id)}
                          onChange={(event) => onTextChange(event.target.value, "complexity", trial.id, null)}
                          error={checkError(trial.id, "complexity") === true ? true : false}
                          helperText={checkError(trial.id, "complexity") === true ? "Please select complexity" : false}
                       >
                          {complexities.map(item => (
                            <MenuItem key={item.id} value={item.price}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {checkError(trial.id, "complexity") === true && <FormHelperText style={{ color: "#f44336" }}> {"Please select complexity"}</FormHelperText>}
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
              )}
          <Grid item xs={12} align="center">
           <Button onClick={() => calSubmit()} variant="contained" style={{margin:20,padding:10}}>Infy Rate Calculation</Button>
           </Grid>
        </div>
      </Grid>

    {final_result.length>0&& <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Infy calculation</TableCell> */}
            <TableCell align="right" style={{fontWeight:'bold'}}>S.NO</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Services</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Complexity</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Total Price(Rate)</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Weightage</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Result</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>5% of Result</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Lower Range</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Upper Range</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Lower Range Rounded</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Upper Range Rounded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {final_result.map((row ,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell align="right">{index+1}</TableCell>
              <TableCell align="right">{row.service}</TableCell>
              <TableCell align="right">{row.complexity}</TableCell>
              <TableCell align="right">{row.total_price}</TableCell>
              <TableCell align="right">{row.weightage}</TableCell>
              <TableCell align="right">{row.result}</TableCell>
              <TableCell align="right">{row.five_percent_of_result}</TableCell>
              <TableCell align="right">{row.lower_range}</TableCell>
              <TableCell align="right">{row.upper_range}</TableCell>
              <TableCell align="right">{row.lower_range_rounded}</TableCell>
              <TableCell align="right">{row.upper_range_rounded}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} style={{fontWeight:'bold'}}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{ccyFormatResult(invoiceResult)}</TableCell>
            <TableCell align="right">{ccyFormatFivePercentOfResult(invoice_five_percent_of_result)}</TableCell>
            <TableCell align="right">{ccyFormatLowerRange(invoice_lower_range)}</TableCell>
            <TableCell align="right">{ccyFormatUpperRange(invoice_upper_range)}</TableCell>
            <TableCell align="right">{ccyFormatLowerRangeRounded(invoice_lower_range_rounded)}</TableCell>
            <TableCell align="right">{ccyFormatUpperRangeRounded(invoice_upper_range_rounded)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>}
    </div>
  );
}

export default App;
