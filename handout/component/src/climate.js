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

  renderClimateInComputing() {
    return (<div>
      <h2>Climate Change and Computing</h2>
      <p>Unlike other types of engineering, we don’t often consider raw materials when we build computational
        tools. Furthermore, lots of computational infrastructure is built around the “cloud”, which sounds
        vague and nebulous and even natural. In our day-to-day and operational lives, computing even lets us go 
        aperless, telecommute, and consolidate many functionalities into one physical device. </p>

      <p>All of these associations abstract away the real resources and environmental effects related to 
      computation, however. When we consider the full infrastructure, supply chain, and scale of global 
      computing, another picture emerges. (Data courtesy Bordage 2019)</p>
      <ul>
        <li>There are currently about 30 billion computationally-enabled electronic devices worldwide in 2019</li>
        <li>Computation and the Internet represent 6.4% of electricity consumed worldwide</li>
        <li>This represents 1.5 billion tons of greenhouse gases emitted annually</li>
        <li>End users represent 66%, network infrastructure represents 20%, and data centers represent 13% of
            all energy used</li>
        <li>The resources and pollution related to the global computational infrastructure are comparable in 
            magnitude to worldwide commercial air travel, and to the energy use and greenhouse gas output of 
            some countries!</li>
      </ul>

      <p>What implications do these statistics have for us as students of Computer Science? It is essential to 
      understand how the full system of global computing is organized; no line of code is written in a vacuum. 
      Whether we’re writing a for loop in 106A, deciding whether to incorporate blockchain technology into our 
      company’s operations, or conducting research that relies on artificial intelligence, the devices, networks, 
      data centers, and energy we use affect the planet, and our creative decisions matter. Furthermore, this 
      conversation ties directly into other subjects we learn about in the CS core, like computational efficiency 
      (big-O), scaling up, and considering edge cases.</p>
    </div>)
  }

  renderResourceUse() {
    return (<div>
      put resource use here
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
        {this.renderClimateInComputing()}
        {this.renderWhatWeKnow()}
        {this.renderResourceUse()}
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
