# Jira-integration-web

This project is client for [jira-integration-api](https://github.com/VladKachenya/tp-jira-integration-api) API. It uses: React (flux), TypeScript,  Webpack, Material-ui and Babel.

AVAILABLE ENDPOINTS

| method             | resource         | description                                                                                    |
|:-------------------|:-----------------|:-----------------------------------------------------------------------------------------------|
| `GET`              | `/`              | Home page                                                                       |
| `GET`              | `/about`      | About page                                                                         |    

# Getting Started
- Clone the repository
```
https://github.com/VladKachenya/tp-jira-integration-web.git
```

- Install dependencies
```
cd {project_path}
npm install
```

- Run the project in Webpack
```
npm start
```

- Build and run the project in JS
```
npm run build
npm run prod
```

- Run the project from web folder
```
cd {project_path}
npm run build
cd {project_path}/web
npm install
npm start
```

# Docker
This application can be deployed in Docker by node js.
For correct work needs set server address in "PROJECTS_SERVER_ADDRESS" constant in [src\constants\ApiConstants.ts](https://github.com/VladKachenya/tp-jira-integration-web/blob/master/src/constants/ApiConstants.ts) file:

```
...
const PROJECTS_SERVER_ADDRESS: string = 'http://192.168.99.100:3000';
...
```

This application can be deployed in Docker by node js of two ways. 

## Build and run in a docker

1. Open "Docker Quickstart Terminal"
2. Go to project folder:
```
cd {project folder}/tp-jira-integration-web
```
3. Make image:
```
docker build -t jira-integration-web/node .
```
4. Run conteiner:
```
docker run -d -p 8080:8080 jira-integration-web/node
```

## Run lightweight version in a docker

1. Go to .../tp-jira-integration-web console
2. Run "npm install"
3. Run "npm run build"
4. Open as administrator "Docker Quickstart Terminal"
5. Go to project /web folder:
```
cd {project folder}/tp-jira-integration-web/web
```
6. Make image:
```
docker build -t jira-integration-light-web/node .
```
7. Run conteiner:
```
docker run -d -p 8080:8080 jira-integration-light-web/node
```
