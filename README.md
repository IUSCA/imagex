# ImageX
Central repository for the installation of the ImageX 3.0 imaging portal stack

## What this does
This is a set of scripts that will clone the appropriate repos and setup a docker network.  Running docker-compose against the provided config file will build and launch a set of internetworked docker containers which comprise the ImageX stack.  

## Installation

* Prerequisites:  Docker, docker-compose, nginx

- Clone this repo
- Run the docker-network.sh script
- Run the get-repos.sh script
- Edit the config files
- Navigate to http://localhost to verify the installation


## Associated Github repos

- https://github.com/IUSCA/imagex-ui
- https://github.com/IUSCA/imagex-api
- https://github.com/IUSCA/imagex-data
- https://github.com/IUSCA/imagex-importer
