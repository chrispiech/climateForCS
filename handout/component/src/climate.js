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
    return (<div id="handout-stats-sxn">
      <h2>Climate Change and Computing</h2>
      <p>When we consider the full infrastructure, supply chain, and scale of global 
      computing, we see major environmental effects.<sup>1</sup></p>
      <ul>
        <li>There are currently about <b>30 billion computationally-enabled electronic devices</b> worldwide in 2019</li>
        <li>Computation and the Internet represent <b>6.4% of electricity consumed worldwide</b></li>
        <li>This represents <b>1.5 billion tons of greenhouse gases</b> emitted annually</li>
        <li>End users represent 66%, network infrastructure represents 20%, and data centers represent 13% of
            all energy used (rounded)</li>
        <li>The resources and pollution related to the global computational infrastructure are comparable in 
            magnitude to worldwide commercial air travel, and to the energy use and greenhouse gas output of 
            some countries!</li>
      </ul>

      <p>What implications do these numbers have for us as students of Computer Science? For starters, no line of 
      code is written in a vacuum. 
      Whether we’re writing a for loop in 106A, deciding whether to incorporate blockchain technology into our 
      company’s operations, or conducting research that relies on artificial intelligence, <b>the devices, networks, 
      data centers, and energy we use affect the planet, and our decisions matter.</b></p><br/>

      <center><img
          style= {{'width':'80%'}}
          src = "http://localhost:8000/component/img/energy-desk.jpg"
        /></center><br/>
    </div>)
  }

  renderResourceUse() {
    return (<div id="handout-resources-sxn">
      <h2>Where are resources used?</h2>
      <p>The design and engineering decisions we make in Computer Science impact the planet in three major ways:</p>
      <ol><b>
        <li>the raw materials used to produce equipment,</li>
        <li>the energy needed to produce, transport, and serve equipment,</li>
        <li>and the end-of-life pollution of the components during disposal.</li>
      </b></ol>

      {this.renderEnergyUse()}
      {this.renderManufacturingUse()}
    </div>)
  }

  renderEnergyUse() {
    return (<div id="handout-energy-sxn">
      <h3>Energy</h3>
      <p>Energy consumption is a big deal when it comes to Bitcoin. If Bitcoin mining were a country, its
       annual energy consumption would rank 43rd in the world - between Switzerland and Colombia. This energy 
       consumption <a href="https://arstechnica.com/tech-policy/2017/12/bitcoins-insane-energy-consumption-explained/" target="_blank">creates a 
       huge demand for cheap energy in order to keep the mining profitable</a>, so most 
       Bitcoin mining occurs in locations where this is possible: China, Georgia, and the US. China, in 
       particular, represents the largest single supplier of energy for Bitcoin mining, and much of this energy 
       comes from coal, which makes it a very “carbon intense” activity.<sup>2</sup> </p>
       <a href="https://digiconomist.net/bitcoin-energy-consumption" target="_blank">See live chart here</a>
       <center><img
          style= {{'width':'80%'}}
          src = "http://localhost:8000/component/img/bitcoin-consumption.png"
        /></center>
      <a data-toggle="collapse" href="#responsible-energy-collapse" aria-expanded="false" aria-controls="collapseExample">
        Learn more about sourcing responsible energy for computing
      </a>
      <div class="collapse" id="responsible-energy-collapse">
      <p>We do see some possibilities for more responsible energy sourcing: Canada, Sweden, and Iceland all 
       have Bitcoin operations as well, and they keep carbon emissions down by using less polluting sources 
       such as Iceland’s famous geothermal energy. Nevertheless, the scale of energy needed to support all of
        Bitcoin’s current operations just isn’t economically attractive or even necessarily available in
         low-carbon forms. In fact, some point out that in China, a good deal of Bitcoin mining occurs in Sichuan 
         province, which generates enormous amounts of energy from hydropower. However, Sichuan generates three 
         times more hydroelectricity in summer than in winter due to seasonal water changes, but energy demand 
         from Bitcoin stays constant - and coal is used to balance out these fluctuations. Furthermore, climate 
         change is only going to exacerbate the differences between summer and winter power availability, raising 
         demand for coal during dry months.</p>
      </div><p></p>
      <p>This can feel extremely abstract and far away (unless your roommate is mad 
        they <a href="https://uit.stanford.edu/news/cryptocurrency-mining" target="_blank">can’t use dorm electricity to mine 
        Bitcoin</a>). But the energy, and thus carbon, impacts of computing are non-negligible closer to 
      home. <b>A single domestic Internet router, on all day every day, consumes as much electricity as a small 
      fridge.</b><sup>1</sup> And the code we write, too, can be more or less energy-efficient depending on its 
      computational efficiency.</p>
      <a data-toggle="collapse" href="#facebook-energy-collapse" aria-expanded="false" aria-controls="collapseExample">
        Learn about how Facebook drastically reduced its energy use with one simple trick
      </a>
      <div class="collapse" id="facebook-energy-collapse">
      <p>Luckily, today’s compilers make our code <i>much</i> more efficient when it’s 
      executed. In 2010, for example, Facebook compiled the PHP running on its servers into C++, reducing by a 
      factor of about 5 the number of servers needed to operate the site - a huge win for energy efficiency and 
      hardware use!<sup>3</sup> But compilers are only the first step. Compilers can provide speed-ups and clever uses of 
      memory, but they can’t really fix an unnecessarily complex algorithm. Those optimizations require 
      human ingenuity.</p></div><p></p>
      <p>Complex algorithms, too, generally don’t operate in isolation, so when we talk about energy 
      efficiency we have to think about digital services at a system level. In other words, the individual 
      executables we’re used to writing in an academic class might instead be sent over networks, duplicated 
      and run hundreds of thousands of times on a variety of systems, require outside packages to be imported or, 
      themselves, underly larger and more complex software systems and services. <b>Indeed, the 
      main energy reduction lever in software 
      is simply to eliminate functionality that is never used; usually this represents around 70% of any particular 
      service.</b> This question requires creative and person-to-person approaches rather than only clever coding - 
      although clever coding is important too.<sup>1</sup></p>
      <center><img
          style= {{'width':'80%'}}
          src = "http://localhost:8000/component/img/mitigation.png"
        /></center>
    </div>)
  }

  renderManufacturingUse() {
    return (<div id="handout-manufacturing-sxn">
      <h3>Manufacturing and Disposal</h3>
      <p>Most of the carbon emissions and other environmental effects of computing come not from energy use 
      during operation, but from the energy and natural resources involved in producing and discarding physical 
      equipment. <b>A typical laptop, for example, is responsible for about 25 kg CO<sub>2</sub>eq/year, but producing it emits 
      200-400 kg.</b> As a lower bound, we’d need to use each laptop almost a decade in order for its energy use 
      during operation to dominate its environmental impacts. In order to mitigate these impacts, then, it’s 
      important that we focus on building a global computational system where we produce less equipment and use 
      each device for more time.</p>
      <a data-toggle="collapse" href="#manufacturing-bitcoin-collapse" aria-expanded="false" aria-controls="collapseExample">
        Learn more about Bitcoin hardware impacts
      </a>
      <div class="collapse" id="manufacturing-bitcoin-collapse">
        <p>One major concern with Bitcoin, and all computation, is what happens to the machines used to mine it 
        after they cycle out of service. The most popular hardware used to mine Bitcoin, the “Application-Specific 
        Integrated Circuit (ASIC) miner, cannot be repurposed because it is hardwired solely for mining Bitcoin. 
        This means it is likely to wind up with other cast-off electronics in a landfill or incinerator, causing 
        damage to the environment”.<sup>2</sup> Bitcoin alone produces as much electronic waste annually as a small country, 
        like Luxembourg.</p>
      </div>
      <p></p><p>
      From this, we can develop a few principles for sustainable hardware use:</p>
      <ul>
        <li>Use devices as long as possible</li>
        <li>Promote device refurbishment and repairability</li>
        <li>Source materials in ecologically responsible ways</li>
        <li>Promote backwards compatibility and hardware versatility</li>
      </ul><br/>
      <center><img
          style= {{'width':'80%'}}
          src = "http://localhost:8000/component/img/laptop-plant.jpg"
        /></center><br/>
    </div>)
  }

  renderEthics() {
    /*return (
      <div id="handout-ethics-sxn">
        <h3>Ethics and Psychology related to CS!!</h3>

      </div>
    )*/
  }

  renderHelps() {
    return (
      <div id="handout-helps-sxn">
        <h2>What kind of CS helps?</h2>
        <p>Climate change gives us plenty to worry about, and our responsibility as computer scientists
        can seem heavy. At the scale of global computation, though, small changes to improve efficiency,
        reduce unnecessary functionality, and prolong hardware lifespan can prevent a great deal of energy
        use and pollution, simply because of how big the system is.</p>
        <center><img
          style= {{'width':'80%'}}
          src = "http://localhost:8000/component/img/changes-now-later.png"
        /></center>
        <p>Moreover, we can think of computing as a resource just like any other - not an infinite or
        environmentally-neutral one, but one that we certainly need to use in many areas to face the challenges
        of the 21st century. Computational tools allow us to manage energy grids, monitor emissions, and even model 
        climate change itself. With some engineering ingenuity and contextual awareness, efficient computation 
        has a great deal of importance for the future of our planet.</p><br/>
        <center><img
          style= {{'width':'80%'}}
          src = "http://localhost:8000/component/img/splash.jpg"
        /></center>
        <br/><p><b>For further reading:</b></p>
        <ul>
          <li><a href="https://arstechnica.com/tech-policy/2017/12/bitcoins-insane-energy-consumption-explained/" target="_blank">Bitcoin's Energy Consumption, Explained</a> (Ars Technica)</li>
          <li><a href="http://www.clickclean.org/usa/en/" target="_blank">Clicking Clean: Who is Winning the Race to Build a Cleaner Internet?</a> (Greenpeace)</li>
          <li><a href="https://get-green-now.com/reduce-ewaste-hazards/" target="_blank">How to Reduce Electronic Waste</a> (Get Green Now)</li>
          <li><a href="https://www.nten.org/article/refurbished-technology-an-insiders-guide/" target="_blank">Refurbished Technology: An Insider's Guide</a> (Nonprofit Technology Enterprise Network)</li>
          <li><a href="https://youmightnotneed.com/" target="_blank">You Might Not Need</a>: an open-source collection of resources for building lightweight websites (<a href="https://github.com/cedmax/youmightnotneed" target="_blank">GitHub</a>)</li>
          <li><a href="https://research.fb.com/wp-content/uploads/2016/11/the-hiphop-compiler-for-php.pdf" target="_blank">The HipHop Compiler for PHP</a> (original Facebook paper - also see <a href="https://www.facebook.com/notes/facebook-engineering/hiphop-for-php-move-fast/280583813919/" target="_blank">this post</a>).</li>
        </ul>
      </div>
    )
  }

  renderFootnotes() {
    return (
      <div id="handout-footnotes-sxn">
        <h3>Sources</h3>
        <ol>
          <li>Courtesy Frédéric Bordage, 2019, personal communications. See his 
          site, <a href="https://www.greenit.fr/" target="_blank">GreenIT.fr</a> (in French).</li>
          <li>"Bitcoin Energy Consumption Index", <a href="https://digiconomist.net/bitcoin-energy-consumption" target="_blank">
          Digiconomist 2019</a>, 
          and related <a href="https://digiconomist.net/renewable-energy-will-not-solve-bitcoins-sustainability-problem/" taget="_blank">press release</a>.</li>
          <li><a href="https://research.fb.com/wp-content/uploads/2016/11/the-hiphop-compiler-for-php.pdf" target="_blank">The 
          HipHop Compiler for PHP</a>, Facebook, 2012.</li>
        </ol>
      </div>
    )
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
        climate change as it pertains to Computer Science. 
        In CS106B you have learned about Big-O and algorithmic efficiency. How does algorithmic efficiency relate to ecological impact? 
        How can recursive techniques be employed to make "smart power grids" more intelligent?</p>
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
        {this.renderContentBar_Links()}
        {this.renderClimateInComputing()}
        {/*this.renderWhatWeKnow()*/}
        {this.renderResourceUse()}
        {this.renderEthics()}
        {this.renderHelps()}
        {this.renderFootnotes()}
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

  // Julia's new version - just uses links with hrefs instead of asking questions
  renderContentBar_Links() {
    let btnClass = "button btn btn-link"
    return (
      <div>
        <h3>Skip to a section</h3><br/>
        <div 
          className="twbs climate-flexContainer"
          style={{height:'90px'}}
        >
          
          <a 
            className={btnClass}
            href="#handout-stats-sxn"
          >
            What's knowable about climate?
          </a>
          <a 
            className={btnClass}
            href="#handout-resources-sxn"
          >
            Resource use of computing
          </a>
          <a 
            className={btnClass}
            href="#handout-helps-sxn"
          >
            CS that helps
          </a>
        </div>
      </div>
    )
  }

  // Chris' original version that asks questions
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
            Energy use of computing
          </button>
          <button 
            type="button" className={btnClass}
            onClick={() => this.askQuestion() }
          >
            Psychology and ethics
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
          src = "http://localhost:8000/component/img/laptop-outside.jpg"
        /></center>
        <h3>Bitcoin uses a country's worth of energy:</h3>
          <p>Did you know that the computers running Bitcoin's <span style={{'color':'black'}}>blockchain </span> 
          are using 2,000 kg of oil 🛢️equivalent every year? 
          That is more CO<sub>2</sub> per year than the country of Chile 🇨🇱.
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
