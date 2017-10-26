jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"default/test/integration/NavigationJourneyPhone",
		"default/test/integration/NotFoundJourneyPhone",
		"default/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});