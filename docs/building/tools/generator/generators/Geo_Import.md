# Geo Import

```
IMPORTANT!
For this to work, the build region server needs to have installed the Build Team Tools Plugin.
If this plugin isn't installed yet, please ask the build region owner to install it.
```


This module offers commands that let you **Copy&Paste georeferenced line, point and surface measurements** (for example from Google Earth) directly into Minecraft. Instead of repeated sequences of "copy location from Google Maps, /tpll, //line", you can just change a whole lot of blocks with a single command.

Behind the scenes, the georeferenced data is encoded in KML format, which means you can also Copy&Paste data from KML files with this method.

# Workflow
* Create a (2D or 3D) path or polygon measurement in Google Earth Pro (See [here (for example)](https://www.gearthblog.com/blog/archives/2015/02/measuring-google-earth-pro.html) an explanation on how to do that. It is really simple, just a few clicks.
* Copy the measurement (Ctrl+C or right-click=>Copy)
* enter the command (/geopath, /geopoints or /georing) in Minecraft. Details on how they are different are explained below.
* a Command Block will appear in front of you.
* Open the Command Block (right-click) and paste the clipboard contents into the text field.
* Change the Block activation mode from "requires Redstone" to "Always active"
* Confirm with "Done"

# Command details and options
* **/geopoints** Creates a block for each measurement point (clicked positions)
* **/geopath** Creates blocks for measurement points (clicked positions) and at interpolated positions (same as the //line command).
* **/georing** Gives the same result as /geopath, but will additionally always connect the first and last point with a line.
* By default, the new blocks will be created will have the type "bricks". To select another block type, input the desired block type as a command argument (for example "/geopoints gold_blocks"). Tab-Completion is available for the block type argument.
* Use the optional command argument "-extend:<block type name>" to also fill the vertical space between terrain/ground and the the calculated points/lines.
* The command will not create blocks in unloaded chunks. A warning is issued if all or some of the block positions were invalid.
* The command will not create blocks further than 1.000m away from the player. A warning is issued if all or some of the block positions were invalid.



# Undo
To revert the changes made by this process, use the command "**/kml undo**". "/geopoints undo" or "/geopath undo" also works. 

