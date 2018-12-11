import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './continent.css';

const styles = {
  paper: {
    height: 140,
    width: 100,
  },
}

class Continent extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify={"center"} spacing={16}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary">
                      hi
                    </Typography>
                    <Typography color="textSecondary">
                      oo
                    </Typography>
                    <Typography component="p">
                      alla
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Continent;