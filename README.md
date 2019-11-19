# MTM Server
Microsoft tag manager server. It is responsible for storing and processing user defined tags. It render all tags to a script file once user publish, which will then client has to configure for injection in to target client website

#### Setup and build
```
yarn install
yarn build
yarn watch
```

#### Test Target Website 
Open link in browser

[http://localhost:9090](http://localhost:9090)

#### Tags (PUT, POST, GET)

[http://localhost:9090/tags](http://localhost:9090/tags)


#### Triggers (PUT, POST, GET)

[http://localhost:9090/triggers](http://localhost:9090/tags)

#### Generated script once publish

[http://localhost:9090/script](http://localhost:9090/script)
