sap.ui.define([
	//	"Sm10SmartTableSm10SmartTable/controller/BaseController.controller", 
//	"./BaseController",
	"sap/ui/model/Filter",
	"sap/ui/core/mvc/Controller"
], function( Filter, Controller) {
	"use strict";

	return Controller.extend("Sm10SmartTableSm10SmartTable.controller.Main", {
		onInit: function() {

		},

		click: function(event) {
			var item = event.getSource().getSelectedItem();
			var valor = item.getBindingContext().getProperty("RecordId");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detalles", {
				ID: valor
			});
		},

		onSearch: function(event) {
			var filters = [];
			var input = this.getView().byId("i1");
			if (input.getValue()) {
				var oFilter = new Filter("ZzobjectId", sap.ui.model.FilterOperator.Contains, input.getValue());
				filters.push(oFilter);
			}
			input = this.getView().byId("i2");
			if (input.getValue()) {
				oFilter = new Filter("ZzproySra", sap.ui.model.FilterOperator.Contains, input.getValue());
				filters.push(oFilter);
			}
			input = this.getView().byId("i3");
			if (input.getValue()) {
				oFilter = new Filter("Zzusuario", sap.ui.model.FilterOperator.Contains, input.getValue());
				filters.push(oFilter);
			}

			var list = this.getView().byId("SmartTable");
			var binding = list.getBinding("items");
			binding.filter(filters);
		}

	});

});