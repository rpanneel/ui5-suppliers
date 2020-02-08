sap.ui.define(
	["be/rpan/epm/suppliers/base/BaseController", "sap/base/Log"],
	function(BaseController, Log) {
		"use strict";

		const DetailController = BaseController.extend(
			"be.rpan.epm.suppliers.controller.Detail",
			/** @lends be.rpan.epm.suppliers.controller.Detail.prototype */ {}
		);

		DetailController.prototype.onInit = function() {
			this.getOwnerComponent()
				.getRouter()
				.getRoute("detail")
				.attachMatched(this._onMatched, this);
		};

		DetailController.prototype._onMatched = function(event) {
			Log.info(this.getView().getControllerName(), "_onMatched");
			var args = event.getParameter("arguments");

			this.getOwnerComponent()
				.getModel()
				.metadataLoaded()
				.then(this._bindData.bind(this, args.id));
		};

		DetailController.prototype._bindData = function(id) {
			Log.info(this.getView().getControllerName(), "_bindData");

			var path = this.getOwnerComponent()
				.getModel()
				.createKey("Suppliers", { Id: id });

			this.getView().bindElement({
				path: "/" + path,
				events: {
					change: function() {
						Log.info(this.getView().getControllerName(), "_bindData change");
						this.getView().setBusy(false);
					}.bind(this),
					dataRequested: function() {
						Log.info(
							this.getView().getControllerName(),
							"_bindData dataRequested"
						);
						this.getView().setBusy(true);
					}.bind(this),
					dataReceived: function() {
						Log.info(
							this.getView().getControllerName(),
							"_bindData dataReceived"
						);
						this.getView().setBusy(false);
						if (this.getView().getBindingContext() === null) {
							this.getOwnerComponent()
								.getRouter()
								.getTargets()
								.display("notFound");
						}
					}.bind(this)
				}
			});
		};

		return DetailController;
	}
);
