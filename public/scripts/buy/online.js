var vProductList;
var vTonecastQty;
var vQtyTextBox;

var vQtyRequiredValidator;
var vQtyCompareValidator;
var vProductValidator;

function HideValidators()
{
	vQtyRequiredValidator.style.display = "none";
	vQtyRequiredValidator.style.visibility = "hidden";

	vQtyCompareValidator.style.display = "none";
	vQtyCompareValidator.style.visibility = "hidden";

	vProductValidator.style.display = "none";
	vProductValidator.style.visibility = "hidden";
}

function OnProductChange()
{
	var vUnlimNote = document.getElementById("UnlimNote");

	if(vProductList.value == "VT")
	{
		vTonecastQty.style.display = "inline";
		vTonecastQty.style.visibility = "visible";

		vUnlimNote.style.visibility = "hidden";
		vQtyTextBox.style.display = "none";
		vQtyTextBox.style.visibility = "hidden";
	}
	else
	{
		vTonecastQty.style.display = "none";
		vTonecastQty.style.visibility = "hidden";
		vQtyTextBox.style.display = "inline";
		vQtyTextBox.style.visibility = "visible";

		vUnlimNote.style.visibility = "visible";
	}
}

function OnSubmit()
{
	HideValidators();

	if(vProductList.value=="none")
	{
		vProductValidator.style.display = "inline";
		vProductValidator.style.visibility = "visible";
		return false;
	}
	else
	{
		var quantity_value = vQtyTextBox.value;
		if(vProductList.value=="VT") 
			quantity_value = vTonecastQty.value;

		var nLisences = parseInt(quantity_value);

		if(isNaN(nLisences))
		{
			vQtyRequiredValidator.style.display = "inline";
			vQtyRequiredValidator.style.visibility = "visible";
			return false;
		}

		if((nLisences<-1) || (nLisences == 0))
		{
			vQtyCompareValidator.style.display = "inline";
			vQtyCompareValidator.style.visibility = "visible";
			return false;
		}

		var ProductId = document.getElementById("productid");
		ProductId.value = GetProductID(vProductList.value, nLisences);

		if(IsUnlimited(ProductId.value))
			vQtyTextBox.value = 1;
		else
		{
			/*Возможно что выгоднее купить по больше лицензий*/
			var wise_quantity = GetWiseQuantity(vProductList.value, nLisences);
			if(!isNaN(wise_quantity) && (wise_quantity != nLisences))
			{
				ProductId.value = GetProductID(vProductList.value, wise_quantity);
				if(IsUnlimited(ProductId.value))
					vQtyTextBox.value = 1;
				else
					vQtyTextBox.value = wise_quantity;
			}
		}
	}
}

window.onload=function()
{
	vProductList = document.getElementById("ProductsDropDownList");
	vTonecastQty = document.getElementById("TonecastQty");
	vQtyTextBox = document.getElementById("license");

	vQtyRequiredValidator = document.getElementById("QtyRequiredFieldValidator");
	vQtyCompareValidator = document.getElementById("QtyCompareValidator");
	vProductValidator = document.getElementById("ProductRequiredFieldValidator");

    document.forms["OrderForm"].onsubmit=OnSubmit; 
    vProductList.onchange=OnProductChange;

	HideValidators();
	OnProductChange();
}