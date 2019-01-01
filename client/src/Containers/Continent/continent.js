import React, { Component } from "react";
import Asia from './Asia/asia.js';
import Africa from './Africa/africa.js';
import America from './America/america.js';
import Europe from './Europe/europe.js';
import Oceania from './Oceania/oceania.js';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./continent.css";

class Continent extends Component {
  constructor() {
    super();
    this.state = {
      continent: ["Asia", "Europe", "Africa", "America", "Oceania"],
      Page: null,
    };
    this.__ChangePage = this.__ChangePage.bind(this);
  }

  __ChangePage(continent) {
    this.setState({
      Page: continent.item,
    })
  }

  render() { 
    let page = this.state.Page;
    return (
      <>
        {this.state.Page === null ? (
        <Grid container direction='row' justify='center' alignItems='center' className='h-100' id='main'>
        {this.state.continent.map(item => (                                                                                                                               
          <Card key={item} className='card hoverEvent' onClick={() => this.__ChangePage({item})}>
            <CardContent>
              <Typography align='center'>
                {item}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
        ) : (
          <>
            {
              page === 'Asia' ? <Asia /> : page === 'Europe' ? <Europe /> : page === 'Africa' ? <Africa /> : page === 'America' ? <America /> : page === 'Oceania' ? <Oceania /> : null
            }
          </>
        )}
      </>
    );
  }
}

export default Continent;
