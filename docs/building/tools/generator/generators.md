# Generators

```
IMPORTANT!
For this to work, the build region server needs to have installed the Build Team Tools Plugin.
If this plugin isn't installed yet, please ask the build region owner to install it.
```

This module lets you generate complex structures using server side scripts.
If used correctly it allows you to speed up your building process by up to **70%-80%** and skip the boring and repetitive parts of the construction process.<br><br>
Especially the building time of villages can be reduced a lot because many buildings are rectangle residential houses with a similar style and the roads are very basic. The generator allows you to create entire districts in no time including large Fields and Forests. <br><br>
For example the House Generator creates the shell, windows and roof of a given Building outline with a few clicks.
Just by entering a few parameters you can quickly generate buildings, roads, railways, forests and more.

## Components
<img align="center" width="16px" src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/556eb24d-1b1e-43f3-a86e-f12f7e16f36e"/> [House Generator](https://github.com/BuildTheEarth/BuildTeamTools/wiki/House-Command)<br/>
<img align="center" width="16px" src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/45006492-e26e-4faa-ac01-87c7b2f4df67"/> [Road Generator](https://github.com/BuildTheEarth/BuildTeamTools/wiki/Road-Command)<br/>
<img align="center" width="16px" src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/cb6814d3-a3a1-41c6-ab59-5c38585cf776"/> [Railway Generator](https://github.com/BuildTheEarth/BuildTeamTools/wiki/Rail-Command)<br/>
<img align="center" width="16px" src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/633799aa-3bd4-4ac5-99ba-c26a222f48e5"/> [Tree Generator](https://github.com/BuildTheEarth/BuildTeamTools/wiki/Tree-Command)<br/>
<img align="center" width="16px" src="https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/3d26c10e-75d4-48d5-a8fb-ae367055f2e7"/> [Field Generator](https://github.com/BuildTheEarth/BuildTeamTools/wiki/Field-Command)<br/>

## How to start

Each generator can be used with an interactive **UI** or via **Command**.

### Generate with UI

The **UI** lets you select one of the generators and set the necessary parameters by clicking through the inventories.<br/>
Especially for new builders this is an easy way to select all necessary parameters by selecting the best option one after another.<br/>
For this option you don't need much background knowledge. All you need to do is open Google Maps and compare the options in the UI with the building that you want to generate.<br/><br/>
Please note that this method is used to generate basic buildings.<br/>
Some more specific and advanced parameters might not be included in the UI and can only be executed via Command.<br/><br/>

To open up the UI, simply enter:
```
/gen
```

![image](https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/11adb099-45ba-4570-a344-10e445fd2dbc)


### Generate with Commands

With **Commands** you can further customize the parameters.<br/>
This makes it possible to create more precise buildings and a much quicker workflow.<br/><br/>

Some generators have dozens of parameters. But you don't have to specify all of them to generate a building.<br>
All parameters that you don't specify will use a default or random value.<br>
Take a look a the specific parameter to see what its default value will be.<br/><br/>

The general structure of the command looks like this:
```
/gen <component> -parameters
```

Further instructions for the UI and the Command Usage can be found in the description for each specific Component.

![image](https://github.com/BuildTheEarth/BuildTeamTools/assets/66020920/1bc3d36c-1710-4d5a-869f-f85f22e8fb93)

