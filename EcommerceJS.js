//Products
//Input items here
const items = [{
	name: "Whole Kernel Corn",
	category: "Canned Goods",
	price: 10,
	brand: "Del Monte",
	description: "Fresh from the farm.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00024000163022/67680dd7fa8def3454f3816fd5618353_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Pineapple Juice",
	category: "Canned Goods",
	price: 26,
	brand: "Dole",
	description: "Now with extra vitamin C.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535409/65e1bab521ff3463eb1c60f91a39b661_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Vienna Sausage",
	category: "Canned Goods",
	price: 31,
	brand: "Libby's",
	description: "Mmmmmmmmm",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00039000086639/9ad0f1ed7e4eff6c6e844e68dc1e42a8_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Canned Tuna",
	category: "Canned Goods",
	price: 10,
	brand: "Century",
	description: "Tuna flakes in oil.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702504403/d21db2ce308eca0f54acd7ed53e1baaf_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Corned Beef",
	category: "Canned Goods",
	price: 26,
	brand: "Purefoods",
	description: "Best almusal next to pancit canton.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/04808887010022/bd1e7a50b5681df8d66a73ffbefb6b97_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Coca-Cola Regular",
	category: "Canned Goods",
	price: 31,
	brand: "Coca-Cola",
	description: "Coke Lite and Coke Zero sold separately (oops)",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702543758/c0c4476e8361f5983e3d4a1cf7fb0a8b_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Hotdog",
	category: "Frozen Meat",
	price: 200,
	brand: "Purefoods",
	description: "Kids can tell.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702550675/9e7815b8c6277e1c2aa54df3f3459910_large.png&width=512&type=webp&quality=80'"
}, {
    name: "Chicken Nuggets",
	category: "Frozen Meat",
	price: 125,
	brand: "Purefoods",
	description: "Enjoyable chicken nuggets in fun shapes.",
	imgSrcName: "'https://cdn.shopify.com/s/files/1/0358/1335/9748/products/purefoods-frozen-purefoods-chicken-fun-nuggets-bbq-sauce-200g-16964830789764_500x.png'"
}, {
    name: "Sweet Ham",
	category: "Frozen Meat",
	price: 139,
	brand: "CDO",
	description: "Sweet and tender ham.",
	imgSrcName: "'https://api.themarketplace.com.ph/storage/uploads/RSMP%20-%20Website%20Pictures%20(Breakfast%20Festival)%20-%20CDO%20Classic%20Ham%20Sweet_1594111553.png'"
}, {
    name: "Hungarian Sausage",
	category: "Frozen Meat",
	price: 94,
	brand: "Viriginia",
	description: "Juicy hungarian sausages.",
	imgSrcName: "'https://console.cloudkart.ph/assets/img/products/b8c27b7a1c450ffdacb31483454e0b54/4338a6c55ab1b9736ec3423a4939c4ab.png'"
}, {
	name: "Lucky Me! Chicken",
	category: "Noodles",
	price: 135,
	brand: "Lucky Me",
	description: "Contains real fresh chicken.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535840/3620ab4afd1aafd2e07637a03781dfb5_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Nissin Ramen Spicy Seafood",
	category: "Noodles",
	price: 40,
	brand: "Nissin",
	description: "Delicious seafood noodles but spicy.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535836/0f1660808b2225a35b0dbc454d289465_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Nissin Cup Bulalo",
	category: "Noodles",
	price: 45,
	brand: "Nissin",
	description: "Do you miss Bulalo but don't know where to find it? Here's the new instant Bulalo (with noodles)",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535846/dc437dcb1e9bb5a3ca09117962747cc1_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Lucky Me! Seafood",
	category: "Noodles",
	price: 40,
	brand: "Lucky Me",
	description: "Salty like seawater.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684689252350/6892dfef4d46c9c110e1b99a7fece3da_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Nissin Cup Sotanghon",
	category: "Noodles",
	price: 50,
	brand: "Nissin",
	description: "Pancit with flavored water, yum.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535853/e13925ef0b4b0b8caa1284b06949588d_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Lucky Me! Pancit Canton Chilimansi",
	category: "Noodles",
	price: 120,
	brand: "Lucky Me",
	description: "Best flavor no cap.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702550156/2e508264b105aaacbb07d4bd715678f7_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Safeguard White Soap",
	category: "Soap",
	price: 49,
	brand: "Safeguard",
	description: "Soap that effectively cleans your body.",
	imgSrcName: "'https://cf.shopee.ph/file/09fbe8fae68cbfa2c46da15bf8507ae2'"
}, {
	name: "Safeguard Floral Soap",
	category: "Soap",
	price: 49,
	brand: "Safeguard",
	description: "Floral scented and gentle on the skin.",
	imgSrcName: "'https://www.sarisaristore.se/913-large_default/safeguard-floral-pink-soap-with-family-germ-protection-aloe.jpg'"
}, {
    name: "Menthol Soap",
	category: "Soap",
	price: 49,
	brand: "Safeguard",
	description: "Mint scented and cool on the skin.",
	imgSrcName: "'https://cdn.shopify.com/s/files/1/0358/1335/9748/products/safeguard-skin-care-safeguard-soap-menthol-85g-15429334466692_large.jpg?v=1606677360'"
}, {
    name: "Lemon Soap",
	category: "Soap",
	price: 49,
	brand: "Safeguard",
	description: "Lemon scented and gentle on the skin.",
	imgSrcName: "'https://cdn.shopify.com/s/files/1/0358/1335/9748/products/safeguard-skin-care-safeguard-soap-lemon-fresh-175g-15429273583748_large.jpg?v=1605282230'"
}, {
    name: "Dove Sensitive Skin",
	category: "Soap",
	price: 245,
	brand: "Dove",
	description: "Comes in 3 bars. Suitable for sensitive skin.",
	imgSrcName: "'https://images.heb.com/is/image/HEBGrocery/003384579'"
}, {
    name: "Dove Rosa Soap",
	category: "Soap",
	price: 79,
	brand: "Dove",
	description: "Dove soap with a hint of blush color - for moisturization.",
	imgSrcName: "'https://i.pinimg.com/originals/64/3c/2c/643c2c55e4494bd3d92e195ec91e9216.jpg'"
}, {
    name: "Papaya Soap",
	category: "Soap",
	price: 19,
	brand: "Silka",
	description: "Herbal soap for whitening and skin nourishment.",
	imgSrcName: "'https://cdn.shopify.com/s/files/1/0358/1335/9748/products/ssc_500x.png'"
}, {
	name: "Johnson's Baby Bath",
	category: "Shampoo",
	price: 297,
	brand: "Johnson's",
	description: "Gently cleanses hair and scalp.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702559790/24a0d7cc665c5173bc620daed4ca8cd3_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Palmolive Naturals",
	category: "Shampoo",
	price: 119,
	brand: "Palmolive",
	description: "Provides softness and moisture to hair.",
	imgSrcName: "'https://cdn.shopify.com/s/files/1/0257/1884/9583/products/60118_4808888401492_PALMOLIVENATSHPNKMOIST180ML1_01_800x.jpg?v=1597303934'"
}, {
	name: "Dove Oxyfusion",
	category: "Shampoo",
	price: 236,
	brand: "Dove",
	description: "Makes hair voluminous and smooth.",
	imgSrcName: "'https://cdn.shopify.com/s/files/1/0358/1335/9748/products/dove-hair-care-dove-shampoo-oxygen-and-nourishment-170ml-15307658920068_600x.jpg?v=1605632910'"
}, {
	name: "Dove Intense Repair",
	category: "Shampoo",
	price: 236,
	brand: "Dove",
	description: "Strengthens and nourishes hair.",
	imgSrcName: "'https://api.watsons.com.ph/medias/zoom-back-10090160.jpg?context=bWFzdGVyfGltYWdlc3wzMDYzNTJ8aW1hZ2UvanBlZ3xoZGQvaDRkLzg4ODY1NjUwMTE0ODYvV1RDUEgtMTAwOTAxNjAtYmFjay5qcGd8ZjhlYzBiYWU3YzMzZmEwZDJiM2I1MzU4MmRjY2JiYjllNGIxMWVjZjlkOTIyNDBhMzBkN2JkZGE4ZDc2NzI5Mg'"
}, {
	name: "Dove Straight and Silky",
	category: "Shampoo",
	price: 236,
	brand: "Dove",
	description: "Smoothens and nourishes hair.",
	imgSrcName: "'https://ph-test-11.slatic.net/p/657ca22c18098d4187463ffccb2c8ce5.jpg'"
}, {
    name: "Tre Semme Keratin Smooth",
	category: "Shampoo",
	price: 289,
	brand: "Tre Semme",
	description: "Deeply nourishes hair and helps keep it smooth.",
	imgSrcName: "'https://www.cleanxstore.com/wp-content/uploads/2021/01/51-oV7UXtlL._SL1000_-1.jpg'"
}, {
	name: "Potato Chips Plain Salted",
	category: "Chips",
	price: 190,
	brand: "Jack n' Jill",
	description: "Thinly sliced, golden crisp chips made from 100% real potatoes.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702535909/cdd3bb79f8e93ef752b53b06121480dc_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Prawn Crackers Regular",
	category: "Chips",
	price: 315,
	brand: "Oishi",
	description: "Only natural shrimps. 美味しい!",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/5527114/a9a5be6a03ba3120b487c7cebe92fe17_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Prawn Crackers Spicy",
	category: "Chips",
	price: 315,
	brand: "Oishi",
	description: "Only natural shrimps. 美味しい!",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/5475009/5fd44a1605a006ad40b75e3a9bb1e478_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Marty's Cracklin' (Salt and Vinegar)",
	category: "Chips",
	price: 245,
	brand: "Oishi",
	description: "Vegetarian Chicharon Old-fashioned Style. Guilt-free.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/8188538/aab721ad5cf23af896bd762b1097b59d_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Onion Rings",
	category: "Chips",
	price: 150,
	brand: "Oishi",
	description: "Made with REAL onions.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702539140/d6566a8cf94660fee1228baab240e68f_large.png&width=512&type=webp&quality=80'"
}, {
	name: "Piattos (Cheese)",
	category: "Chips",
	price: 200,
	brand: "Jack n' Jill",
	description: "Hexagon-shaped potato crisps made from the finest potato ingredients.",
	imgSrcName: "'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/8195234/a8433dd5f5a47ff02addadf50b30b6a0_large.png&width=512&type=webp&quality=80'"
}, ];
const mainDisplays = ["cats", "itemCats", "itemDetails"];

//SESSION VARIABLE
var cartItems = [];

/*
All attributes:
1. name
2. category
3. price
4. brand
5. description
6. imgSrcName
*/

//INITIALIZATION
var currMainDisplay = "cats";
var cats = [];
var fCats = [];
var itemDetails = [];
var actHistory = [];
var currSub = "";
changeMainDisplay("cats");
storeHistory();
generateItemID();
generateCats();
generateItemDetails();
generateItemCats();

//SET-UP
function generateItemID() {
	for (i = 0; i < items.length; i++) {
		items[i].id = i;
		//console.log(items[i].name + ": " + items[i].id);
	}
}

function generateCats() {
	//collect cats
	for (i = 0; i < items.length; i++) {
		currSub = items[i].category;
		var compCat = "";
		var foundCat = false;
		for (c = 0; c < cats.length && !foundCat; c++) {
			compCat = cats[c];
			if (currSub === compCat) {
				foundCat = true;
			}
		}
		if (!foundCat) {
			cats.push(currSub);
		}
	}

	//generate divs
	var addCat = "";
	//console.table(cats);
	for (c = 0; c < cats.length; c++) {
		addCat = cats[c];
		var noSpaceCat = cats[c].replace(/\s+/g, '');
		//console.log("noSpaceCat is: " + noSpaceCat + " TYPE:" + typeof noSpaceCat);
		document.getElementById("cats").innerHTML += "<div class='col-lg-4 col-6 gridBox' onclick='goToCatAisle(\"" + noSpaceCat + "\");storeHistory()'><div class='"+noSpaceCat+"Cat Catto'><div class='contentGridBox d-flex justify-content-center'>" + addCat + "</div></div></div>";
	}

}

function generateItemCats() {
	//generate divs
    var catNavver="<div class='row'>";
    for (c = 0; c < cats.length; c++) {
        currSub = cats[c].replace(/\s+/g, '');
        var cutCat= cats[c];
        if(cats[c].length>=6){cutCat= cats[c].slice(0,6)+"...";}
        catNavver+="<div class='col-2 gSBox' onclick='goToCatAisle(\"" + currSub + "\");storeHistory()'><div class='"+currSub+"Cat LilCatto'><div class='contentGridBox d-flex justify-content-center'>"+cutCat+"</div></div></div>";
    }
    catNavver+="</div>";
	for (c = 0; c < cats.length; c++) {
		currSub = cats[c].replace(/\s+/g, '');
		//console.log(currSub);
		document.getElementById("itemCats").innerHTML += "<div id='" + currSub + "'>"+catNavver+"</div>";
        var pastFirst=false;
			//check if corresponding cat
		for (i = 0; i < items.length; i++) {
			var itemCat = items[i].category.replace(/\s+/g, '');
			if (itemCat === currSub) {
                if (!pastFirst){
                    pastFirst=true;
                    var obj = {};
                    obj.cat = currSub;
                    obj.num = i;
                    fCats.push(obj);
                    //console.table(fCats);
                }
				document.getElementById(currSub).innerHTML += "<div class='card col-6 col-md-3'>\n<div class='smolPic' id='"+itemCat+"thmbimg'><img class='card-img-top' src=" + items[i].imgSrcName + " onclick='goToItemDetails(\"" + itemCat + "Item" + i + "\");storeHistory()'></div>" + "\n<div class='card-body'>\n<div class='cardTitleWrap' id='c"+i+"'><h5 class='card-title' onclick='goToItemDetails(\"" + items[i].category.replace(/\s+/g, '') + "Item" + i + "\");storeHistory()'>" + items[i].name + "</h5>\n" + "<p class='card-text'>" + items[i].price + "php</p>\n</div>\n</div>\n</div>";
            }
		}

	}
    var obj = {};
    obj.cat = "last";
    obj.num = items.length;
    fCats.push(obj);
}
function generateItemDetails() {
	for (i = 0; i < items.length; i++) {
		var itemCat = items[i].category.replace(/\s+/g, '') + "Item";
		itemDetails.push(itemCat+i);
		document.getElementById("itemDetails").innerHTML += "<div id='" + itemCat+i + "' class='mb-5 mb-md-0'><div class='row'><div class='col-sm-12 col-md-7  bigPic' id='"+itemCat+"img'><button class='btn btn-detNav btn-detNav-l' onclick='goToItemDetails(\""+itemCat+(i-1)+"\")'>«</button><img src=" + items[i].imgSrcName + "><button class='btn btn-detNav btn-detNav-r' onclick='goToItemDetails(\""+itemCat+(i+1)+"\")'>»</button><div id='detName"+i+"'><h1>" + items[i].name + "</h1></div></div>" + "<div class='col-sm-12 col-md-5'><div class='detContent'><div class='input-group'><div class='input-group-prepend'><button class='btn quant-btn' onclick='quantChange(-1,\"quant\"," + i + ")'>-</button></div><input type='number' class='quant-input' id='quant" + i + "' onclick='selectFunc(\"quant"+i+"\")' min='1' value='1'><div class='input-group-append'>" + "<button class='btn quant-btn' onclick='quantChange(1,\"quant\"," + i + ")'>+" + "</button><button class='btn addtocart-btn' onclick='addToCart(" + i + ")'>Add <span class='d-none d-lg-inline-block'>to Cart +</span></button></div></div><p><b>Brand: </b>" + items[i].brand + "</p>" + "<p><b>Category: </b>" + items[i].category + "</p>" + "<p><b>Price: </b>" + items[i].price + " php</p><p class='font-italic mt-4 desc'>\"" + items[i].description + "\"</p></div></div></div></div>";
    }
}

//DISPLAY CHANGING
window.addEventListener("resize", rszChange);
//if greater than 8, remove until 5, add 3 "."., if width is 150 px

function backToTop() {
  window.scrollTo(0, 0);
}

function rszChange(){
    var elem= document.getElementById('cartWrap');
    if(!elem.classList.contains("closed")){
        console.log("yup!");
        var currW= document.getElementById("cartName"+0).firstChild.offsetWidth;
        var currWSize= parseInt(currW);
        console.log("currW"+ currW +", currWSize: " + currWSize);
        if (currWSize<=80){
        //console.log("it is smol: ");
        for(i=0;i<cartItems.length;i++){
                console.log("HELLO");
               txtChange(i, "cartName", "smol");
        }
        }else{
        //console.log("it is big: ");
        for(i=0;i<cartItems.length;i++){
            txtChange(i, "cartName", "big");
        }
    }
    }
    if(currMainDisplay=="itemCats"){
    var currW= document.getElementsByClassName("cardTitleWrap");
    var sNum=0;
    for (i=0;i<fCats.length;i++){
        if(fCats[i].cat==currSub){
            sNum=fCats[i].num;
        }
    }
    var currWSize= parseInt(currW[sNum].offsetWidth);
    if (currWSize<=200){
        //console.log("it is smol: "+sNum);
        for(i=0;i<items.length;i++){
               txtChange(i, "c", "smol");
        }
    }else{
        //console.log("it is big: "+sNum);
        for(i=0;i<items.length;i++){
            txtChange(i, "c", "big");
        }
    }
}else if(currMainDisplay=="itemDetails"){
    var exNum=currSub.match(/(\d+)/);
    if(exNum.length>0){   
        exNum= parseInt(exNum[0]);
    var currW= document.getElementById("stickys").offsetWidth;
    if (currW<768){
        txtChange(exNum,"detName","big");
    }else{
        document.getElementById("detName"+exNum).firstChild.innerHTML=items[exNum].name;
    }
    }
}
}

function updateSearch(){
    document.getElementById("searchResultsWrap").innerHTML= "";
    var searched= document.getElementById("searchBar").value.trim().toLowerCase();
    console.log("Searched: "+searched);
    var newResult="";
    var counter=0;
    document.getElementById("searchResultsWrap").innerHTML= "<div class='arrow-up'></div><div id='searchResults'></div>";
    if(searched!=""){
    for (i=0;i<items.length;i++){
        var compare=items[i].name.toLowerCase();
        if (compare.includes(searched)&&counter<=5){
            counter++;
            console.log("Matched with Compare: "+compare);
            var newC=   items[i].category.replace(/\s+/g,'');
            console.log(newC+i+"    "+items[i].name);
            newResult+="<div class='resultS' onclick='goToItemDetails(\""+newC+"Item"+i+"\");storeHistory();toggleDisplay(\"close\",\"searchResultsWrap\");clearSearch()'>"+items[i].name+"</div>";
            console.log(newResult);
        }
    }
    }
    document.getElementById("searchResults").innerHTML= newResult;
    if(newResult!=""){
        toggleDisplay('open','searchResultsWrap');
    }else{
        toggleDisplay('close','searchResultsWrap');
    }
    counter=0;
}

function clearSearch(){
    document.getElementById("searchBar").value="";
    updateSearch();
}

function txtChange(i, loc, s){
    var newTitle;
    if(loc==='c'||loc==='detName'){    
        newTitle=items[i].name;
    }else if(loc==='cartName'){
        newTitle=cartItems[i].prod_name;    
        console.log(newTitle);
    }
    if(s==="smol"){
        console.log("smol");
        if (newTitle.length>=8){
            newTitle= newTitle.slice(0,5)+"...";
        }
    }else if (s==="big"){
        if(newTitle.length>=13){
            newTitle = newTitle.slice(0,13)+"...";
        }
    }
    document.getElementById(loc+i).firstChild.innerHTML= newTitle;
}

function toggleDisplay(dis, elemID){
    var element = document.getElementById(elemID);
	if((dis=="close")&&!(element.classList.contains("closed"))){        
        element.classList.add("closed");
    }else if((dis=="open")&&(element.classList.contains("closed"))){
        element.classList.remove("closed");
    }
}

function changeMainDisplay(mD) {
	currMainDisplay = mD;
	for (m = 0; m < mainDisplays.length; m++) {
		if (mD === mainDisplays[m]) {
			document.getElementById(mainDisplays[m]).style.display = "block";
		} else {
			document.getElementById(mainDisplays[m]).style.display = "none";
		}
	}
    backToTop();
}

function goToCatAisle(cat) {
	var currCatSub;
	for (c = 0; c < cats.length; c++) {
		changeMainDisplay("itemCats");
		currCatSub = cats[c].replace(/\s+/g, '');
		if (currCatSub === cat) {
			document.getElementById(currCatSub).style.display = "block";
			currSub = currCatSub;
		} else {
			document.getElementById(currCatSub).style.display = "none";
		}
	}
    var catNums={};
    for(i=0;i<fCats.length;i++){
        if (currSub===fCats[i].cat){
            catNums.starting = fCats[i].num;
            catNums.ending = fCats[i+1].num;
        }
    }
    //console.log("fCats length: "+ fCats.length +", Start: "+ catNums.starting +", End: "+catNums.ending);
    var size;
    var currW= document.getElementById("c"+catNums.starting).offsetWidth;
    if (currW<=200){
        size = "smol";
    }else{
        size = "big";
    }
    for(d=catNums.starting;d<catNums.ending;d++){
        txtChange(d,"c",size);
        //console.log("txtChange "+d+", "+size);
    }
    backToTop();
}

function goToItemDetails(item) {
	var currCatSub;
    console.log(itemDetails+"  "+item);
    if(itemDetails.includes(item)){
	for (d = 0; d < itemDetails.length; d++) {
		changeMainDisplay("itemDetails");
		currCatSub = itemDetails[d];
		if (currCatSub === item) {
			document.getElementById(currCatSub).style.display = "block";
			currSub = currCatSub;
		} else {
			document.getElementById(currCatSub).style.display = "none";
		}
	}
    var exNum=item.match(/(\d+)/);
    exNum= parseInt(exNum[0]);
    console.log(exNum);
    var currW= document.getElementById("stickys").offsetWidth;
    if (currW<768){
        txtChange(exNum,"detName","big");
    }else{
		document.getElementById("detName"+exNum).firstChild.innerHTML= items[exNum].name;
    }
    }
    backToTop();
}

function toggleVis(elemID) {
	var element = document.getElementById(elemID);
	element.classList.toggle("closed");
}

//HISTORY
//Activated in buttons, not in functions
function storeHistory() {
	var pageLocation = {};
	pageLocation.main = currMainDisplay;
	pageLocation.sub = currSub;
	actHistory.push(pageLocation);
	console.table(actHistory);
}

function goBack() {
	var arrNum = actHistory.length - 2;
	if (!(arrNum < 0)) {
		var mainTest = actHistory[arrNum].main,
			subTest = actHistory[arrNum].sub;
		if (mainTest == "cats") {
			changeMainDisplay("cats");
		} else if (mainTest == "itemCats") {
			goToCatAisle(subTest);
		} else if (mainTest == "itemDetails") {
			goToItemDetails(subTest);
		} else {
			//console.warn("Error in goBack() function. Line 296, 'EcommerceJS.js'.");
		}
		actHistory.pop();
		console.table(actHistory);
	}
}

//SUBMISSION & PRODUCT-HANDLING
function quantChange(num, loc, id) {
	var quantValue = document.getElementById(loc + id).value;
	quantValue = parseInt(quantValue);
	quantValue += num;
	if (quantValue > 0) {
		document.getElementById(loc + id).value = quantValue;
	}
}

function addToCart(num) {
	var newItem = {};
	var quantity = document.getElementById("quant" + num).value;
	var price = items[num].price;
	var imgSrc = items[num].imgSrcName;
	newItem.prod_name = items[num].name;
	quantity = parseInt(quantity);
	if (Number.isNaN(quantity)) {
		quantity = 1;
	}
	newItem.prod_quant = quantity;
	newItem.prod_price = quantity * price;
	newItem.prod_img = imgSrc;
	var curr_name = newItem.prod_name;
	var simProd = false;
	for (i = 0; i < cartItems.length; i++) {
		var comp_name = cartItems[i].prod_name;
		if (comp_name == curr_name) {
			simProd = true;
			cartItems[i].prod_quant += quantity;
			quantity = cartItems[i].prod_quant;
			cartItems[i].prod_price = quantity * price;
		}
	}
	if (!simProd) {
		cartItems.push(newItem);
	}
    document.getElementById("quant" + num).value=1;
	console.table(cartItems);
	updateCart();
    alert("Product added successfully!");
}

function changeItemPrice(num){
    var nQuant = document.getElementById("cartQt"+num).value;
    console.log(document.getElementById("cartQt"+num).value);
    nQuant = parseInt(nQuant);
    if (Number.isNaN(nQuant)||nQuant<=0){
        nQuant=1;
    }
    var nPrice = (cartItems[num].prod_price/cartItems[num].prod_quant)*nQuant;
    cartItems[num].prod_price = nPrice;
    cartItems[num].prod_quant = nQuant;
    updateCart();
}

function selectFunc(iD){
    document.getElementById(iD).select();
}

function updateCart() {
	var cartContent = "";
	var total = 0;
    console.log("crtitemslength: "+cartItems.length);
	if (!(cartItems.length == 0)) {
        cartContent+= "<div class='row head-cart mx-md-5'><div class='col-10 row'><div class='col-6 row'><div class='col-6'></div><div class='col-6 p-0 m-auto'><span class='d-none d-md-inline-block'>Name</span><span class='d-inline-block d-md-none'>ㅤ</span></div></div><div class='col-6 row'><div class='col-6'></div><div class='col-6 p-0 m-auto'><span class='d-none d-md-inline-block'>Quantity</span><span class='d-inline-block d-md-none'>ㅤ</span></div></div></div><div class='col-2'></div></div>";
		for (i = 0; i < cartItems.length; i++) {
			var name = cartItems[i].prod_name;
			var quantity = cartItems[i].prod_quant;
			var price = cartItems[i].prod_price;
			total += price;
			var img = cartItems[i].prod_img;
            cartContent += "<div class='itemInfo row mx-md-5' id='cart" + i + "'><div class='col-10 row'><div class='col-md-6 my-3 row'><div class='tnWrap col-6'><img class='thumbnail'" + "src=" + img + "></div><div class='col-6 p-0 m-auto' id='cartName"+i+"'><div>" + name + "</div><div><span class='d-none d-lg-inline'>Price: </span>" + price + " php</div></div></div><div class='col-md-6 my-3 row'><div class='col-6 m-auto p-0'>ㅤ</div><div class='col-6 m-auto p-0'><span>QT: </span><input type='number' class='quant-input cart-q-input' id='cartQt" + i + "' min='1' value='" + quantity + "' onchange='changeItemPrice("+i+")' onclick='selectFunc(\"cartQt"+i+"\")'></div></div></div><div class='col-2 p-0 m-auto'><button class='btn trash-btn' onclick='deleteItem(" + i + ")'><svg " + "xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-trash' viewBox='0 0 16 16'>" + "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5" + " 0 " + "0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a" + "1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 " + "4H4.118zM2.5 3V2h11v1h-11z'/></svg></button></div></div></div>";
    		}
		cartContent += "<div class='check-out-btn-wrap'><button class='btn check-out-btn' onclick='checkOut()'>Check-out</button><div class='totalAmt'><span class='d-none d-lg-inline'>Total: </span>" + total + " php</div></div>";
        document.getElementById("cart").innerHTML = cartContent;
        console.log("yup!");
            var currW= document.getElementById("cartName"+0).firstChild.offsetWidth;
            var currWSize= parseInt(currW);
            console.log("currW"+ currW +", currWSize: " + currWSize);
            if (currWSize<=80){
            //console.log("it is smol: ");
            for(i=0;i<cartItems.length;i++){
                    console.log("HELLO");
                   txtChange(i, "cartName", "smol");
            }
            }else{
            //console.log("it is big: ");
            for(i=0;i<cartItems.length;i++){
                txtChange(i, "cartName", "big");
            }
        }
	} else {
		cartContent = "<div><span class='rounded itemInfo p-2 p-md-4'>Go press that add to cart button!</span></div>";
        document.getElementById("cart").innerHTML = cartContent;
	}
}



function deleteItem(item) {
    console.table(cartItems);
    console.log("triggered");
	cartItems.splice(item, 1);
    console.table(cartItems);
	updateCart();
}

function checkOut() {
    var cust_order = [];
	for (i = 0; i < cartItems.length; i++) {
		var newObj = {};
        var noSpecialC= cartItems[i].prod_name.replace(/[^a-zA-Z0-9]/g, '');
		newObj.prod_name = noSpecialC;
		newObj.prod_price = cartItems[i].prod_price;
		cust_order.push(newObj);
	}
	document.getElementById("order").value = JSON.stringify(cust_order);
	toggleVis('checkOutPage');
}   