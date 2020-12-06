import React, { useState } from 'react';
import './CoronaCast.css';
import axios from 'axios'
import { Header, Grid, Table, Form, Button } from 'semantic-ui-react';

const Main = (props) => {

  const [covidData, setCovidData] = useState([]);
  const [covidStats, setCovidStats] = useState([]);
  const [dataParams, setDataParams] = useState([]);
  const [validData, setValidData] = useState(false);
  const [dataNotFound, setDataNotFound] = useState(false);

  const GetCovidData = (e) => {
    let data = "/api/covidData/" + dataParams.state + "&" + dataParams.county + "&" + dataParams.startDate + "&" + dataParams.endDate;
    let stats = "/api/covidStats/" + dataParams.state + "&" + dataParams.county + "&" + dataParams.startDate + "&" + dataParams.endDate;

    const requestData = axios.get(data);
    const requestStats = axios.get(stats);

    axios.all([requestData, requestStats])
            .then(axios.spread((...res) => {
                if(res[0].data.message == null && res[0].data.length !== 0 && res[1].data.message == null) {
                    console.log(res[0].data);
                    setCovidData(res[0].data);
                    console.log(res[1].data);
                    setCovidStats(res[1].data);
                    setValidData(true);
                } else {
                  setValidData(false);
                  setDataNotFound(true);}}))
            .catch(err => {
              console.log(err[0]);
              console.log(err[1]);
            });
  }

  return (
    <html>
      <Grid textAlign='center' style={{ height: '100vh', marginTop: '25px'}} verticalAlign='middle'>
        <Grid.Row>
          <div className="MainBox" style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
             <Grid> 
             <Grid.Row columns={2}>
              <Grid.Column style={{ maxWidth: 750 }} width={13}>
                <Header className="ReportTitle">CoronaCast
                  <img style={{display: 'inline-block', height: '100px', width: '200px'}}
                  src="https://cdn.discordapp.com/attachments/783424024277417994/783443042634825728/hero_image1x.png" alt="CoronaCast Logo"/>
                </Header>
                <Header className="ReportTitle" style={{fontSize: '40px'}}>Your one-stop shop for Coronavirus Data</Header>
              </Grid.Column>
              <Grid.Column style={{maxWidth: 250}} width={2}>
                <Button href='/' className='AuthButton' style={{ height: '95px', width: '200px', marginTop: 20, paddingLeft: 0, paddingRight: 0}}>Home</Button>
                <Button href='/settings' className='AuthButton' style={{ height: '95px', width: '200px', marginTop: 20, paddingLeft: 0, paddingRight: 0}}>Settings</Button>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div> 
        </Grid.Row>
        <Grid.Row style={{height: '60%'}} centered>       
        { validData ? 
          <div className="MainBox" style={{ padding: 40, maxWidth: '900px' }}>
            <Header>Statistics for {dataParams.county} County, {dataParams.state} from {dataParams.startDate} to {dataParams.endDate}</Header>
            <div style={{ width: 800, height: 300, overflowY: 'scroll' }}>
            <Table style={{verticalAlign: 'middle'}}celled striped selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Cases</Table.HeaderCell>
                  <Table.HeaderCell>Deaths</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {covidData.map(el => (
                  <Table.Row>
                    <Table.Cell>
                      {el.date.substr(0, 10)}
                    </Table.Cell>
                    <Table.Cell>
                      {el.cases}
                    </Table.Cell>
                    <Table.Cell>
                      {el.deaths}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            </div>
            <p className="StatsParagraph">Based on the data from {dataParams.startDate} to {dataParams.endDate} in {dataParams.county}, {dataParams.state + " "}
            our linear fit model predicts there will be an increase in cases by <b>{covidStats[0].value.toFixed(0)}</b> with an increase in deaths by <b>{covidStats[1].value.toFixed(0)}</b>. 
            From {dataParams.startDate} to {dataParams.endDate} there was a total of <b>{covidStats[2].value.toFixed(0)}</b> Cases and <b>{covidStats[3].value.toFixed(0)}</b> Deaths.</p>
          </div>            
        : 
          <div className="MainBox" style={{padding: 20 }}>
            {dataNotFound ? <p>Covid data not found, please check form information</p> : null}
            <Form className="InputBox" onSubmit={GetCovidData}>
              <Form.Input fluid label='State' placeholder="State" onChange={e => setDataParams({...dataParams, state: e.target.value})}/>
              <Form.Input fluid label='County' placeholder="County" onChange={e => setDataParams({...dataParams, county: e.target.value})}/>
              <Form.Input fluid label='Start Date' placeholder="YYYY-MM-DD" onChange={e => setDataParams({...dataParams, startDate: e.target.value})}/>
              <Form.Input fluid label='End Date' placeholder="YYYY-MM-DD" onChange={e => setDataParams({...dataParams, endDate: e.target.value})}/>
              <Button type="submit" className="InputButton">Go</Button>
            </Form>
          </div>
        }        
        </Grid.Row> 
      </Grid>
    </html>
  );
}

export default Main;
