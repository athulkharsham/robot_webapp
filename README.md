# robot_webapp
A web application to control, visualize the mapping and the navigation

<!-- USAGE -->
## Usage
1. Enter the web server directory
```sh
cd ~/robot_control_server/robot_webapp/
```
2. Run the server
```sh
node server.js
```
3. In bumperbot_ws
```sh
cd ~/bumperbot_ws/
```
4. Run the rosbridge server
```sh
ros2 launch bumperbot_webapp rosbridge_launch.py
```
5. Launch the Gazebo simulation
```sh
ros2 launch bumperbot_bringup simulated_robot.launch.py use_slam:=true world_name:=small_house
```
6. Launch the page in web browser
```sh
http://localhost:3000/
```