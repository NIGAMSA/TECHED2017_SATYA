jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"default/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"default/test/integration/pages/App",
	"default/test/integration/pages/Browser",
	"default/test/integration/pages/Master",
	"default/test/integration/pages/Detail",
	"default/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "default.view."
	});

	sap.ui.require([
		"default/test/integration/MasterJourney",
		"default/test/integration/NavigationJourney",
		"default/test/integration/NotFoundJourney",
		"default/test/integration/BusyJourney",
		"default/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});