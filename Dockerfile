FROM osrf/ros:humble-desktop

# Update and install required packages
RUN apt-get update && apt-get install -y \
    python3-rosdep \
    python3-rosinstall \
    python3-rosinstall-generator \
    python3-wstool \ 
    build-essential

# Initialize rosdep
RUN if [ ! -f /etc/ros/rosdep/sources.list.d/20-default.list ]; then \
        rosdep init; \
    fi && \
    rosdep update


# Create a workspace and clone your project 
RUN mkdir -p /ros_ws/src
COPY . /ros_ws/src

# install dependencies 
RUN /bin/bash -c  "source /opt/ros/humble/setup.bash && \
    cd /ros_ws && \
    rosdep install --from-paths src --ignore-src -r -y"

# Build the workspace
RUN /bin/bash -c  "source /opt/ros/humble/setup.bash && \
    cd /ros_ws && \
    colcon build"

# Source the workspace 
RUN echo "source /ros_ws/install/setup.bash" >> ~/.bashrc

CMD ["bash"]