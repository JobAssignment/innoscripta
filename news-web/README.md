# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

#

# News Web App

This is a React-based web application for displaying news.

## How to Run Using Docker

### Prerequisites

Before you begin, make sure you have Docker installed on your machine. You can download Docker from [https://www.docker.com/get-started](https://www.docker.com/get-started).

###Simply Run the doccker-compose file

```
docker-compose up
```

**If you need to ruse diffrent port change the docker-compose in ports section:**

**If you need to rebuild the image after making changes to your code or dependencies, you can use:**

```
docker-compose up --build

```

**To stop the container, you can use:**

```
docker-compose down
```

### bellow is more to show Steps if you dont want to use docker-compose

1.  **Build the Docker Image:**
    Open a terminal in the project's root directory and run the following command to build the Docker image:
    ```bash
    docker build -t news-web .
    ```
2.  **Run the Docker Container:**
    Once the image is built, run the Docker container with the following command:
    `        docker run -p 8081:3000 -d news-web
       `
    **Access the Application:**
    Open your web browser and navigate to http://localhost:8080 to access the React application running inside the Docker container.
    `bash
    # Example:
    # http://localhost:<local_port>
    http://localhost:8080
    `
    **Problem you may face in Docker**
    run cmd as admin and navigate to the app src
    you can use the follow command

```
docker ps
```

will display the containers running get id and then

```
docker stop  id Of Container
```

```
docker ps -a | grep 46d7111b98b1
```
