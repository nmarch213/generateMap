
//this will generate a map for each specific vity page
window.onload = function generateMap(){

    var isMapAlready = document.getElementsByTagName("iframe");
    var mapSite = document.getElementById("map-site");
    var googMap = document.getElementById("google-map");

    console.log(isMapAlready);

    //Checks if there is already a map for the page, and if true the
    //generated map will not show.

    for (var i = isMapAlready.length - 1; i >= 0; i--) {
        if(isMapAlready[i].src.includes("map")){
            console.log("map found");
            mapSite.style.display = "none";
            googMap.style.display = "none";
        }
    }

	var location = getLocationFromBreadcrumb().split(", ");;
	var city = location[0];
	var state = location[1];

	var longState = abbrState(state, 'name');

	//Edit the map link inserting the city page location
	mapSite.href = "https://en.wikipedia.org/wiki/" + city + ",_" + longState;
	mapSite.innerHTML = city +", " + state;
	mapSite.target = "_blank";

	//edit the map using the location of the city page
	googMap.src = "http://maps.google.com/maps?q=[" + city +"]+["+ state + "&output=embed";
	googMap.height="400";
	googMap.width="650";
}


//This will take the location given by the unviversal breadcrumb
function getLocationFromBreadcrumb(){
	var breadcrumb = document.getElementById("breadcrumb");
	var breadcrumbA = breadcrumb.getElementsByTagName("a");
	var location = breadcrumbA[breadcrumbA.length-1].innerHTML;
	return location;
}

//This will take the abbreviated city and convert it to the long form of the state

function abbrState(input, to){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}


/* This is the generic template you need to add to the HTML


<br class="clearfix"/>
<p class="aligncenter"><a id="map-site"></a></p>
<p class="aligncenter"><iframe id="google-map"></iframe></p>
<br class="clearfix"/>

<script type="text/javascript" src="js/generateMap.js">generateMap()</script>

*/