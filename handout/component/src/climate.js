'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MetaTags from 'react-meta-tags';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import SortQuiz from './sortQuiz.js'
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
        
        <div class="twbs">
          <button 
            type="button" class="btn btn-primary"
            onClick={() => this.setState({ stage: 'pretest' }) }
          >
            I'm curious!
          </button>
        </div>
        
      </div>
    )
  }

  renderEnergyUse() {
    return (<div>
      <p>What do you think takes the most energy? Sort the list from most energy to least energy:</p>
        <b style ={{'color':'salmon'}}>Top of the list: Most energy</b>
        <SortQuiz 
          options = {energyList}
        />
        <b style ={{'color':'steelblue'}}>Bottom of the list: Least Energy</b>
    </div>)
  }

  renderMainBody() {
    let energyList = [
      'Running facebook\'s servers for a day',
      'A research lab training a deep learning algorithm',
      'A container ship crossing the Pacific',
      'Fabricating a smart phone',
      'Running bitcoin\'s blockchain for a day',
    ]
    return (
      <div>
        <p>The point of this handout is to share with you the basics of 
        climate change as it pertains to Computer Scientists. 
        In CS106B you have learned about Big-O and algorithmic efficiency. How does algorithmic efficiency related to ecological impact? 
        How can recursive techniques be employed to make "Smart power grids" more intelligent?</p>
        <h3>Your questions:</h3>
        <p>What questions do you have about climate change and CS? We will update the handout with answers!</p>
        <div class="twbs">
          <textarea 
            
            placeholder="Type your questions here..."
            class="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3">
          </textarea>
          <button 
            type="button" class="btn btn-primary"
            onClick={() => this.askQuestion() }
          >
            Ask question
          </button>
        </div>
        <br/>
        {this.renderContentBar()}
        {this.renderWhatWeKnow()}
        </div>
    )
  }

  renderWhatWeKnow() {
    return (
      <div>
        <h3>What do we know about climate Change?</h3>
      </div>
    )
  }

  renderContentBar() {
    let btnClass = "btn btn-link"
    return (
      <div>
        <h3>Skip to a section</h3><br/>
        <div 
          className="twbs climate-flexContainer"
          style={{height:'90px'}}
        >
          
          <button 
            type="button" className={btnClass}
            onClick={() => this.askQuestion() }
          >
            What's knowable about climate?
          </button>
          <button 
            type="button" className={btnClass}
            onClick={() => this.askQuestion() }
          >
            Energy use of our algorithms
          </button>
          <button 
            type="button" className={btnClass}
            onClick={() => this.askQuestion() }
          >
            Psycology and ethics
          </button>
          <button 
            type="button" className={btnClass}
            onClick={() => this.askQuestion() }
          >
            CS that helps
          </button>
        </div>
      </div>
    )
  }

  renderBody() {
    switch(this.state.stage) {
      case 'splash': return this.renderSplash();
      default: return this.renderMainBody();
    }
  }

  render() {
    let body = this.renderBody()
    return(
       <div className = "climate-handout">
        <h1>
          Climate Change for CS106B Students
        </h1>
        <p className="climate-subtleHeading">
          <FontAwesomeIcon style={{'margin-right':'10px'}} icon={faCalendar} />
          May 9th, 2019
        </p>
        <hr/>
        <center><img
          style= {{'width':'80%'}}
          src = "http://localhost:8000/component/img/splash.jpg"
        /></center>
        <h3>
          Bitcoin uses a countries worth of energy:</h3>
          <p>Did you know that the computers running Bitcoin's <span style={{'color':'black'}}>blockchain </span> 
          are using 2,000 kg of oil 🛢️equivalent every year? 
          That is more CO2 per year than the country of Chile 🇨🇱.
          How do the <span style={{'color':'black'}}>decisions </span> we make as engineers and computationally-educated leaders 
          affect the planet? What is blockchain? Read on!
        </p>
        {body}
        <br/>
        
      </div>
    );
  }
}

let domContainer = document.querySelector('#climateHandout');
ReactDOM.render(<ClimateHandout/>, domContainer);
