sap.ui.define(
	["be/rpan/epm/suppliers/base/BaseController", "sap/base/Log"],
	function(BaseController, Log) {
		"use strict";
		const ListController = BaseController.extend(
			"be.rpan.epm.suppliers.controller.List",
			/** @lends be.rpan.epm.suppliers.controller.List.prototype */ {}
		);

		ListController.prototype.onPressListItem = function(event) {
			Log.info(this.getView().getControllerName(), "onPressListItem");

			var bindingContext = event.getSource().getBindingContext();

			this.getOwnerComponent()
				.getRouter()
				.navTo(
					"detail",
					{
						id: bindingContext.getProperty("Id")
					},
					{
						products: {
							route: "list",
							parameters: {
								// encode the path because it could contain "/" which
								// isn't allowed to use as pattern parameter directly
								basepath: encodeURIComponent(bindingContext.getPath())
							}
						}
					}
				);
		};

		return ListController;
	}
);
