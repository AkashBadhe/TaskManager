# Task Manager App

  

## How to run the project

  

```bash

git clone 'https://github.com/AkashBadhe/TaskManager';

cd TaskManager

npm install

npm start

```

  

## App Demo

<img  src="/assets/TaskManagerDemo.gif"  alt="app demo"  width="90%"/>

  

## Switch Themes

<img  src="/assets/TaskManagerThemeChange.gif"  alt="app demo"  width="90%"/>

  
## Design
**Routing** - App uses [react-router](https://reacttraining.com/react-router/) for route management. Currently app has only 2 routes ('/' and 'board/baordId'). If needed Addition routes can be added in "src/routes/index.js" file.
**State Management** - App uses [Redux](https://redux.js.org/docs/introduction/) for state management. State object structure is as flows:

    {

		cardsById: {

			[cardId]: {

				title:  '',

				_id:  'cardId'

			}

		},

		listById: {

			[listId]: {

				title:  'List Title',

				_id:  'listId',

				cards: ['cardId1', 'cardId2']

			}

		},

		boardsById: {

			[boardId]: {

				title:  'Board Title',

				_id:  'boardId',

				boards: ['listId1', 'listId2']

			}

		}
	}

**Async action** - [Redux-thunk](https://github.com/reduxjs/redux-thunk) is used to handle Async actions.
<img src="/assets/redux-thunk-flow.gif" width="60%">
**Drag-Drop** - App uses "[React beautiful DND](https://github.com/atlassian/react-beautiful-dnd)" for drag drop operations.
**Styling** -  Most part of the app is styled with "[styled-components](https://styled-components.com/)" library. Support for "Material Ui" is added for future enhancements. 
**Themes**- App currently supports two themes "Light" and "Dark". Theme is created using "[styled-theming](https://github.com/styled-components/styled-theming)". To change the theme edit the file "src\components\Theme\index.js".
**Data Services** - All the data related oprations are kept in "[\src\services\index.js](https://github.com/AkashBadhe/TaskManager/blob/master/src/services/index.js)" file. Currently it implements the mock services which stores the data in browsers localStorage. This can be replaced with actual services wich will make api calls to getting and setting the data. 
  
  

## App Flow

**Home page** - Home page displays the dashboard where you can see the boards user has created. User can add new board from here. Board title is required to create new board. User can delete the particular board by clicking on cross button next to the title. On click on delete user will be asked for confirmation if he click on 'OK' that board will be deleted.

**Board** - When user clicks on board name user will be redirected to particulate boards pages. Boards page will enlist the Lists which user has created. User can add new Lists by clicking on "Add a new list" button.
 
**Lists** - Lists shows the different cards which user has added. User can create new cards by clicking on "Add new card" button. Lists can be moved across the board by drag-drop. User can reorder the lists by dragging the list at required place and dropping it there. List can be renamed by clicking on the title. List name should be unique in the board. List name can be saved by pressing Enter key. 
 
**Cards** - Cards can be added by clicking on "Add new card" button. User needs to provide card title and press "Enter" key or click on "Add" button to save the card. To edit the card click on edit icon inside the card box. To delete the card click on cross icon inside the card. User will be asked for confirmation before deleting the card. 

**Theme Switch**   - Theme switch is provided in the header to change the theme. By default app will load with 'Light' theme. If user selects Enable dark mode, dark mode will be enabled.

  

## Pending Items/ Improvements

 1. **Error handling** -  Currently app don't handle api level errors gracefully. This can me implemented in next release.
 2. **Loaders** - App don't show any loaders when there are async operations going on in background. 
 3. **Bugs** - Fixing UI bug and animation issues.
 