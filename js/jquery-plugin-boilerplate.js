(function($) {
  
  var pluginName = "examplePlugin";
  
  //Global defaults
  $.fn[pluginName].defaults = {}
  
  $.fn[pluginName] = function(options) {
    
    var args = arguments;

    // Defaults options
    var defaults = {

    }

    var methods = {

      _init: function() {
        console.log("Init");
        console.log(this.$el);
      },

      setName: function(name, lastname) {
        console.log(name + " " + lastname)
      },

      printThis: function() {
        console.log(this.$el)
      },

      _privateMethod: function() {
        console.log(this.$el)
      }


    }

    // This is the boilerplate code

    var ret;

    // Plugin constructor
    function Plugin (elem, options) {
      this.options = options;
      this.el = elem;
      this.$el = $(elem);
    
      this._init.call(this);
    }

    $.extend(Plugin.prototype, methods)

    this.each(function() {
        if(options && typeof(options) == "string")
          if($(this).data(pluginName)) 
            if($(this).data(pluginName)[options]) {
              ret = $(this).data(pluginName)[options].apply(this, [].slice.call(args, 1))
            }

        if(!$(this).data(pluginName)) { 
          options = $.extend({},$.fn[pluginName].defaults, defaults, option)
          $(this).data(pluginName, new Plugin(this, options)) 
        }
    });

    return (ret === undefined) ? this : ret;

  } 


})(jQuery)
