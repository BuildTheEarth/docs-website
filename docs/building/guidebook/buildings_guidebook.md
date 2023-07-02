---
sidebar_position: 2
title: Building Guidebook
---
# Building guidebook

## Teleporting with TPLL

To travel to different places in the world we will use the TPLL command. This command takes real-world coordinates and using some mathematical equations converts this to the corresponding location in the BTE world, and then teleports you there.

Here is how you use it:

1. Open Google Maps by clicking [here](https://www.google.com/maps)
2. Use the search bar (write in an address/location and press enter) to find the building you want to build.

    ![](https://media.discordapp.net/attachments/1096118472909533368/1121212261906780293/googlemapssearch.png?width=1709&height=905)
3. Navigate the map by dragging and scrolling
4. After navigating to your location, right click a spesific spot where you will teleport to.

    ![](https://media.discordapp.net/attachments/1096118472909533368/1121551115335512274/eiffeltowergooglemapsedit.png?width=1709&height=905)
5. Left click the coordinates in the first row in the pop-up.

    ![](https://media.discordapp.net/attachments/1096118472909533368/1121552593760567376/eiffeltowergooglemapsclickcoordiantes.png?width=1709&height=905)
6. In Minecraft, write "/tpll" then press `CTRL + V` to paste the coordinates, then press `Enter`

    ![](https://media.discordapp.net/attachments/1096118472909533368/1121554927639072859/tpllminecraftedit.png?width=1664&height=905)
7. After waiting for a bit, you will be teleported to your location!

    ![](https://media.discordapp.net/attachments/1096118472909533368/1121555911937364049/minecraftatlocation.png?width=1692&height=905)

## Making the shell part 1: Making the building outline

The first step to making any building is building the building footprint, or what we call the outline. By making this first, we can extend these into walls and then make a roof on top.

If you have watched some of PippenFTS' old videos you might wonder "why not just use the brick outline?". In later times we found out that the brick outlines are not accurate, and therefore we make our own.

Here is how you do it:

### With 3D data

1. In Google Maps, go to one of the building you want to build
2. Click on Layers in the bottom-left area of your map.

    ![](https://media.discordapp.net/attachments/1096118472909533368/1122972729369436291/how-to-make-google-maps-3D-layers.webp)
3. Click on More.

    ![](https://media.discordapp.net/attachments/1096118472909533368/1122972730472550580/how-to-make-google-maps-3D-more.webp)
4. Click on Satellite and ensure that Globe View is checked. You can now get an angled view by holding shift while dragging. If you still see flat buildings go down to Without 3D data (<-- INSERT LINK) below

    ![](https://media.discordapp.net/attachments/1096118472909533368/1122972729855979670/how-to-make-google-maps-3D-globe-view.webp)
5. Remove all nearby trees with the command `//replacenear 40 log,leaves air`

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123268394796462191/replacenar.png?width=1692&height=905)
6. Use the TPLL command you used above to teleport to each corner of the building, and make sure to place a block where you land in Minecraft.

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123268340715110412/bergenbuildtpllpoinjts.png?width=1793&height=905)

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123269034994044978/tpllinminecraft.png?width=1692&height=905)
7. In Minecraft, do the command `//wand`. This should give you a wooden axe

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123285205143277722/wandinmc.png?width=1692&height=905)
8. With your axe in hand, left click one of the blocks you placed, then right click one of the blocks next to it.

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123290504398905404/2023-06-27_18.29.03.png?width=1255&height=671)

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123290504906407976/2023-06-27_18.29.15.png?width=1255&height=671)
9. Execute the command `//line wool` (Note: Minecraft block id's are quite different in 1.12, go to [this list](https://minecraft-ids.grahamedgecombe.com/) to see a list of id's). 

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123291419482804384/2023-06-27_18.38.14_2.png?width=1255&height=671)
10. Now do this with all the points so that you have a full shape. To get rid of the selection box do `//desel`. Note: You might ask "Why is my building no straight? Can i rotate it to make it easier to build?". No. "Why?". Most buildings are not on a straight north-south rotation, in additon to the BTE map having a weird rotation some places. This means that we have to build them diagonally, but don't worry, it's not as hard as you think. [Here is an interesting video from PippenFTS about the problem](https://www.youtube.com/watch?v=5o8Psc6FvZ4&pp=ygUYYnVpbGQgc3RyYWlnaHQgcGlwcGVuZnRz)

    ![](https://media.discordapp.net/attachments/1096118472909533368/1123291420346814514/2023-06-27_18.38.52.png?width=1255&height=671)
11. place blocks under yay will write again im tired

### Without 3D data

## Making the shell part 2: Making the building walls

### With 3D data

### Without 3D data

## Making the shell part 3: Making the building roof

### With 3D data

### Without 3D data

##