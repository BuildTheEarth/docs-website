# Field Generator

```
IMPORTANT!
For this to work, the build region server needs to have installed the Build Team Tools Plugin.
If this plugin isn't installed yet, please ask the build region owner to install it.
```


# Introduction
This page will explain how you can generate fields using the Field Generator.

You can include various parameters with the command, for example the crop type, growth stage,... You do not need to fill all parameters, although the more parameters you include with the command, the closer the result will fit your requirements. If you don't know a parameter, just leave it out, and the system will select a value for you.<br>

The Field Generator works by using a World Edit 2D Polygon selection (`//sel poly`).

# Preparation

Before generating the field, please follow these steps to ensure that the field generates without any issues:

2. Place 2 <img src="https://www.digminecraft.com/block_recipes/images/yellow_wool.png" width="16" height="16"> yellow wool blocks (ID: 35:4) inside the selection to indicate the direction of the lines if the crop type requires those (see [Crop Types](https://github.com/BuildTheEarth/BuildTeamTools/wiki/Crop-Types) for more information)
3. Create a 2D Polygon selection with World Edit using `//sel poly` which includes all the blocks you want the field to cover.

If you did everything correct, your selection should now look similar to this:
<br>
<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66461508/65c20ecc-6c8a-4843-8a59-a966fe05a537" width="500px">
<br>
Or if your chosen crop type requires lines, this:
<br>
<img src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66461508/d7101a67-a816-473b-88c4-5b64e89ef73c" width="500px">
<br>
<br>
<br>
<br>

To enter the generator GUI, enter:

```
/gen
```
Then, select the `Generate Field` option. The following pages will then allow you to set each of the parameters of your Field.


Alternatively, to generate a simple random field, enter:

```
/gen field
```

If you made a mistake you can undo the generation with:

```
/gen undo
```



# Parameters

To customize field generation, you may add parameters.<br>
All parameters are **optional** and if not set they will either use a random or fixed value.

### Crop Type [-t]

The Crop Type changes the main look of the field. To view a list of all availabe Crop Types, click [here](https://github.com/BuildTheEarth/BuildTeamTools/wiki/Crop-Types)

### Crop Stage [-s]

Some Crop Types have additional customisations options. These usually entail different growth stages. To view a list of crops and their stages, click [here](https://github.com/BuildTheEarth/BuildTeamTools/wiki/Crop-Types)

### Fence Blocks [-f]

Only applicable to the Crop Types "CATTLE" & "MEADOW"!

This parameter allows you to choose which blocks will be used as fence posts for the fence around these Field types.

To find the correct ID of the block(s) you want to use, click [here](https://www.digminecraft.com/lists/item_id_list_pc_1_12.php)