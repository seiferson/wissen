# Wissen
-----

[![Build Status](https://travis-ci.org/Seiferxx/wissen.svg?branch=master)](https://travis-ci.org/Seiferxx/wissen)

__Personal development project__

This project features the following:
* REST API for personal finance management
* REST API for personal goals and habits tracking and management
* Web page interface to interact with internal components
* Scheduled tasks using spring scheduler

__Frontend technologies:__
* HTML 5
* Semantic UI http://semantic-ui.com
* Javascript
* NPM and Node
* Webpack
* React
* Babel

__Backend technologies:__
* Java 1.8
* Spring framework 2.0.3
	* Spring data rest
	* Spring security
	* Spring data mongo
	* Spring actuator
* Maven
* Embedded flapdoodle mongo database https://github.com/flapdoodle-oss/de.flapdoodle.embed.mongo

-----
## Install and run

Run with command: __mvn clean spring-boot:run__

Access URL: http://localhost:8080/

API access URL: http://localhost:8080/api

----
## Setting up on local mongo db

Change preferences on scr/main/resources/application.properties file

```
spring.data.mongodb.host = localhost
spring.data.mongodb.port = 27017
spring.data.mongodb.database = wissen
```

Comment on pom.xml the following
```
<!-- dependency>
  <groupId>de.flapdoodle.embed</groupId>
  <artifactId>de.flapdoodle.embed.mongo</artifactId>
 </dependency -->
```
