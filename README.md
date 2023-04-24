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
- ROS (compatible version): http://wiki.ros.org/

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

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.




