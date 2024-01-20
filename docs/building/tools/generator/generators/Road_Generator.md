# Road Generator

```
IMPORTANT!
For this to work, the build region server needs to have installed the Build Team Tools Plugin.
If this plugin isn't installed yet, please ask the build region owner to install it.
```


# Introduction
This page will explain how you can generate roads using the Road Generator.<br>

The Road Generator is designed to generate roads on the ground using a series of WorldEdit curve commands of varying radii. You can include various parameters with the command, for example, the number of lanes, road material, sidewalk material, and the size and gap of road lines. You do not need to fill all parameters, although the more parameters you include with the command, the closer the result will fit your requirements. If you don't know a parameter, just leave it out, and the system will select a value for you.<br>

The road generator generates roads by replacing the ground around a series of selected convex points with //curve. Therefore, it works best if you choose your WorldEdit selection carefully in relation to the terrain.

# Using the command

To generate a road, follow these steps:

1. Type `//wand` to get a WorldEdit wand, which we will use for selecting our points. Alternatively, you can use `//farwand` which will turn your currently held item into a wand which can be used from long distances.
2. Do `//sel convex` to enter the convex selection mode.
3. Select the starting point of your road by left clicking on the ground where you would like your road to start.
4. Right click at points along the middle of the road you would like to generate. Please note that you currently need to select a minimum of 3 total points in order for the road to generate.
5. Run the generator command, `/gen road <paramaters>`. Alternatively, you can enter the generator GUI with `/gen`.

# Parameters

To customize road generation, you may add parameters.<br>
All parameters are **optional** and if not set they will use a pre-determined fixed value.

## Size Parameters

![Road Size Parameters]()

### Lane Count [-c]

The Lane Count parameter defines the numbers of (two-sided) lanes to generate for the road. In other words, a lane count of **1** would generate a road with total 2 lanes.
To change the lane count, add the `-c` flag:
```
/gen road -c <count>
```
**Default:** 1

### Lane Width [-w]

The Lane Width parameter defines the width of each road lane in blocks.
To change the floor height of the building, add the `-w` flag:
```
/gen road -w <width>
```
**Default:** 4

### Lane Gap [-g]

The Lane Gap parameter defines the gap between the two sides of the road. This is useful for building highways or boulevards with a central reserve. Setting this parameter will generate a number of grass blocks in the middle of the road with a stone slab border.
To change the width of the grass area, add the `-g` flag:
```
/gen road -g <width>
```
**Default:** 0

### Road Marking Length [-ll]

The Road Marking Length parameter defines the length of each road line.
**NOTE:** Due to a quirk of WorldEdit, in order for road lines to generate correctly, ensure that your camera points along the direction of the road markings.
To change the length of the road markings, add the `-ll` flag:
```
/gen road -ll <length>
```
**Default:** 3

### Road Marking Gap [-lg]

The Road Marking Gap parameter defines the gap between each road line.
To change the road marking gap, add the `-lg` flag:
```
/gen road -lg <gap>
```
**Default:** 5

### Sidewalk Width [-sw]

The Sidewalk Width parameter defines the width of the sidewalk. This width excludes a line of stone slabs between the road and sidewalk, and the line of stone slabs surrounding the sidewalk.
To change the sidewalk width, add the `-sw` flag:
```
/gen road -sw <width>
```
**Default:** 0

## Block Parameters

![Road Block Parameters]()

### Road Material [-m]

The Road Material block defines the block used for the road's surface.
To change this, add the `-m` flag:
```
/gen road -m <id>
```
**Default:** Gray Concrete Powder (252:7)
To find the correct ID of the block you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)


### Road Marking Material [-lm]

The Road Marking material - this is the block used for the road lines.<br>
To change the road marking material, add the `-lm` flag:
```
/gen road -lm <id>
```
**Default:** White Concrete (251)<br>
To find the correct ID of the block you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)

### Sidewalk Material [-sm]

The block used for the sidewalk.
To change the sidewalk material, add the `-sm` flag:
```
/gen road -sm <id>
```
**Default:** Stone Slab (43)<br>
To find the correct ID of the block you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)

<br>
<br>