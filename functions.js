function getLastLegData(routeCode, destinationCode) {
	var data = {	"R1D1" : {		"PolyLine":"wcxnAwujxMaHkCaBq@i@YwAc@cFeB~AaJ`@{Bh@cCdA{FBON_@FO@WCoABc@AaAAUS_@EYDs@t@oE@W@WBe@`ANEr@",		"Bus": [          77.5562483155,          13.0721287066        ],		"Dest": [13.073876746276351,77.56542921066284],		"DestName": "Bosch Car Service Vidyaranyapura"	},	"R1D2" : {		"PolyLine": "iwwnAuojxMt@Xr@gBvAiEZ_BZcDbAiHcH}A",		"Bus": [          77.5553909618,          13.0700895972        ],		"Dest":[13.070020394522114,77.55988240242004],		"DestName": "Reall Herbal Life Care"	},	"R1D3" : {		"PolyLine":"{lwnA}lkxMEd@}@_CKQESIyAUaCScAWiAc@aBEYm@gDEc@G{AKg@GKIGHg@dAuGRaBj@CFgALeCV@dA@d@Dn@RlDtAx@wB~AeEsBu@",		"Bus": [          77.5599992667,          13.0684806743        ],		"Dest":[13.067250890637615,77.56899118423462],		"DestName": "The Tennis Village"	},	"R1D4" : {		"PolyLine":"eyunAsekxMb@?PKr@iAJCl@CpA@VBGoAe@gDQkDAgAH}ANgAZuANi@Xq@l@{@x@{@dCyC`CaCb@e@JOmBa@w@M}@SuAYDKiAg@",		"Bus":[          77.5588888116,          13.0601823796        ],		"Dest":[13.058649554089245,77.56621241569519],		"DestName": "Rasina Farms"	},	"R1D5" : {		"PolyLine": "gnunAmgkxM}@Yi@GLvBZ~CLpAFxAF~C?fB@`ABPr@VLBLHFX@|AFt@LdEJxBNjCHhBeAGwAGeCMkACRcDHq@hBTb@D",		"Bus":[          77.5591756403,          13.0584138818        ],		"Dest":[13.058806324750334,77.55242586135864],		"DestName": "Byrappa Garden"	},	"R1D6" : {		"PolyLine":"}ztnA}zjxMfCN`BNvFh@~@D~@EdAa@|BoA`@Or@If@CpBCUoHlFCIaFu@_AUUKAgONyJHIEGO@iADGJEzCAEcGO_MGiC?[qA@",		"Bus":[          77.5571783166,          13.0553452671        ],		"Dest":[13.053789614252265,77.56517171859741],		"DestName": "Microwave Tube Research and Development Center"	},	"R1D7" : {		"PolyLine":"yysnAg}jxMn@C?DHrFP`LTdAkCfBWTHd@Pj@\\j@dDjEf@p@NZJ`@D^B`BAxBAz@rAHAp@An@fBJA|@^AV{D@I",		"Bus":[          77.5575584048,          13.0500557801        ],		"Dest":[13.04772761985377,77.54950761795044],		"DestName": "PHC Govt. Hospital, Nagara Arogya Kendra"	},	"R1D8" : {		"PolyLine":"e}rnAkwjxMdBq@lBm@jA{@Z[Jq@LuBAuHCmBAyAEc@E]dAAp@WxA{@jCwAdGyDd@]tAeAlCeBHSEEMUEIaA@g@Ee@MqAsAOKkBGA?_A}AwAkBoAiBKSYh@UUy@g@YQ",		"Bus":[          77.55652,          13.04553        ],		"Dest":[13.043128766327888,77.56680250167847],		"DestName": "Hebbal Constituency MLA Office"	},	"R1D9" : {		"PolyLine": "_crnAa|jxM`@AjCI|BHzA?vDSlCShG_@|@Cj@DbBZnALP@B?KI{@qA{BsB_BsA_CqAeCiAu@WmA_@wAq@{DsBw@i@Q[_@UqAo@sAu@c@cBISAUv@c@La@Na@\\W|AkAlCeBHSMSKQdAQ^M",		"Bus":[          77.5572837379,          13.0412790301        ],		"Dest":[13.03905243830273,77.56446361541748],		"DestName": "Paradise Biryani | New BEL Road"	},	"R1D10" : {		"PolyLine":"o`qnAe~jxMv@Pz@J|@HH?h@Iz@[NcEHwAFaEJeE?UGkA?{@KkBAeBAOMa@CQX{DN{CZc@h@o@{@Mu@OTmDJOPsE?sAI}B?KbAm@|CyB|AeAj@Wr@W|Ae@c@c@_@WeAc@q@S`@{Ac@Qo@C",		"Bus": [          77.557677903,          13.0357420401        ],		"Dest":[13.032864653055398,77.57152318954468],		"DestName": "REVA Independent PU College, Sanjaynagar"	},	"R1D11" : {		"PolyLine":"auonAkwkxMb@Lo@b@cG~DgAr@cAr@~Aj@jH~BJBITo@zCyCzO",		"Bus":[          77.5616008275,          13.0288246387        ],		"Dest":[13.030063375081236,77.5555157661438],		"DestName": "PHC"	},	"R1D12" : {		"PolyLine":"odonA{xkxMq@Lw@FcAAcACmBWo@@QDo@XMJMV_Ba@oDs@uB]eAMcAKyAE]@i@GBkBgCRO@BoAViHLgEJyADoBbEaFpEsFrDcEbAcAt@o@|A}AFM?KEOZIdBc@tBs@",		"Bus":[          77.5619537017,          13.026176388        ],		"Dest":[13.027282970825011,77.57182359695435],		"DestName": "Gillys Restobar"	},	"R1D13" : {		"PolyLine":"enmnA}qkxMdAb@fBmDr@wAh@uAJU`AoBpBwD`A_BlBuDPaAH_AA}BIiCEMKKe@}OKsEQ_GWkKIkEAo@",		"Bus":[          77.560785,          13.01747        ],		"Dest":[13.015847446218231,77.57579326629639],		"DestName": "Kendriya Vidyalaya Hebbal"	},	"R1D14" : {		"PolyLine":"qmmnA{zjxMbAh@\\\\FFJLXLj@X^RZTVVj@t@r@`APh@DVDh@@dAMp@O^e@j@_@XMD[F}AFaBNmAPkHpAsBh@}CnAgHxC_@VUTi@n@e@x@eEpImB`EcFbKuFvLhExBdAh@~LjGPPzHxDhHxDLWi@}AW_AnAaCYQW_@",		"Bus":[          77.5570775943,          13.0174207461        ],		"Dest":[13.019652377714179,77.5419545173645],		"DestName":"Raksha Multi Speciality Hospital"	},	"R1D15" : {		"PolyLine":"{~lnA_jjxMCGAqDmAF@DDb@D`ADDFXDr@FRNNRBz@Bz@JnCQ`AOfAi@\\CxCC~BAdF?nB@HCd@CnED`ACN_DFmBJaCL}BJcDRaLFsAFaEB_D_CCgCFDcEkAn@cCnAmBbAiAf@LLN^@NHl@?D",		"Bus":[77.55432593779196,13.015060289757564],		"Dest":[13.010098125738814,77.56122350692749],		"DestName": "Saint Peters Pontifical Seminary"	},	"R1D16" : {		"PolyLine":"ijlnA{yixMKDl@rAlAjCDJ^b@vAjAb@\\X\\d@n@NL\\Pl@RtBn@x@LxCP`AJCTQr@IlAm@zFoAlLKlA]jCGvA\\BFXDR?ZCP",		"Bus":[          77.551806,          13.011723        ],		"Dest":[13.00857192009273,77.54264116287231],		"DestName": "Sree Dharmasastha Ayyappa Swamy Temple"	},	"R1D17" : {		"PolyLine":"guknAwfixMcBScAWqAc@eAa@QGq@m@u@q@sAoAu@s@]w@iBqEkAoCgA{CGKa@_@[Sa@So@k@EUDQdAm@REd@A~CC`FEzEDb@@zGBpCDf@A`@B~CVj@Fh@yD`@iCXyAZgCb@iCn@}En@oEh@uEF{@hBi@vCd@ZD",		"Bus":[          77.5486949966,          13.0083720384        ],		"Dest":[13.003073320516041,77.56113767623901],		"DestName": "Sadu Sangama Credit Co-operative Society"	},	"R1D18" : {		"PolyLine":"_}jnAwgixMmCPMA_CTf@hBhAzCnCfHtDzJb@pAjAc@~BaAbBq@rA_@~@KfCO?cAlAN|@RZFR@xAE~Ee@vBCOz@Qn@{AlF",		"Bus":[          77.548936,          13.004485        ],		"Dest":[12.998034572842126,77.54328489303589],		"DestName": "Pristine Hospital & Research Centre Pvt Ltd"	},	"R1D19" : {		"PolyLine":"k}inAmmixMgALSBBN^vBPlAFAdDm@rAWrCg@CeAIgB?OGqAQ_Bw@gF_@sC_@uBUcBMeAIgAUgBEk@BoBF}@XyCr@cDbBmFp@{Bv@aCdAeDZ}@PgAZ{ERaCRwBFgAfANp@LlAH`@FWdB",		"Bus":[          77.5498,          12.99942        ],		"Dest":[12.995253809367824,77.56388425827026],		"DestName": "Srirampuram Post Office"	},	"R1D20" : {		"PolyLine":"c`inAasixMgBV}C`@}@DoFx@QB?K?ACm@QmBaAuG_@qCc@oCMaAQwB]eC?cBRgDNsAP}@T_AJe@x@cC^sAr@{BbC{HJWZkAN_BJ{ARqC^aEBq@NDx@Hn@LXqBBw@E[|@FjDh@|AVpAJjAEjACrBChD?~EAfA??n@",		"Bus":[          77.5507742756,          12.9947506371        ],		"Dest":[12.990047634615568,77.56489276885986],		"DestName": "Srirampura Police Station"	},	"R1D21" : {		"PolyLine":"mfhnAesixMm@M?N]GyAO{FEO?gCA@{@jBDbBB`ARdBBdADxCf@fAPPgJLsFDmBB}DB}CSe@i@gAu@yAiBaDGKlC{AfBw@xDwBbCgAf@Q",		"Bus":[          77.550744,          12.990636        ],		"Dest":[12.988124040428863,77.55993604660034],		"DestName": "Suguna Hospital"	}};
	var key = routeCode+destinationCode;
	var routePolyline = data[key]["PolyLine"];
	var busStopLocation = data[key]["Bus"];
	var destinationLocation = data[key]["Dest"];
	
	return {
		"routePolyline" : routePolyline,
		"busStopLocation" : busStopLocation,
		"destinationLocation" : destinationLocation
	}
}

function getFirstLegData(source) {
	var routePolyline = "}tonAwvkxMhAq@h@UHAIQEGyEiAqCq@?KDcBL_A^wA~AcMNeBMA{AMqCO";
	var sourceLocation = [13.030544193703355, 77.56654500961304];
	var busStopLocation = [77.5616008275, 13.0288246387]; 
	
	return {
		"routePolyline" : routePolyline,
		"sourceLocation" : sourceLocation,
		"busStopLocation" : busStopLocation
	}
}

function getRouteData(routeCode) {
	routePolyline = null;
	if(routeCode == "R1") {
		routePolyline = "o_}nAovqxM{B`CONDBKIg@l@gDbE}EbGY\\XZv@dAl@z@^t@^lA`@rCF|BIhBIh@a@vAxA^xC`AnDlAjKnDzEdB|Ad@Oj@[t@q@jB_@t@cA`B_BbC{@z@eD~CwDhCoAj@}Al@cA`@uBn@kB^XhBP~@`AlJdApJ`AlJPzCH|EJnBFhAP`BF`@@d@C~@PhEXnIAt@SrBG`AJJtAf@pIrDzBr@fBXx@LZJv@p@nFpGzA`BnApAjAxAxBrDfApBl@d@`Ad@n@VrBnAZLdAT^Dl@@bAK~@EhDJp@HVHJHL]\\_APg@|AcFp@}BdBiHHe@\\_AT]l@]fMxBtJzA|FdAjDn@nEfAr@NhB`@nA`@jFfB`Ad@tHvChDlAxGjCt@Zr@gBvAiEZ_BZcDbAiH\\kDTBbEXlAPbGh@`@FZF`A`@z@b@rA\\fFp@fERfIX`AFTAPKj@aARKhACt@@h@FtCz@hAX`ANvCVzARRJXf@WdDDNJNb@VlET`BNvFh@~@D~@EdAa@~C_BzAM~EGzAGTIn@AjAJ|A`@`InBfCv@@AFCFAFB@@fBq@lBm@d@Ct@B`AA`FYpG[vAGbB?pBFpAAbG_@xDYjDOz@F~AXnALd@@l@OtAw@hBiAlDuBp@i@~CqBjBgA|E_DdFeDpAy@h@Uf@E~@L`BNtB?r@Ix@Oj@Q|@_@hAa@pDaAhJoArAQz@AdAPfC|@r@VhBz@zA~@^Xf@b@v@n@ZRrChA|Al@j@NXCnJgSrDuHRGHB@LDNKPsDxGmGxMgAjBc@nAiC`F}@tBCRg@lAe@hA@j@V`@hB~@ITER[n@IZ@PVRV@\\O~@qALAt@b@bAj@x@^j@Zd@f@r@`Aj@hAR~@F`AHXHv@JRZJz@Fx@P~D[nAk@REd@Az@ARTDP?ZMVWZOJ?^BTvAvDlAbDpArCj@pAJNh@h@hBxAr@z@VZXPfA^xBn@bAJzDVlCNr@CdBUt@G`BMJQzBQdCS~Ea@vD[d@BjLsA`Gm@|C]pCa@~GaA~Em@pAKlA?`GH`DFrBVzDt@zJvBbCr@fF`AbDj@jBV|A@tH@lFDhQA~ABd@@ZIt@ChCBzBDn@Hz@PbBp@dBvAbBdA\\x@Jl@LhC@bAC`A@nGX|GYELfAXzBlB|NXzBLb@Vl@z@jAl@h@vAp@fRnEjF~AbExA`C|@FWd@qBxAeGj@_CrBTfD`@zFx@hAL?GC??LBjBq@CGAANEbA?D";
	} else if(routeCode == "R2") {
		routePolyline = "";
	}
	return routePolyline;
}

function getUserLiveLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(markUserLocation);
	} else { 
		alert("Geo Location is not supported");
	}
}

function markUserLocation(position) {
	var Latitude = position.coords.latitude;
	var Longitude = position.coords.longitude;
	alert(Latitude + " " +Longitude);
}

function getCoordinatesFromOverViewPolyLine(overviewPolyline) {
	var coordinatesArray = null;
	coordinatesArray = google.maps.geometry.encoding.decodePath(overviewPolyline);
	return coordinatesArray;
}

function plotPolyLine(map, coordinatesArray, color) {
	var polyline = new google.maps.Polyline({
		path: coordinatesArray,
		strokeColor: color,
		strokeWeight: 5,
		map: map
	});
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < polyline.getPath().getLength(); i++) {
		bounds.extend(polyline.getPath().getAt(i));
	}
	map.fitBounds(bounds);
}

function plotCircle(map, circleCoordinates, color) {
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(circleCoordinates[0], circleCoordinates[1]),
		title: 'Some location'
		});

	var circle = new google.maps.Circle({
	  map: map,
	  radius: 40,    
	  fillColor: color
	});

	circle.bindTo('center', marker, 'position');
}

function addMarker(map, markerCoordinates, myUrl) {
	var markerObject = null;
	var myLatLng = new google.maps.LatLng(markerCoordinates[0], markerCoordinates[1])
	var icon = {
			url: myUrl,
			scaledSize: new google.maps.Size(50, 50),
		}
	markerObject = new google.maps.Marker({
			position: myLatLng,
			title: 'Bus',
			icon: icon
		});
	markerObject.setMap(map);
	return markerObject;
}

function removeMarker(markerObject) {
	markerObject.setMap(null);
}

function runBus(map, coordinatesArray) {
	var ofsetIndex = getOfsetIndex();
	coordinatesArray = ofSetArray(coordinatesArray, ofsetIndex)
	markerObject = addMarker(map, [coordinatesArray[0].lat(), coordinatesArray[0].lng()], "./bus.png")
	var len = coordinatesArray.length;
	var i;
	for (i = 1; i < len; i++) {
		(function(i){
		   setTimeout(function(){
			markerObject.setPosition(new google.maps.LatLng(coordinatesArray[i].lat(), coordinatesArray[i].lng()));
		 }, 2000 * i);
		}(i));
	}
}

function plotBusRoute(map, coordinatesArray) {
	plotPolyLine(map, coordinatesArray, "#00FFFF");
}

function handleMainTravel(map, routeCode) {
	var overviewPolyline = getRouteData(routeCode);
	var coordinatesArray = getCoordinatesFromOverViewPolyLine(overviewPolyline)
	plotBusRoute(map, coordinatesArray);
	runBus(map, coordinatesArray);
}

function handleFirstMile(map, source) {
	
	var firstLegData = getFirstLegData(source);
	var routePolyline = firstLegData["routePolyline"];
	var sourceLocation = firstLegData["sourceLocation"];
	var busStopLocation = firstLegData["busStopLocation"]; 
	var coordinatesArray = getCoordinatesFromOverViewPolyLine(routePolyline);
	var sourceCircleCoordinates = [sourceLocation[0], sourceLocation[1]];
	var busStopCircleCoordinates = [busStopLocation[1], busStopLocation[0]];
	
	addMarker(map, sourceCircleCoordinates, "./0.png")
	plotCircle(map, sourceCircleCoordinates, "#FFD700");
	plotCircle(map, busStopCircleCoordinates, "#FFD700");
	plotPolyLine(map, coordinatesArray, "#FFC0CB");
	
}

function handleLastMile(map, routeCode, destinationCode) {
	
	var lastLegData = getLastLegData(routeCode, destinationCode);
	var routePolyline = lastLegData["routePolyline"];
	var destinationLocation = lastLegData["destinationLocation"];
	var busStopLocation = lastLegData["busStopLocation"]; 
	var coordinatesArray = getCoordinatesFromOverViewPolyLine(routePolyline);
	var sourceCircleCoordinates = [destinationLocation[0], destinationLocation[1]];
	var busStopCircleCoordinates = [busStopLocation[1], busStopLocation[0]];
	
	plotCircle(map, sourceCircleCoordinates, "#FFD700");
	plotCircle(map, busStopCircleCoordinates, "#FFD700");
	plotPolyLine(map, coordinatesArray, "#CCCC00");
	
}

function startApplication(map, routeCode, destinationCode) {
	handleMainTravel(map, routeCode);
	handleFirstMile(map, null);
	handleLastMile(map, routeCode, destinationCode)
}

function getParamFromURL() {
	var routeCode = null;
	var destinationCode = null;
	
	var urlString = window.location.href;
	var url = new URL(urlString);
	var routeCode = url.searchParams.get("routeCode");
	var destinationCode = url.searchParams.get("destinationCode");

	return {"routeCode":routeCode, "destinationCode":destinationCode};
}

function getOfsetIndex() {
	var dateObj = new Date();
	var currMinute = dateObj.getMinutes();
	var currSecond = dateObj.getSeconds();
	var index = (((currMinute%12)*60)+currSecond)/2;
	return Math.ceil(index);
}

function ofSetArray(coordinatesArray, index) {
	var ofSetCoordinatesArray =  coordinatesArray.slice(index,coordinatesArray.length-1).concat(coordinatesArray.slice(0,index));
	return ofSetCoordinatesArray.slice(0,360);
}
function myMap() {
	var mapProp= {
		center: new google.maps.LatLng(13.0174207461,77.5570775943),
		zoom:13,
		};
	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	urlParameter = getParamFromURL();
	startApplication(map, urlParameter["routeCode"], urlParameter["destinationCode"]);
}
