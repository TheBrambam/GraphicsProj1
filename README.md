Describe your project in detail:
  - Explain the features and controls
Overall, the application has the ability to move between different levels of the development.
It starts at Level 0, where you can move the object from left to right and zoom in and out. The object is a cube and was included as a class assignment.
<img width="1264" height="626" alt="image" src="https://github.com/user-attachments/assets/12894147-b45d-4282-9e34-3717daa02e76" />

Level 1 includes the rendered objects that will be used in the game. The user can see the mountains and cubes that are in the game, and they are able to pan around the rendered objects.
<img width="902" height="501" alt="image" src="https://github.com/user-attachments/assets/526a6afd-b7fb-42eb-b65b-5d3586b8ea1a" />
<img width="897" height="491" alt="image" src="https://github.com/user-attachments/assets/f651499c-7a80-404c-8884-7d64d47bbc0e" />


Level 2 includes drawing a pixelated line. The setup is for a straight line, but can be changed to have different coordinates. 
The more one plays with the coordinates, the more it will be evident that the line isn’t truly straight, but passes through different pixels and this is the best way that the application can draw a line.
<img width="466" height="272" alt="image" src="https://github.com/user-attachments/assets/ada490c7-dff9-4a4c-9c31-08158eaefde7" />
<img width="516" height="512" alt="image" src="https://github.com/user-attachments/assets/1cbc0bee-7e7d-4d32-9915-e41b321b7651" />

Level 3 includes the game itself. It will start in the 3D mode, but if the user wishes to transfer to the wireframe version and experience a similar version of Nintendo’s Virtual Boy graphics, they can press the T key on their keyboard.
The game will then move to a wireframe version and is still playable. The game will appear to be faster with all of the wireframes moving, but the speed remains unadjusted.
<img width="968" height="583" alt="image" src="https://github.com/user-attachments/assets/9b9ff833-e94c-4eeb-add9-3673406508f7" />
<img width="947" height="561" alt="image" src="https://github.com/user-attachments/assets/6d75f0ba-a3aa-4fe5-8160-a64534fd52f4" />


Explain how you implemented this application, connecting the implementation to the course concepts (pinhole camera, 3d objects as vertices edges, line drawing, triangle drawing)
 -Pinhole camera for the ground moving
 -Triangle drawing for the mountains in the background
 -Cube drawing function used the line drawing and vertices edges from class
 -Two versions to see the difference

Future work
The first thing that I would want to implement would be where the character collision is. When I was testing the character location, when it would appear that the object had passed, I would move the character back to its original position, only to have the game end because the character collided with the top of the flat object, rather than be behind it similar to other infinite runners. This came from the original implementation with a 2D side-scroller that the code was derived from, because the top and bottom of the screen were the collision points and that’s what was taken as the base for the cubes.
