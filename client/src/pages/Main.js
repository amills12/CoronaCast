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
  const [dataEmpty, setDataEmpty] = useState(false);

  const ConvertDate = (data) => {
    let oldDate = new Date(data + "T00:00:00");
    let year = oldDate.getFullYear();
    let month = oldDate.getMonth() + 1;
    let dt = oldDate.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    let new_date = month + '/' + dt + '/' + year;
    return new_date;
  };

  const ConvertInputDate = (data) => {
    //Converts Inputs from MM/DD/YYYY to YYYY-MM-DD
    let values = data.split('/')

    //Padding with zeros if needed
    if (values[0] != null && values[0].length < 2) {
      values[0] = '0' + values[0];
    }
    if (values[1] != null && values[1].length < 2) {
      values[1] = '0' + values[1];
    }

    return values[2] + '-' + values[0] + '-' + values[1];
  }

  const GetCovidData = (e) => {

    if (dataParams.state == null || dataParams.county == null || dataParams.startDate == null || dataParams.endDate == null ||
      dataParams.state === "" || dataParams.county === "" || dataParams.startDate === "" || dataParams.endDate === "") {
      setValidData(false);
      setDataEmpty(true);
      setDataNotFound(false);
    } else {
      setDataEmpty(false);

      let data = "/api/covidData/" + dataParams.state + "&" + dataParams.county + "&" + dataParams.startDate + "&" + dataParams.endDate;
      let stats = "/api/covidStats/" + dataParams.state + "&" + dataParams.county + "&" + dataParams.startDate + "&" + dataParams.endDate;

      const requestData = axios.get(data);
      const requestStats = axios.get(stats);

      axios.all([requestData, requestStats])
        .then(axios.spread((...res) => {
          if (res[0].data.message == null && res[0].data.length !== 0 && res[1].data.message == null) {
            //console.log(res[0].data);
            setCovidData(res[0].data);
            //console.log(res[1].data);
            setCovidStats(res[1].data);
            setValidData(true);
          } else {
            setValidData(false);
            setDataNotFound(true);
          }
        }))
        .catch(err => {
          console.log(err[0]);
          console.log(err[1]);
        });
    }
  }

  return (
    <html>
      <Grid textAlign='center' style={{ height: '100vh', marginTop: '25px' }} verticalAlign='middle'>
        <Grid.Row>
          <div className="MainBox" style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column style={{ maxWidth: 750 }} width={13}>
                  <Header className="ReportTitle">CoronaCast
                  <img style={{ display: 'inline-block', height: '100px', width: '200px' }}
                      src="https://cdn.discordapp.com/attachments/783424024277417994/783443042634825728/hero_image1x.png" alt="CoronaCast Logo" />
                  </Header>
                  <Header className="ReportTitle" style={{ fontSize: '40px' }}>Your one-stop shop for Coronavirus Data</Header>
                </Grid.Column>
                <Grid.Column style={{ maxWidth: 250 }} width={2}>
                  <Button href='/' className='AuthButton' style={{ height: '95px', width: '200px', marginTop: 20, paddingLeft: 0, paddingRight: 0 }}>Home</Button>
                  <Button href='/settings' className='AuthButton' style={{ height: '95px', width: '200px', marginTop: 20, paddingLeft: 0, paddingRight: 0 }}>Settings</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Grid.Row>
        <Grid.Row style={{ height: '60%' }} centered>
          {validData ?
            <div className="MainBox" style={{ padding: 40, maxWidth: '900px', paddingBottom: 60 }}>
              <Header>Statistics for {dataParams.county} County, {dataParams.state} from {ConvertDate(dataParams.startDate)} to {ConvertDate(dataParams.endDate)}</Header>
              <div style={{ width: 800, height: 300, overflowY: 'scroll' }}>
                <Table style={{ verticalAlign: 'middle' }} celled striped selectable>
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
                          {ConvertDate(el.date.substr(0, 10))}
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
              <p className="StatsParagraph">
                Based on the data from <b>{ConvertDate(dataParams.startDate)}</b> to <b>{ConvertDate(dataParams.endDate)}</b> in <b>{dataParams.county}</b>, <b>{dataParams.state + " "}</b>
              our linear fit model predicts there will be an increase in daily new cases by <b>{Math.ceil(covidStats[0].value)}</b> with an increase in deaths by <b>{Math.ceil(covidStats[1].value)}</b>.
              <br></br>
                <br></br>
              From <b>{ConvertDate(dataParams.startDate)}</b> to <b>{ConvertDate(dataParams.endDate)}</b> there was a total of <b>{covidStats[2].value}</b> Cases and <b>{covidStats[3].value}</b> Deaths.
            </p>
            </div>
            :
            <div className="MainBox" style={{ padding: 20 }}>
              {dataNotFound ? <p>Covid data not found, please check form information</p> : null}
              {dataEmpty ? <p>Please fill in all of the boxes</p> : null}
              <Form className="InputBox" onSubmit={GetCovidData}>
                <Form.Input fluid label='State' placeholder="State" onChange={e => setDataParams({ ...dataParams, state: e.target.value })} />
                <Form.Input fluid label='County' placeholder="County" onChange={e => setDataParams({ ...dataParams, county: e.target.value })} />
                <Form.Input fluid label='Start Date' placeholder="MM/DD/YYYY" onChange={e => setDataParams({ ...dataParams, startDate: ConvertInputDate(e.target.value) })} />
                <Form.Input fluid label='End Date' placeholder="MM/DD/YYYY" onChange={e => setDataParams({ ...dataParams, endDate: ConvertInputDate(e.target.value) })} />
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
