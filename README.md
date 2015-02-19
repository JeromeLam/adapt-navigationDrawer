#adapt-navigationDrawer [![Build Status](https://travis-ci.org/JeromeLam/adapt-navigationDrawer.svg?branch=master)](https://travis-ci.org/JeromeLam/adapt-navigationDrawer)

An Adapt Learning Framework extension that provides a sliding drawer for the navigation bar.

##Installation

Copy the adapt-navigationDrawer folder into /src/extensions.

##Usage

Once installed, the navigationDrawer extension can be used to provide a sliding drawer for the navigation bar.

To setup the navigation bar, add the ``_navigationDrawer`` attribute to course.json:

```
"_navigationDrawer": {
    "_display": {
        "elementSelector": ".bottomnavigation",
        "openFrom": "top",
        "appendControlToSelector": ".bottomnavigation .navigation-inner"
    }
}
```

##Settings overview

A complete example of this extension's settings can be found in the [example.json](https://github.com/JeromeLam/adapt-navigationDrawer/blob/master/example.json) file.

### Data description

Further settings for this extension are:

####_display

This is the root attribute that defines how the sliding drawer displays.

####elementSelector

This selector specifies which element the sliding drawer is anchored to.

####openFrom

Defines which direction the drawer slides from the anchored element.

####appendControlToSelector

This selector identifies which element the toggle control will get appended to.

##Limitations

N/A

##Browser spec

The browser must support CSS3 transitions and transformations.
