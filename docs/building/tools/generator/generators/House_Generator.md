# House Generator

```
IMPORTANT!
For this to work, the build region server needs to have installed the Build Team Tools Plugin.
If this plugin isn't installed yet, please ask the build region owner to install it.
```


# Introduction

![House Generator (compressed)](https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/c78829bd-656a-48b2-beae-0b4b7f9f20c0)

This page will explain how you can generate building shells using the House Generator.<br>
For an overview, please check out the [Generators]() page

The House Generator is designed to generate a basic shell of a building which can later be improved and detailed by hand. You can include various parameters with the command, for example, the building's height, wall material, window size and roof type. You do not need to fill all parameters, although the more parameters you include with the command, the closer the result will fit your requirements. If you don't know a parameter, just leave it out, and the system will select a value for you.<br>

The house generator works by using a brick outline of the building on the ground. You may choose to use the building outlines generated during world generation, or alternatively you may create your own building outlines.

# Preparation

Before generating the building, please follow these steps to ensure that the house generates without any issues:

1. If the building's outline is not made out of <img src="https://www.digminecraft.com/block_recipes/images/bricks.png" width="16" height="16"> Brick Blocks (ID: 45) make sure to change it to this block.
2. Place a <img src="https://www.digminecraft.com/block_recipes/images/yellow_wool.png" width="16" height="16"> Yellow Wool Block (ID: 35:4) in the center of the outline.
3. Create a selection with WorldEdit that includes the entire outline. Cuboid and Polygon selections are possible.

If you did everything correct, your selection should now look similar to this:
<br>
<br>
<img src="https://user-images.githubusercontent.com/66020920/197909354-b86c5b53-d53e-4c5b-a0bc-5ade25d15ed2.png" width="600px">
<br>
<br>
<br>
<br>

To enter the generator GUI, enter:

```
/gen
```
Then, select the `Generate House` option. The following pages will then allow you to set each of the parameters for your house


Alternatively, to generate a simple random house, enter:

```
/gen house
```

If you made a mistake you can undo the generation with:

```
/gen undo
```

---

# Extras

## Custom Windows

By default, windows are generated all over the place.<br>
Most of the times you need to customize this window placements to make them fit the original building.

To do that just place <img src="https://www.digminecraft.com/block_recipes/images/red_wool.png" width="16" height="16"> red wool on the outline wherever windows should be generated:<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/fdd688ef-6201-4c7b-86c4-ce9d11d4393d" width="600px">


## Gable Roofs
There are many roof types in the world. This generator is able to generate the most common roof types. <br>
Gable roofs are a popular roof style for houses, characterized by two sloping sides that come together at a ridge, creating a triangular shape on each end of the home.

![Pointed Roofs](https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/98084a81-bea7-42e7-a132-6765427a826b)

<details>
<summary>More Info</summary>

Before generating a gable roof, you need to figure out which roof type you want to use.

We currently support those roof types:
- `FLAT` - A flat roof surrounded with carpet
- `FLATTER_SLABS` - A flat gable roof made out of slabs
- `MEDIUM_SLABS` - A medium steep gable roof made out of slabs
- `STEEP_SLABS` - A steep gable roof made out of slabs
- `STAIRS` - The steepest gable roof made out of stairs

More information about Roof Types can be found [here](https://github.com/BuildTheEarth/BuildTeamTools/wiki/House-Command/_edit#roof-type--rt).

By default the Gable Roof is closed on all sides. It is possible though to open it up on any side.<br>
To do that you need to define where on the outline this roof should be open and where not.<br>
For that you need to place <img src="https://www.digminecraft.com/block_recipes/images/lime_wool.png" width="16" height="16"> lime wool on the corners of the roof and one <img src="https://www.digminecraft.com/block_recipes/images/blue_wool.png" width="16" height="16"> blue wool inside.

The blue wool doesn't need to be exactly in the middle, anywhere inside the other two lime wools is enough as long as they are not right next to each other.

<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/57e3d2d1-d8bb-4a43-b6ad-2326af16a66c" width="600px">

#### Porches

Porches are external structures attached to buildings, typically positioned at the entrance of a house or building.<br>
They serve as transitional spaces between the indoors and outdoors, often providing a covered area for relaxation, socializing, or enjoying the view.

If they have another smaller gable roof you can build them the same way as a normal gable roof.<br>
You can add as many gables as you want:<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/0a9d202a-7177-423d-a97a-cffa4dc05c7f" width="600px">

#### Shed Roof

A shed roof is a single sloping roof surface, often not attached to another roof surface.<br>
This simple and functional design is commonly used for smaller buildings and additions, offering a straightforward yet effective solution for roofing needs.

You can open up the roof to any side you want. Just make sure that there are two lime wools and at least one blue wool to mark the corners of the roof.
If the lime wools are two far away its better to place multiple blue wools to make them spread effectively:

NO IMAGE AVAILABLE YET
</details>

## Balconies

Balconies are another important aspect of House Generation. <br>
Generating Balconies is pretty straightforward. Just place <img src="https://www.digminecraft.com/block_recipes/images/orange_wool.png" width="16" height="16"> orange wool next to the building outline wherever a balcony should be generated.

This example shows how its done:<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/84911616-820d-490b-bb0b-a9db99fcdc56" width="600px">

---

# Parameters

To customize building generation, you may add parameters.<br>
All parameters are **optional** and if not set they will either use a random or fixed value.

## Special Parameters

### Roof Type [-rt]

<details>
<summary>More Info</summary>

To change the roof type of the building, add the -rt flag:
```
/gen house -rt <type>
```
**Default:** A random roof type <br>

**Roof Types**:
- `FLAT` - A flat roof surrounded with carpet
- `FLATTER_SLABS` - A flat gable roof made out of slabs
- `MEDIUM_SLABS` - A medium steep gable roof made out of slabs
- `STEEP_SLABS` - A steep gable roof made out of slabs
- `STAIRS` - The steepest gable roof made out of stairs

**`FLAT` Roof Type:**<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/be5d629b-7ef7-46fa-82b7-0852bf8d4d41" width="600px">

**`FLATTER_SLABS` Roof Type:**<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/7745d52c-3ffa-4239-98b9-0b12d5662de6" width="600px">

**`MEDIUM_SLABS` Roof Type:**<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/1a1f9cc6-9d1e-4f79-af88-28aa97f1e184" width="600px">

**`STEEP_SLABS` Roof Type:**<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/87b074d6-037a-47fb-8001-2f9febfc9a50" width="600px">

**`STAIRS` Roof Type:**<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/12fb31cc-d82d-4e54-8a4e-6afbedff03cd" width="600px">

</details>

## Block Parameters

### Wall Block [-w]

<details>
<summary>More Info</summary>

The Wall Block defines the main color of the facade of the building.<br>
To change the building's wall material, add the `-w` flag:
```
/gen house -w <id>
```
**Default:** A random wall block <br>
To find the correct ID of the block you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)
</details>

### Roof Block [-r]

<details>
<summary>More Info</summary>

The Roof Block of the building. Please note that some roof types will have a limited block selection. <br>
For the `FLAT` roof type use full blocks.<br>
For the `SLABS` roof type use slabs.<br>
For the `STAIRS` roof type use stairs.<br>
To change the building's roof material, add the `-r` flag:
```
/gen house -r <id>
```
**Default:** A random roof block depending on the selected roof type<br>
To find the correct ID of the block you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)
</details>

### Base Block [-b]

<details>
<summary>More Info</summary>

The Base Block defines the base at the bottom of the building.<br>
To change the base color of the building, add the `-b` flag:
```
/gen house -b <id>
```
**Default:** A random base block <br>
To find the correct ID of the block you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)
</details>

### Window Block [-wd]

<details>
<summary>More Info</summary>

The Window Block defines the block that is used for the windows of the building.<br>
To change the Window color of the building, add the `-wd` flag:
```
/gen house -wd <id>
```
**Default:** 95:15 (*minecraft:black_stained_glass*) <br>
To find the correct ID of the block you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)
</details>
<br>
<br>


## Size Parameters

<img src="https://user-images.githubusercontent.com/66020920/167269529-da44ce09-e2a4-4b02-819f-5a36ac7f1303.png" width="600px">

### Floor Count [-fc]

<details>
<summary>More Info</summary>

The Floor Count Parameter defines the numbers of floors of the building.<br>
To change the floor count, add the `-fc` flag:
```
/gen house -fc <amount>
```
</details>

### Floor Height [-fh]

<details>
<summary>More Info</summary>

The Floor Height Parameter defines the height of each floor of the building.<br>
To change the floor height of the building, add the `-fh` flag:
```
/gen house -fh <height>
```
**Default:** 3
</details>

### Base Height [-bh]

<details>
<summary>More Info</summary>

The Base Height Parameter defines the height of the base at the bottom of the building.<br>
To change the height of the base of the building, add the `-bh` flag:
```
/gen house -bh <height>
```
**Default:** 1
</details>

### Window Height [-wdh]

<details>
<summary>More Info</summary>

The Window Height Parameter defines the height of the windows of the building.<br>
To change the window height of the building, add the `-wdh` flag:
```
/gen house -wdh <height>
```
**Default:** 2
</details>

### Window Width [-wdw]

<details>
<summary>More Info</summary>

The Window Width Parameter defines the width of the windows of the building.<br>
To change the window width of the building, add the `-wdw` flag:
```
/gen house -wdw <width>
```
**Default:** 2
</details>

### Window Distance [-wdd]

<details>
<summary>More Info</summary>

The Window Distance Parameter defines the spacing between the windows of the building.<br>
To change the window distance of the building, add the `-wdd` flag:
```
/gen house -wdd <distance>
```
**Default:** 2
</details>

### Max Roof Height [-mrh]

<details>
  <summary>More Info</summary>

The Max Roof Height Parameter defines the maximum height of the roof of the building.<br>
This can be useful for large buildings with a gable roof that should not extend a certain height.<br>
To change the maximum roof height of the building, add the `-mrh` flag:
  ```
  /gen house -mrh <distance>
  ```
**Default:** 10
</details>