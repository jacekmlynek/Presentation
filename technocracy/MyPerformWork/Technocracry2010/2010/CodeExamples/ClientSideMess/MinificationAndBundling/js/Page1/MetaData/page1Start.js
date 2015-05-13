/// <reference name="MicrosoftAjax.js"/>
/// <reference path="../Componets/script2.js" />

Sys.loader.defineScripts(null,
   [
      {
          name: "script1",
          releaseUrl: "../js/Page1/Componets/script1.min.js",
          debugUrl: "../js/Page1/Componets/script1.js",
          executionDependencies: ["Core", "script2"]
      }, {
          name: "script2",
          releaseUrl: "../js/Page1/Componets/script2.min.js",
          debugUrl: "../js/Page1/Componets/script2.js",
          executionDependencies: ["Core"]
      }, {
          name: "script3",
          releaseUrl: "../js/Page1/Componets/script3.min.js",
          debugUrl: "../js/Page1/Componets/script3.js",
          executionDependencies: ["Core", "script1", "script2"]
      }, {
          name: "script4",
          releaseUrl: "../js/Page1/Componets/script4.min.js",
          debugUrl: "../js/Page1/Componets/script4.js",
          executionDependencies: ["Core", "script3"]
      },{
          name: "page1Scriptbudle",
          releaseUrl: "../js/Page1/Componets/page1-bundle.min.js",
          debugUrl: "../js/Page1/Componets/page1-bundle.js",
          executionDependencies: ["Core"],
          contains:["script1", "script2", "script4", "script3"]
      }
 ]);

      //Set debug mode from reguest and start downlad required script
      var _isDebugMode;
      var regexS = "[\\?&]" + "_debug" + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(window.location.href);
      if (results == null)
          _isDebugMode = false;
      else
          _isDebugMode = String(results[1]).toLowerCase() == "true";
      Sys.debug = _isDebugMode;

      Sys.require([Sys.scripts.script4, Sys.scripts.script3]);