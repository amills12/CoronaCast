import React, {useState,useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Header, Button } from 'semantic-ui-react';

const Admin = (props) => {
    const { user } = useAuth0();

    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:5000/api/footballClubs/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

    if (user.name === "alexandermills@ufl.edu") {
        return (
            <html>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ align: 'center', maxWidth: 400 }}>
                        <div className="MainBox" style={{ padding: 40 }}>
                            <Header> Welcome Admin! </Header>
                            <p>
                                {JSON.stringify(planets)}
                            </p>
                            <Button href="/" className="InputButton">Go Home</Button>
                        </div>
                    </Grid.Column>
                </Grid>
            </html>
        );
    }

    return (
        <html>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ align: 'center', maxWidth: 400 }}>
                    <div className="MainBox" style={{ padding: 40 }}>
                        <Header> Top Secret Page: </Header>
                        <p>Wait a second, you're not supposed to be here!</p>
                        <Button href="/" className="InputButton">Go Home</Button>
                    </div>
                </Grid.Column>
            </Grid>
        </html>
    );
}

export default Admin;
