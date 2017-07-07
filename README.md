# NativeScript JavaScript Master Detail Template

## Intro - TODO

## Screenshots
<img src="/tools/assets/master-detail-app-ios.png" height="400" /> <img src="/tools/assets/master-detail-app-android.png" height="400" />

## Key Features
- Master-detail-edit interface.
- Firebase database integration.
- Customizable theme.
- Code comments for faster understanding of the code.
- Best practice UX and design.

## Quick Start
Execute the following command to create an app from this template:

```
tns create my-app-name --template https://github.com/NativeScript/template-master-detail
```

## Walkthrough

### Architecture
The template has the following pages:
- `/cars/cars-list-page.js` - the master list page. It gets the data and displays it in a list. On item tap, it navigates to the item details page.
- `/cars/car-detail-page/car-detail-page.js` - the item details page. Displays the details of the tapped item. Has an `Edit` button that leads to the edit page.
- `/cars/car-detail-edit-page/car-detail-edit-page.js` - the item details edit page. Provides edit options for the selected item. The `Done` button saves the changes.

There is one model to represent the data items:
- `/cars/shared/car-model.js`

### Firebase integration
The template uses the [{N} Firebase plugin](https://github.com/EddyVerbruggen/nativescript-plugin-firebase). The initialization is done before the app starts in the `/app.js` file. The initialization script is located at `/shared/firebase.common.js`.

### Styling
This template is set up to use SASS for styling. All classes used are based on the [{N} Theme](https://docs.nativescript.org/angular/ui/theme.html#theme). Check it out to see what classes you can use on which component.

It has 4 global style files that are located at the root of the app folder:
- `_app-variables.scss` - holds the global SASS variables that are imported on each component's styles.
- `app.scss` - the global common style sheet. These style rules will be applied to both Android and iOS.
- `platform.android.scss` - the global Android style sheet. These style rules will be applied to Android only.
- `platform.ios.scss` - the global iOS style sheet. These style rules will be applied to iOS only.

Each component has 3 style files located in the its folder:
- `_page-name.scss` - the component common style sheet. These style rules will be applied to both Android and iOS.
- `page-name.android.scss` - the component Android style sheet. These style rules will be applied to Android only.
- `page-name.ios.scss` - the component iOS style sheet. These style rules will be applied to iOS only.

## Get Help
The NativeScript framework has a vibrant community that can help when you run into problems.

Try [joining the NativeScript community Slack](http://developer.telerik.com/wp-login.php?action=slack-invitation). The Slack chat is a great place to get help troubleshooting problems, as well as connect with other NativeScript developers.

If you have found an issue with this template, please report the problem in the   [Issues](https://github.com/NativeScript/template-master-detail/issues).

## Contributing

We love PRs, and accept them gladly. Feel free to propose changes and new ideas. We will review and discuss, so that they can be accepted and better integrated.
