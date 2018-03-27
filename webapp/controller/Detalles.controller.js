sap.ui.define([
		"Sm10SmartTableSm10SmartTable/controller/BaseController.controller",
		"sap/ui/core/routing/History"
	],
	function(BaseController, History) {
		"use strict";
		return BaseController.extend("Sm10SmartTableSm10SmartTable.controller.Detalles", {

			onInit: function() {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("Detalles").attachPatternMatched(this._onObjectMatched, this);
			},
			
			_onObjectMatched: function(oEvent) {
				this.getView().bindElement({
					path: "/" + oEvent.getParameter("arguments").invoicePath,
					model: "HorasSet"
				});
			},

			// override the parent's onNavBack (inherited from BaseController)
			onNavBack: function(oEvent) {
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("overview", true);
				}

			}

		});
	});