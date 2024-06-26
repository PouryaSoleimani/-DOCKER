<!-- ^ DOCKER TUTORIAL  -->
<!--? 1 - INSTALLATION :  -->
- take a look at {docs.docker.com} and download the docker installer {beta(ARM)} version

<!--? 2 - PULL , INSTALL AND RUN THE FIRST IMAGE :)  -->
- `docker run -d -p 8080:80 docker/welcome-to-docker` --> <use this code from the docs from DOCKER and it will run a simple little project on port:8080>

<!--? DOCKER DESKTOP  -->
- Now you can see the containers in the {DOCKER DESKTOP APP} and in the containers menu in the side bar  , from there you can check your running apps with their 
  status and many other informations about them .
- OR : you can type  <docker images> in the terminal to see the list of images that we have pulled from different sources to our DOCKER  

<!-- * RUNNING A PULLED IMAGE IN DOCKER -->
- To run a image which we have pulled from {DockerHub} Website or anywhere else , we must see the image document to find the running command : FOR EXAMPLE :
    `docker run --rm -it -p 80:80 yeasy/simple-web:latest`

- ALSO we can add a `-d` flag to the run command to run in {IN THE BACKGROUND} and let the cli be free for us for more commands , SO it will be : 
-   `docker run -d --rm -it -p 80:80 yeasy/simple-web:latest`

<!--~ RUNNING CONTAINERS LIST  -->
- to see the running containers list : USE => `docker ps`
- to see all containers including running and stopped containers : USE => `docker ps -a`
- to add a name for a container : USE => `--name {__NAME__}`

<!--! STOPPING A RUNNING DOCKER CONTAINER -->
- to STOP a running container : USE => `docker stop {__container-ID__}` , we can access the container ID in the running containers list when we run `docker ps`
  
<!--& STARTING AND RUNNING A CONTAINER -->
- to START a container that we have in our list : USE => `docker start {__container-ID__}` , AGAIN we can access the container ID in the running containers list when we run `docker ps`

<!--^ RESTARING A RUNNING CONTAINER -->
to RESTART a container that is running in docker : USE => `docker restart {__container-ID__}` , AGAIN we can access the container ID in the running containers list when we run `docker ps`

<!--! DELETING A CONTAINER -->
to DELETE a container , USE => `docker rm -f {__container-ID__}`

<!--& DOCKER IMAGES  -->
<!--? DOCKER DOCKERFILES  -->
<!--^ CLONE A REPO FROM GITHUB AND INIT DOCKER  -->
- to make a <DOCKER FILE> in a project , we create a file name exactly => `Dockerfile` , Capitalize and no spaces
- when we have a docker file in a directory , we can use the command `docker build .` in the directory , 
- in that case , docker will start to build our project , as we have set the steps in the <Dockerfile> : like => FROM node:18-alpine | COPY . . | ...

<!--! DOCKERIGNORE  -->
- just like <GIT> , we have <dockerignore> in DOCKER , and we can say what kind of files to ignore in docker .

<!--? READING LOGS  -->
- docker logs -f "CONTAINER NAME"
 
<!--* RUNNING MONGODB IN DOCKER (RUNNING THE MONGODB IMAGE)  -->
-`docker run -d -p 27017:27017 --name mongo mongo`
-> THE `-d` command in the code above is for `DETACH` the run , this causes the container to run in background 

<!--* CONNECTING MONGODB DATABASE TO A DOCKER CONTAINER  -->
- to connect a database like "MONGOBD" to our container , we must use `-e` command , this stands for <ENVIRONMENT>
and the variable that we have saved the database address in it is in the <.env> file in out directory : 
        `MONGODB_URI= mongodb://localhost:27017/zoodcode-duck-spawner`

====> so lets connect the mongodb database with the address above to our front-end , we run this command : 
          `docker run -d -e MONGODB_URI=mongodb://localhost:27017/zoodcode-duck-spawner -p 3000:3000 duck-spawner-api`

<!--? DOCKER NETWORKS  -->
- to create a network => `docker network create {network name}`
- to see the networks list => `docker network ls`
- to remove a network => `docker network rm {network name}`

//===>`docker run -d -e MONGODB_URI=mongodb://localhost:27017/zoodcode-duck-spawner -p 3000:3000 duck-spawner-api` :
in this example , we can assign our network (by name ) instead of localhost and docker will automatically use it 
like => `docker run -d -e MONHODB_URI=mongodb://myNetWorkName:27017/zoodcode-duck-spawner -p 3000:3000 duck-spawner-api`

<!--& DOCKER COMPOSE -->
