'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MetaTags from 'react-meta-tags';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import './src/climate.css'
import './src/bootstrapish.css'

let serverRoot = 'https://2uhq8f5ai5.execute-api.us-west-1.amazonaws.com/dev/';


class ClimateHandout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      stage: 'splash'
    };
    this.getGraderData()
  }

  getGraderData() {
    console.log('test')
    let url = serverRoot + 'getGrader/'
    axios.get(url, {
      params: {
        graderId: this.props.graderId,
      }
    }).then(response => this.graderLoaded(response));
  }

  graderLoaded(response) {
    console.log(response)
  }

  renderSplash() {
    return (
      <div>
        <h3>
          Did you know that...</h3>
          <p style={{'font-size':'1.25em'}}>The computers running Bitcoin's <span style={{'color':'black'}}>blockchain </span> 
          are using 2,000 kg of oil equivalent every year? 
          That is more CO2 per year than the country of Chile 🇨🇱.
          How do the <span style={{'color':'black'}}>decisions </span> we make as engineers and computationally-educated leaders 
          affect the planet?
        </p>
        <div class="twbs">
          <button 
            type="button" class="btn btn-primary btn-lg"
            onClick={() => this.setState({ stage: 'pretest' }) }
          >
            I'm curious!
          </button>
        </div>
        <br/>
        <img
          style= {{'width':'100%'}}
          src = "http://localhost:8000/component/img/splash.jpg"
        />
      </div>
    )
  }

  renderHook() {
    return (
      <div>
        <img
          style= {{'width':'100%'}}
          src = "https://metservice.gov.jm.md-84.webhostbox.net/wp-content/uploads/2017/06/climatechange2-1280x600-1.jpg"
        />
        <p>
          Fires in California, floods in Mozambique, ocean acidification in the Pacific... our new millennium has shown an unprecedented intensity of climate change consequences. But what do these have to do with computer science? How do the decisions we make as engineers and computationally-educated leaders affect the planet? And what kinds of opportunities exist for positive, climate-conscious computational leadership and innovation?
        </p>
        <p>
          Surprise: bitcoin uses more energy than Chile.
        </p>
        <p>
          We have all at least heard the word "blockchain" floating around as one example of cutting-edge computing technology that seems to have applications everywhere. We are going to dig into this a bit more and, through an exploration of computing infrastructure and energy, reframe technologies like blockchain - and computation in general - as a tool and a resource, with both enormous potential and insufficiently-examined side effects.
        </p>



        <h3>What questions do you have?</h3>
        <div class="twbs">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button 
            type="button" class="btn btn-primary"
            onClick={() => this.setState({ liked: true }) }
          >
            Like me</button>

        </div>

        <br/>

        
      </div>
    );
  }

  renderPretest() {
    return (
      <div>
        <h3>Before we get started...</h3>
        <p style={{'font-size':'1.25em'}}>what questions do you have about climate change and CS?</p>

        <div class="twbs">
          <textarea 
            style={{'font-size':'1.25em'}}
            placeholder="Type your questions here..."
            class="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3">
          </textarea>

        </div>
      </div>
    )
  }

  renderBody() {
    switch(this.state.stage) {
      case 'splash': return this.renderSplash();
      case 'hook': return this.renderHook();
      case 'pretest': return this.renderPretest();
      default: return <div>unknown state</div>
    }
  }

  render() {
    let body = this.renderBody()
    return(
       <div>
        <h1>
          Climate Change for CS109 Students
        </h1>
        <p className="climate-subtleHeading">
          <FontAwesomeIcon style={{'margin-right':'10px'}} icon={faCalendar} />
          May 9th, 2019
        </p>
        <hr/>
        {body}
      </div>
    );
  }
}

let domContainer = document.querySelector('#climateHandout');
ReactDOM.render(<ClimateHandout/>, domContainer);
