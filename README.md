# robot_webapp
A web application to control, visualize the mapping and the navigation

<!-- USAGE -->
## Usage
1. Run the web server node
```sh
cd ~/robot_control_server/robot_webapp/
node server.js
```
2. In bumperbot_ws
```sh
cd ~/bumperbot_ws/
```
3. Run the rosbridge server
```sh
ros2 launch bumperbot_webapp rosbridge_launch.py
```
4. Launch the Gazebo simulation
```sh
ros2 launch bumperbot_bringup simulated_robot.launch.py use_slam:=true world_name:=small_house
```
5. Launch the page in web browser
```sh
http://localhost:3000/
```