![example workflow](https://github.com/Relativiteit/ros-robot-control-dashboard/actions/workflows/learn-github-actions/badge.svg)

# ROS Robot Control Dashboard

This repository contains the source code for a web-based robot control dashboard that interfaces with the Robot Operating System (ROS). The project consists of a frontend application built with React and TypeScript and a backend API developed using NestJS.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14.x or higher): https://nodejs.org/
- Yarn (v1.x): https://classic.yarnpkg.com/
- ROS 2 (compatible version): http://wiki.ros.org/

### Installation

1. Clone the repository:

`git clone` https://github.com/Relativiteit/ros-robot-control-dashboard.git

2. Change into the project directory:
`cd ros-robot-control-dashboard`

3. Install frontend dependencies:
`cd frontend`
`yarn install`

4. Install backend dependencies:
`cd ../backend/robot-control-api`
`yarn install`

5. Set up ROS 2 in a Docker container:

- Install Docker on your machine if you haven't already: https://docs.docker.com/get-docker/
- Pull the official ROS 2 Docker image (replace `<ros2_distro>` with the desired ROS 2 distribution, such as `foxy`):
  ```
  docker pull osrf/ros:<ros2_distro>-desktop
  ```
- Create a `Dockerfile` in your project's root directory with the content provided in the "Setting up ROS 2 in a Docker container" section below.
- Build the Docker image:
  ```
  docker build -t ros-robot-control-dashboard .
  ```
- Run the Docker container, mounting your project directory to the container:
  ```
  docker run -it --rm --name ros-robot-control-dashboard -v "$(pwd)":/ros_ws/src/ros-robot-control-dashboard ros-robot-control-dashboard
  ```



## Usage

1. Start the frontend development server:
`cd ../../frontend`
`yarn start`


This will open the dashboard in your web browser at http://localhost:3000.

2. Start the backend development server:
`cd ../backend/robot-control-api`
`yarn start`


The API server will run on http://localhost:5000.

3. Connect your ROS-enabled robot and configure the appropriate settings in the dashboard and backend API.

## Contributing

Contributions to this project are welcome! Please feel free to open issues or submit pull requests with your improvements and bug fixes.

## Setting up ROS 2 in a Docker container

Create a `Dockerfile` in your project's root directory with the following content :

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.




