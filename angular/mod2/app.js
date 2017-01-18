(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

	var toBuyList = this;

	toBuyList.items = ShoppingListCheckOffService.getItems();

	toBuyList.buyItem = function (itemIndex, itemName, itemQuantity) {
		ShoppingListCheckOffService.buyItem(itemIndex, itemName, itemQuantity);	
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
	var service = this;

	var items = [
		{
			name: "Pizza",
			quantity: "3"
		},
		{
			name: "Burger",
			quantity: "2"
		},
		{
			name: "Sandwich",
			quantity: "1"
		},
		{
			name: "Pasta",
			quantity: "5"
		},
		{
			name: "Sauce",
			quantity: "1"
		}
	];

	var boughtItems = [];
	service.buyItem = function (boughtItemIndex,
								boughtItemName,
								boughtItemQuantity) {
    	items.splice(boughtItemIndex, 1);
    	boughtItems.push({
    		name: boughtItemName,
    		quantity: boughtItemQuantity
    	});
	};

    service.getItems = function () {
    	return items;
    };

    service.getBoughtItems = function () {	
    	return boughtItems;
    };
}

})();