'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MetaTags from 'react-meta-tags';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import SortQuiz from './sortQuiz.js';
import './src/climate.css';
import './src/bootstrapish.css';

var serverRoot = 'https://2uhq8f5ai5.execute-api.us-west-1.amazonaws.com/dev/';

var ClimateHandout = function (_Component) {
  _inherits(ClimateHandout, _Component);

  function ClimateHandout(props) {
    _classCallCheck(this, ClimateHandout);

    var _this = _possibleConstructorReturn(this, (ClimateHandout.__proto__ || Object.getPrototypeOf(ClimateHandout)).call(this, props));

    _this.state = {
      stage: 'splash'
    };
    _this.getGraderData();
    return _this;
  }

  _createClass(ClimateHandout, [{
    key: 'getGraderData',
    value: function getGraderData() {
      var _this2 = this;

      console.log('test');
      var url = serverRoot + 'getGrader/';
      axios.get(url, {
        params: {
          graderId: this.props.graderId
        }
      }).then(function (response) {
        return _this2.graderLoaded(response);
      });
    }
  }, {
    key: 'graderLoaded',
    value: function graderLoaded(response) {
      console.log(response);
    }
  }, {
    key: 'renderSplash',
    value: function renderSplash() {
      var _this3 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { 'class': 'twbs' },
          React.createElement(
            'button',
            {
              type: 'button', 'class': 'btn btn-primary',
              onClick: function onClick() {
                return _this3.setState({ stage: 'pretest' });
              }
            },
            'I\'m curious!'
          )
        )
      );
    }
  }, {
    key: 'renderEnergyUse',
    value: function renderEnergyUse() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'What do you think takes the most energy? Sort the list from most energy to least energy:'
        ),
        React.createElement(
          'b',
          { style: { 'color': 'salmon' } },
          'Top of the list: Most energy'
        ),
        React.createElement(SortQuiz, {
          options: energyList
        }),
        React.createElement(
          'b',
          { style: { 'color': 'steelblue' } },
          'Bottom of the list: Least Energy'
        )
      );
    }
  }, {
    key: 'renderClimateInComputing',
    value: function renderClimateInComputing() {
      return React.createElement(
        'div',
        { id: 'handout-stats-sxn' },
        React.createElement(
          'h2',
          null,
          'Climate Change and Computing'
        ),
        React.createElement(
          'p',
          null,
          'When we consider the full infrastructure, supply chain, and scale of global computing, we see major environmental effects. (Data courtesy Bordage 2019)'
        ),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            'There are currently about ',
            React.createElement(
              'b',
              null,
              '30 billion computationally-enabled electronic devices'
            ),
            ' worldwide in 2019'
          ),
          React.createElement(
            'li',
            null,
            'Computation and the Internet represent ',
            React.createElement(
              'b',
              null,
              '6.4% of electricity consumed worldwide'
            )
          ),
          React.createElement(
            'li',
            null,
            'This represents ',
            React.createElement(
              'b',
              null,
              '1.5 billion tons of greenhouse gases'
            ),
            ' emitted annually'
          ),
          React.createElement(
            'li',
            null,
            'End users represent 66%, network infrastructure represents 20%, and data centers represent 13% of all energy used'
          ),
          React.createElement(
            'li',
            null,
            'The resources and pollution related to the global computational infrastructure are comparable in magnitude to worldwide commercial air travel, and to the energy use and greenhouse gas output of some countries!'
          )
        ),
        React.createElement(
          'p',
          null,
          'What implications do these numbers have for us as students of Computer Science? For starters, no line of code is written in a vacuum. Whether we\u2019re writing a for loop in 106A, deciding whether to incorporate blockchain technology into our company\u2019s operations, or conducting research that relies on artificial intelligence, the devices, networks, data centers, and energy we use affect the planet, and our creative decisions matter.'
        )
      );
    }
  }, {
    key: 'renderResourceUse',
    value: function renderResourceUse() {
      return React.createElement(
        'div',
        { id: 'handout-resources-sxn' },
        React.createElement(
          'h2',
          null,
          'Where are resources used?'
        ),
        React.createElement(
          'p',
          null,
          'The design and engineering decisions we make in Computer Science impact the planet in three major ways:'
        ),
        React.createElement(
          'ol',
          null,
          React.createElement(
            'li',
            null,
            'the raw materials used to produce equipment,'
          ),
          React.createElement(
            'li',
            null,
            'the energy needed to produce, transport, and serve equipment,'
          ),
          React.createElement(
            'li',
            null,
            'and the end-of-life pollution of the components during disposal.'
          )
        ),
        this.renderEnergyUse(),
        this.renderManufacturingUse()
      );
    }
  }, {
    key: 'renderEnergyUse',
    value: function renderEnergyUse() {
      return React.createElement(
        'div',
        { id: 'handout-energy-sxn' },
        React.createElement(
          'h3',
          null,
          'Energy'
        ),
        React.createElement(
          'p',
          null,
          'Energy consumption is a big deal when it comes to Bitcoin. If Bitcoin mining were a country, its annual energy consumption would rank 43rd in the world - between Switzerland and Colombia. This energy consumption creates a huge demand for cheap energy in order to keep the mining profitable, so most Bitcoin mining occurs in locations where this is possible: China, Georgia, and the US. China, in particular, represents the largest single supplier of energy for Bitcoin mining, and much of this energy omes from coal. This means that Bitcoin mining has what we call a high \u201Ccarbon intensity\u201D: for every kilowatt-hour of energy used, the amount in grams of carbon dioxide, or equivalent grams of other greenhouse gases like methane, that is emitted (written as gCO2eq/kWh). (Source: Digiconomy)'
        ),
        React.createElement(
          'a',
          { 'data-toggle': 'collapse', href: '#responsible-energy-collapse', 'aria-expanded': 'false', 'aria-controls': 'collapseExample' },
          'Learn more about sourcing responsible energy for computing'
        ),
        React.createElement(
          'div',
          { 'class': 'collapse', id: 'responsible-energy-collapse' },
          React.createElement(
            'p',
            null,
            'We do see some possibilities for more responsible energy sourcing: Canada, Sweden, and Iceland all have Bitcoin operations as well, and they keep carbon emissions down by using less polluting sources such as Iceland\u2019s famous geothermal energy. Nevertheless, the scale of energy needed to support all of Bitcoin\u2019s current operations just isn\u2019t economically attractive or even necessarily available in low-carbon forms. In fact, some point out that in China, a good deal of Bitcoin mining occurs in Sichuan province, which generates enormous amounts of energy from hydropower. However, Sichuan generates three times more hydroelectricity in summer than in winter due to seasonal water changes, but energy demand from Bitcoin stays constant - and coal is used to balance out these fluctuations. Furthermore, climate change is only going to exacerbate the differences between summer and winter power availability, raising demand for coal during dry months.'
          )
        ),
        React.createElement('p', null),
        React.createElement(
          'p',
          null,
          'This can feel extremely abstract and far away (unless your roommate has expressed frustration that they ',
          React.createElement(
            'a',
            { href: 'https://uit.stanford.edu/news/cryptocurrency-mining' },
            'can\u2019t use dorm electricity to mine Bitcoin'
          ),
          '). But the energy, and thus carbon, impacts of computing are non-negligible closer to home. A single domestic Internet router, on all day every day, consumes as much electricity as a small fridge. And the code we write, too, can be more or less energy-efficient depending on its computational efficiency.'
        ),
        React.createElement(
          'p',
          null,
          'Luckily, today\u2019s compilers do a great job at making the code we write more efficient by the time it\u2019s executed. In 2010, for example, Facebook compiled the PHP running on its servers into C++, reducing by a factor of about 5 the number of servers needed to operate the site - a huge win for energy efficiency and hardware use. But compilers are only the first step. Compilers can provide speed-ups and clever uses of memory, but they can\u2019t fundamentally alter an unnecessarily complex algorithm. Those optimizations require uman ingenuity.'
        ),
        React.createElement(
          'p',
          null,
          'Complex algorithms, too, generally don\u2019t operate in isolation. Even the most streamlined and efficient of algorithms usually operates within a networked system, which means that when we talk about energy efficiency we have to think about digital services at a system level. In other words, the individual executables we\u2019re used to writing in an academic class might instead be sent over networks, duplicated and run hundreds of thousands of times on a variety of systems, require outside packages to be imported or, themselves, underly larger and more complex software systems and services. Rather than looking at each brick, we also need to step back and look at the efficiency of the entire building. Indeed, the main energy reduction lever in software is to eliminate functionality that is never used; usually this represents around 70% of any particular service. This question becomes a management, marketing, and design question rather than purely an engineering one, and requires creative and person-to-person approaches rather than only clever coding - although clever coding is important too. (Source: Bordage)'
        )
      );
    }
  }, {
    key: 'renderManufacturingUse',
    value: function renderManufacturingUse() {
      return React.createElement(
        'div',
        { id: 'handout-manufacturing-sxn' },
        React.createElement(
          'h3',
          null,
          'Manufacturing'
        ),
        React.createElement(
          'p',
          null,
          'Most of the carbon emissions and other environmental effects of computing come not from energy use during operation, but from the energy and natural resources involved in producing and discarding physical equipment. A typical laptop, for example, is responsible for about 25 kg CO2eq/year, but producing it emits 200-400 kg. As a lower bound, we\u2019d need to use each laptop almost a decade in order for its energy use during operation to dominate its environmental impacts. In order to mitigate these impacts, then, it\u2019s important that we focus on building a global computational system where we produce less equipment and use each device for more time.'
        ),
        React.createElement(
          'a',
          { 'data-toggle': 'collapse', href: '#manufacturing-bitcoin-collapse', 'aria-expanded': 'false', 'aria-controls': 'collapseExample' },
          'Learn more about Bitcoin hardware impacts'
        ),
        React.createElement(
          'div',
          { 'class': 'collapse', id: 'manufacturing-bitcoin-collapse' },
          React.createElement(
            'p',
            null,
            'One major concern with Bitcoin, and all computation, is what happens to the machines used to mine it after they cycle out of service. The most popular hardware used to mine Bitcoin, the \u201CApplication-Specific Integrated Circuit (ASIC) miner, cannot be repurposed because it is hardwired solely for mining Bitcoin. This means it is likely to wind up with other cast-off electronics in a landfill or incinerator, causing damage to the environment\u201D. Bitcoin alone produces as much electronic waste annually as a small country, like Luxembourg.'
          )
        ),
        React.createElement('p', null),
        React.createElement(
          'p',
          null,
          'From this, we can develop a few principles for sustainable hardware use:'
        ),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            'Use devices as long as possible'
          ),
          React.createElement(
            'li',
            null,
            'Promote device refurbishment and repairability'
          ),
          React.createElement(
            'li',
            null,
            'Source materials in ecologically responsible ways'
          ),
          React.createElement(
            'li',
            null,
            'Promote backwards compatibility and hardware versatility'
          )
        )
      );
    }
  }, {
    key: 'renderMainBody',
    value: function renderMainBody() {
      var _this4 = this;

      var energyList = ['Running facebook\'s servers for a day', 'A research lab training a deep learning algorithm', 'A container ship crossing the Pacific', 'Fabricating a smart phone', 'Running bitcoin\'s blockchain for a day'];
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'The point of this handout is to share with you the basics of climate change as it pertains to Computer Science. In CS106B you have learned about Big-O and algorithmic efficiency. How does algorithmic efficiency relate to ecological impact? How can recursive techniques be employed to make "smart power grids" more intelligent?'
        ),
        React.createElement(
          'h3',
          null,
          'Your questions:'
        ),
        React.createElement(
          'p',
          null,
          'What questions do you have about climate change and CS? We will update the handout with answers!'
        ),
        React.createElement(
          'div',
          { 'class': 'twbs' },
          React.createElement('textarea', {

            placeholder: 'Type your questions here...',
            'class': 'form-control',
            id: 'exampleFormControlTextarea1',
            rows: '3' }),
          React.createElement(
            'button',
            {
              type: 'button', 'class': 'btn btn-primary',
              onClick: function onClick() {
                return _this4.askQuestion();
              }
            },
            'Ask question'
          )
        ),
        React.createElement('br', null),
        this.renderContentBar_Links(),
        this.renderClimateInComputing(),
        this.renderWhatWeKnow(),
        this.renderResourceUse()
      );
    }
  }, {
    key: 'renderWhatWeKnow',
    value: function renderWhatWeKnow() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'What do we know about climate Change?'
        )
      );
    }

    // Julia's new version - just uses links with hrefs instead of asking questions

  }, {
    key: 'renderContentBar_Links',
    value: function renderContentBar_Links() {
      var _this5 = this;

      var btnClass = "button btn btn-link";
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Skip to a section'
        ),
        React.createElement('br', null),
        React.createElement(
          'div',
          {
            className: 'twbs climate-flexContainer',
            style: { height: '90px' }
          },
          React.createElement(
            'a',
            {
              className: btnClass,
              href: '#handout-stats-sxn'
            },
            'What\'s knowable about climate?'
          ),
          React.createElement(
            'button',
            {
              type: 'button', className: btnClass,
              onClick: function onClick() {
                return _this5.askQuestion();
              }
            },
            'Energy use of our algorithms'
          ),
          React.createElement(
            'button',
            {
              type: 'button', className: btnClass,
              onClick: function onClick() {
                return _this5.askQuestion();
              }
            },
            'Psycology and ethics'
          ),
          React.createElement(
            'button',
            {
              type: 'button', className: btnClass,
              onClick: function onClick() {
                return _this5.askQuestion();
              }
            },
            'CS that helps'
          )
        )
      );
    }

    // Chris' original version that asks questions

  }, {
    key: 'renderContentBar',
    value: function renderContentBar() {
      var _this6 = this;

      var btnClass = "btn btn-link";
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Skip to a section'
        ),
        React.createElement('br', null),
        React.createElement(
          'div',
          {
            className: 'twbs climate-flexContainer',
            style: { height: '90px' }
          },
          React.createElement(
            'button',
            {
              type: 'button', className: btnClass,
              onClick: function onClick() {
                return _this6.askQuestion();
              }
            },
            'What\'s knowable about climate?'
          ),
          React.createElement(
            'button',
            {
              type: 'button', className: btnClass,
              onClick: function onClick() {
                return _this6.askQuestion();
              }
            },
            'Energy use of our algorithms'
          ),
          React.createElement(
            'button',
            {
              type: 'button', className: btnClass,
              onClick: function onClick() {
                return _this6.askQuestion();
              }
            },
            'Psycology and ethics'
          ),
          React.createElement(
            'button',
            {
              type: 'button', className: btnClass,
              onClick: function onClick() {
                return _this6.askQuestion();
              }
            },
            'CS that helps'
          )
        )
      );
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      switch (this.state.stage) {
        case 'splash':
          return this.renderSplash();
        default:
          return this.renderMainBody();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var body = this.renderBody();
      return React.createElement(
        'div',
        { className: 'climate-handout' },
        React.createElement(
          'h1',
          null,
          'Climate Change for CS106B Students'
        ),
        React.createElement(
          'p',
          { className: 'climate-subtleHeading' },
          React.createElement(FontAwesomeIcon, { style: { 'margin-right': '10px' }, icon: faCalendar }),
          'May 9th, 2019'
        ),
        React.createElement('hr', null),
        React.createElement(
          'center',
          null,
          React.createElement('img', {
            style: { 'width': '80%' },
            src: 'http://localhost:8000/component/img/splash.jpg'
          })
        ),
        React.createElement(
          'h3',
          null,
          'Bitcoin uses a country\'s worth of energy:'
        ),
        React.createElement(
          'p',
          null,
          'Did you know that the computers running Bitcoin\'s ',
          React.createElement(
            'span',
            { style: { 'color': 'black' } },
            'blockchain '
          ),
          'are using 2,000 kg of oil \uD83D\uDEE2\uFE0Fequivalent every year? That is more CO2 per year than the country of Chile \uD83C\uDDE8\uD83C\uDDF1. How do the ',
          React.createElement(
            'span',
            { style: { 'color': 'black' } },
            'decisions '
          ),
          ' we make as engineers and computationally-educated leaders affect the planet? What is blockchain? Read on!'
        ),
        body,
        React.createElement('br', null)
      );
    }
  }]);

  return ClimateHandout;
}(Component);

var domContainer = document.querySelector('#climateHandout');
ReactDOM.render(React.createElement(ClimateHandout, null), domContainer);