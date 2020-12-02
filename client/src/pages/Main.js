import React, { useState, useEffect } from 'react';
import './CoronaCast.css';
import axios from 'axios'
import { Container, Header, Grid, Table, Form, Button } from 'semantic-ui-react';

const Main = (props) => {

  const [covidData, setCovidData] = useState([]);
  const [dataParams, setDataParams] = useState([]);
  const [validData, setValidData] = useState(false);
  const [dataNotFound, setDataNotFound] = useState(false);
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('fc1ea907aee44428b96835af085426b7', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });
  const [newsData, setNewsData] = useState([]);


  useEffect(() => {

  }, [])

  const GetCovidData = (e) => {
    axios.get("/api/covidData/" + dataParams.state + "&" + dataParams.county + "&" + dataParams.startDate + "&" + dataParams.endDate)
            .then(res => {
                if(res.data.message == null) {
                    console.log(res.data);
                    setCovidData(res.data);
                    setValidData(true);}
                else {setDataNotFound(true);}})
            .catch(err => console.log(err));

    var startDate = new Date(),
      month = '' + startDate.getMonth(),
      day = '' + startDate.getDate(),
      year = startDate.getFullYear();
      let startDateString = [year, month, day].join('-');
    var endDate = new Date(),
      month = '' + (endDate.getMonth() + 1),
      day = '' + endDate.getDate(),
      year = endDate.getFullYear();
      let endDateString = [year, month, day].join('-');

    newsapi.v2.topHeadlines({
      q: 'coronavirus',
      country: 'us',
      from: startDateString,
      to: endDateString,
      language: 'en',
      sortBy: 'relevancy'
    }).then(res => {
      console.log(res);
    })
  }

  return (
    <html>
      <Container className="HeaderContainer">
        <Grid celled>
            <Grid.Column width={10}>
              <Header className="ReportTitle">CoronaCast</Header>
              </Grid.Column>
            <Grid.Column>
              <div className="MainBox" style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
                <Button href='/' className="AuthButton" style={{ marginTop: 20 }}>Home</Button>
                <Button href='/settings' className="AuthButton" style={{ marginTop: 20 }}>User Settings</Button>
              </div>
            </Grid.Column>

        </Grid> 
      </Container>
      <Container>
        
        { validData ? 
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 'fit-content'}}> 
              <div className="MainBox" style={{ padding: 40, margin: 100 }}>
                <Header>Statistics for {dataParams.county} County, {dataParams.state} from {dataParams.startDate} to {dataParams.endDate}</Header>
                <div style={{ width: 800, height: 300, overflowY: 'scroll' }}>
                <Table celled striped selectable>
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
              </div>
              <div className="MainBox" style={{padding: 20}}>
              
              </div>
          </Grid.Column>
        </Grid>
        : 
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 'fit-content'}}> 
            <div className="MainBox" style={{padding: 20}}>
              {dataNotFound ? <Header>Covid data not found, please check inputted information</Header> : null}
              <Form className="InputBox" onSubmit={GetCovidData}>
                <Form.Input fluid label='State' placeholder="State" onChange={e => setDataParams({...dataParams, state: e.target.value})}/>
                <Form.Input fluid label='County' placeholder="County" onChange={e => setDataParams({...dataParams, county: e.target.value})}/>
                <Form.Input fluid label='Start Date' placeholder="YYYY-MM-DD" onChange={e => setDataParams({...dataParams, startDate: e.target.value})}/>
                <Form.Input fluid label='End Date' placeholder="YYYY-MM-DD" onChange={e => setDataParams({...dataParams, endDate: e.target.value})}/>
                <Button type="submit" className="InputButton">Go</Button>
              </Form>
            </div>
          </Grid.Column>
        </Grid>
        } 
        
      </Container>
    </html>
  );
}

export default Main;
