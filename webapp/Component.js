sap.ui.define(["be/rpan/epm/suppliers/base/BaseComponent"], function(
	BaseComponent
) {
	"use strict";

	const SuppliersComponent = BaseComponent.extend(
		"be.rpan.epm.suppliers.Component",
		/** @lends be.rpan.epm.suppliers.Component.prototype */ {
			metadata: {
				manifest: "json"
			},
			eventMappings: {
				productsComponent: [
					{
						name: "toProduct",
						forward: "toProduct"
					}
				]
			}
		}
	);

	SuppliersComponent.prototype.init = function() {
		BaseComponent.prototype.init.apply(this, arguments);
	};

	return SuppliersComponent;
});
