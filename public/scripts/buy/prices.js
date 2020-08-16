function GetProductID(ProdName, Qty)
{
	var prod=0;
	
	switch(ProdName.toUpperCase())
	{
		case "VM":
			if(Qty<0 || Qty>2650) prod=106291;
			else if(Qty<50) prod=140478;
			else if(Qty<100) prod=140480;
			else if(Qty<1001) prod=102829;
			else prod=102830;
			break;
		
		case "VA":
			if(Qty<0 || Qty>2700) prod=102944;
			else if(Qty<50) prod=140663;
			else if(Qty<100) prod=140664;
			else if(Qty<1000) prod=102942;
			else prod=102943;
			break;
			
		case "VC":
			if(Qty<0 || Qty>237) prod=131407;
			else if(Qty<50) prod=140790;
			else if(Qty<100) prod=140791;
			else prod=131405;
			break;
			
		case "VT":
			if(Qty<0 || Qty>380) prod=156750;
			else if(Qty<51) prod=174901;
			else if(Qty<101) prod=174902;
			else prod=174903;
			break;

		case "NW":
			if(Qty<0 || Qty>580) prod=174819;
			else if(Qty<50) prod=174816;
			else if(Qty<100) prod=174817;
			else prod=174818;
			break;
			
		case "SK":
			if(Qty<0 || Qty>322) prod=300141748;
			else if(Qty<2) prod=300141742;
			else if(Qty<3) prod=300141743;
			else if(Qty<10) prod=300141745;
			else if(Qty<100) prod=300141746;
			else prod=300141747;
			break;
			
		case "WM":
			if(Qty<0 || Qty>362) prod=140119;
			else if(Qty<50) prod=140116;
			else if(Qty<100) prod=140117;
			else prod=140118;
			break;
	}
	return prod;
}

function IsUnlimited(ProdID)
{
	switch(parseInt(ProdID))
	{
	case 106291:
	case 131407:
	case 102944:
	case 156750:
	case 165624:
	case 174819:
	case 158487:
	case 140119:
	case 300141748:
		return (true);
	}
	
	return (false);
}

function GetItemPrice(Prod, Qty)
{
	var price=0;
	switch(Prod.toUpperCase())
	{
	case "VM":
		if(Qty<0 || Qty>1635) price=8000;
		else if(Qty<50) price=19.90;
		else if(Qty<100) price=14.00;
		else if(Qty<1000) price=9.50;
		else price=4.90;
		break;

	case "VC":
		if(Qty<0 || Qty>237) price=1900;
		else if(Qty<50) price=19.00;
		else if(Qty<100) price=12.00;
		else price=8.00;
		break;
		
	case "VA":
		if(Qty<0 || Qty>2700) price=6000;
		else if(Qty<50) price=9.00;
		else if(Qty<100) price=6.00;
		else if(Qty<1000) price=4.50;
		else price=2.20;
		break;
		
	case "VT":
		if(Qty<0 || Qty>250) price=449.90;
		else if(Qty<51) price=49.90;
		else if(Qty<101) price=144.90;
		else price=249.90;
		break;
		
	case "NW":
		if(Qty<0 || Qty>580) price=2900;
		else if(Qty<50) price=10.00;
		else if(Qty<100) price=7.50;
		else if(Qty<1000) price=5.0;
		break;
	
	case "SK":
		if(Qty<0 || Qty>322) price=2900;
		else if(Qty<2) price=29.00;
		else if(Qty<3) price=19.00;
		else if(Qty<10) price=17.00;
		else if(Qty<100) price=14.00;
		else price=9.00;
		break;
		
	case "WM":
		if(Qty<0 || Qty>379) price=2900;
		else if(Qty<50) price=14.00;
		else if(Qty<100) price=11.00;
		else price=8.00;
		break;
	}
	
	return price;
}

function ProdIDtoAcron(ProdID)
{
	switch(parseInt(ProdID))
	{
	case 102765:
	case 106291:
	case 140478:
	case 140480:
	case 102829:
	case 102830:
		return new String("VM");
		
	case 102837:
	case 102944:
	case 140663:
	case 140664:
	case 102942:
	case 102943:
		return new String("VA");
		
	case 131402:
	case 131407:
	case 140790:
	case 140791:
	case 131405:
		return new String("VC");
		
	case 156745:
	case 156750:
	case 156746:
	case 156747:
	case 156748:
		return new String("VT");
	
	case 158482:
	case 174816:
	case 174818:
	case 162373:
	case 174817:
	case 158483:
	case 165624:
	case 174819:
	case 158487:
	case 158484:
	case 158485:
	case 158486:
		return new String("NW");

	case 300141748:
	case 300141742:
	case 300141743:
	case 300141745:
	case 300141746:
	case 300141747:
		return new String("SK");

	case 140119:
	case 140116:
	case 140117:
	case 140118:
		return new String("WM");
	}

	return new String("NaN");
}

function GetWiseQuantity(Prod, Qty)
{
	var nPrice = GetItemPrice(Prod, Qty);

	var nNewPrice = nPrice;
	var nOldQty = Qty;

	while((Qty<10000) && (nNewPrice == nPrice))
	{
		Qty++;
		nNewPrice = GetItemPrice(Prod, Qty);
	}

	if(nPrice*nOldQty > nNewPrice*Qty) return Qty;
	return nOldQty;
}