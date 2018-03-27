sap.ui.define([
//	"Sm10SmartTableSm10SmartTable/controller/BaseController.controller", 
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";


	return Controller.extend("Sm10SmartTableSm10SmartTable.controller.Main", {
		onInit: function() {
		},
		
		click: function(event) {
			/*var oView = oThis.getView();
			var table = oView.byId("SmartTable").getTable();
			var item = table.getSelectedItem(); */
			
			var item = event.getSource().getSelectedItem();
			var valor = item.getBindingContext().getProperty("RecordId");
		//	var router = oThis.getOwnerComponent().getRouter().initialize();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detalles", {ID: valor } );
		
			// display the "notFound" target without changing the hash
			// this.getRouter().getTargets().display("tDetalle", {
			// 	fromTarget : "tMain"
			// });	
		}
		
	});
	
	
});