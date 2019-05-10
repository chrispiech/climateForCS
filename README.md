## To install dependencies
```
> cd handout/component
> npm install
```


## To start the handout server locally:
```
> cd handout/component
> python3 runServer.py
```



## To run demo webpages open:
`demoHost/index.html`
or
`cs109Host/handouts/climate.html`



## To edit the handout
From handout/component run:
```
> npx babel --watch src --out-dir . --presets react-app/prod 
```
*Make changes to handout/climate.js.*
```
> webpack ./climate.js -o bundle.js
```