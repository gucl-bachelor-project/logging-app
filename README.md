# Logging application

This project contains the full logging application.

## High level overview of components

![Component overview](./docs/logging-component.png)

## Application

### REST API documentation

An OpenAPI specification of the REST API can be found here:
https://app.swaggerhub.com/apis-docs/gucl-bachelor/logging-app/1.0.0

### Ports

The application accepts incoming HTTP traffic on following ports:

-   **Development**: 9090
-   **Production**: 8080

## Installation prerequisites

In order to build and run the application locally on your machine, the following requirements must be met:

-   **OS**: macOS or Linux (tested on macOS 15.04 and Ubuntu 18.04.4).
-   **Software**:
    -   [GNU Make](https://www.gnu.org/software/make/) (version 3.81 =<).
    -   [Docker](https://docs.docker.com/install/) (version 19.03.8 =<).
    -   [Docker Compose](https://docs.docker.com/compose/install/) (version 1.25.3 =<).
    -   (Optionally) [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) (version 2.0 =<) for pushing artifacts to this project's Docker image registry and object storage.

## Developing locally

Execute the following command in this directory to build and start the application: `make dev`.  
[Nodemon](https://github.com/remy/nodemon), that is enabled by default, automatically restarts the application when file changes in the directory are detected. Thus, there is no need to rerun the `make dev` command whenever changes are made to application code.

## Build and publish production build

Execute the following commands in this directory to build and publish artifacts for production use: `make prod-build` and `make prod-push`.  
As of now, the artifacts are published to this project's Docker image registry and object storage.
