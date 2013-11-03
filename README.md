# Simple jQuery Plugin Boilerplate

A jQuery Plugin template that allow to use public methods.

## Example

```javascript
$(".test").myPluginName({ isCool: true }) // Init plugin

$(".test").myPluginName("someMethod", 'args', 'args') //Call method

val = $(".test").myPluginName("someGetterMethod") //If method has a return, return the value, otherwise return selector

$instance = $(".test").data('myPluginName') //Instace the plugin object

$instance.someMethod('arg1', 'arg2');

```