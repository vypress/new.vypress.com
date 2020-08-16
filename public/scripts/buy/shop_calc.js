var Products = Array('VM','VA','VC','SK','WM');

function cashFormat(theAmount)
{
	if (theAmount != 0)
	{
		initialTotal = "" + parseInt(theAmount * 100)
		decimalPoint = initialTotal.length - 2
		totalDollars = initialTotal.substring(0,decimalPoint)
		totalCents = initialTotal.substring(decimalPoint,initialTotal.length)
		finalFigure = totalDollars + "." + totalCents
		return finalFigure
	}
	else
	{
		return "0.00"
	}
}

function UpdateTotal()
{
	var iTotal = 0;
	for(var i=0; i<Products.length; i++)
	{
		var ProdQty = document.getElementById(Products[i]+"_qty");
		var quantity = parseInt(ProdQty.value);
		if(!isNaN(quantity) && (quantity!=0))
		{
			var iCode = GetProductID(Products[i], quantity);
			var quantity_o = quantity;
			if(IsUnlimited(iCode)) quantity=1;
			if(Products[i] == "VT") quantity=1;
			iTotal+=GetItemPrice(Products[i], quantity_o)*quantity
		}
	}
	
	document.forms['quote'].CommonTotal.value = "$"+cashFormat(iTotal);
}

function OnChangeQty(ProdShortName)
{
	var ProdQty = document.getElementById(ProdShortName+"_qty");
	var ProdTotal = document.getElementById(ProdShortName+"_total");
	
	var quantity = parseInt(ProdQty.value);
	var iSubtotal = 0;
	if(!isNaN(quantity) && quantity!=0)
	{
		var iCode = GetProductID(ProdShortName, quantity);
		var quantity_o = quantity;
		if(IsUnlimited(iCode)) quantity=1;
		if(ProdShortName == "VT") quantity=1;
		iSubtotal = GetItemPrice(ProdShortName, quantity_o) * quantity;
	}
	else
	{
		if(ProdQty.value!="-")
			ProdQty.value = "";
	}
	
	ProdTotal.value = "$"+cashFormat(iSubtotal);
	UpdateTotal();
}

function onPlaceOrder()
{
	var pszUrl = "https://secure.shareit.com/shareit/cart.html?";

	var bNoProductsSelected = true;
	for(var i=0; i<Products.length; i++)
	{
		var ProdQty = document.getElementById(Products[i]+"_qty");
		var quantity = parseInt(ProdQty.value);
		var iSubtotal = 0;
		if(!isNaN(quantity) && (quantity!=0))
		{
			var iCode = GetProductID(Products[i], quantity);
			if(IsUnlimited(iCode)) quantity=1;
			
			if(!bNoProductsSelected) pszUrl+="&";
			pszUrl+="PRODUCT["+	iCode+"]="+quantity;
			
			bNoProductsSelected = false;
		}
	}
	
	if(bNoProductsSelected)
	{
		alert('Please enter a product quantity.')
		document.forms['quote'].VM_qty.focus();
		return false;
	}
	
	var prev = window;
	if( window.opener!=null) prev = window.opener;
	else
	if(window.dialogArguments != null)
	prev = window.dialogArguments;
	prev.location = pszUrl;
	window.close();

	return true;
}

function getQuote()
{
	var pszQuoteUrl = "/quote.html";
	var cxDlg = 620;
	var cyDlg = 360;
	
	if(window.showModelessDialog)
	{ // Using IE4+ dialog feature
		window.showModelessDialog(pszQuoteUrl,window, "dialogHeight:"+cyDlg+"px;dialogWidth:"+cxDlg+"px;center:yes;unadorned:yes;resizable:no;scroll:no");
		return;
	}

	// Creating a window and centering it
	// Findig a center point
	var cxChild = cxDlg;
	var cyChild = cyDlg;
	var xParent = 0;
	var yParent = 0;
	var cxParent = 0;
	var cyParent = 0;
	var leftScreen = 0;
	var topScreen = 0;
	var bottomScreen = 0;
	var rightScreen = 0;
	
	if(window.screenX)
	{
		xParent = window.screenX;
		yParent = window.screenY;
		cxParent = window.outerWidth;
		cyParent = window.outerHeight;
	}
	else
	{
		xParent = window.screenLeft;
		yParent = window.screenTop;
		cxParent = document.body.clientWidth;
		cyParent = document.body.clientHeight;
	}
	
	if(screen.availLeft)
	{
		leftScreen = screen.availLeft;
		topScreen = screen.availTop;
	}
	bottomScreen = topScreen + screen.availHeight;
	rightScreen = leftScreen + screen.availWidth;

	// Calculate new X position, then adjust for screen
	var xNew = xParent + Math.round((cxParent - cxChild) / 2);
	if (xNew < leftScreen)
	{
		xNew = leftScreen;
	}
	else if ((xNew + cxChild) > rightScreen)
	{
		xNew = rightScreen - cxChild;
	}
	
	// Calculate new Y position, then adjust for screen
	var yNew = yParent  + Math.round((cyParent - cyChild) / 2);
	if (yNew < topScreen)
	{
		yNew = topScreen;
	}
	else if ((yNew + cyChild) > bottomScreen)
	{
		yNew = bottomScreen - cyChild;
	}

	QuoteWindow = window.open(pszQuoteUrl, "QuoteWindow", "height="+cyChild+",width="+cxChild+",location=no,menubar=no,resizable=no,scrollbars=no,titlebar=no,toolbar=no,top="+yNew+",left="+xNew+",dependent=yes,directories=no,personalbar=no,alwaysRaised=yes,screenX="+xNew+",screenY="+yNew);

	// focus window (only for Navigator 3.0)
	if ( (navigator.appName != "Microsoft Internet Explorer") && (navigator.appVersion.substring(0,1) == "3") )
		QuoteWindow.focus();
}