sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/BindingMode"
], function (JSONModel, XMLView, BindingMode) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON Model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			panelHeaderText: "Data Binding Basics"
		});

		oModel.setDefaultBindingMode(BindingMode.OneWay);

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		// Display a text element whose text is derived
		// from the model object
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});