
// ====================
// bevat de query strings voor de verschillende lagen
//
// formaat make_layer variabelen:
//
//<URL> string 'url',<color>: string '#RGB', <name>: string '[imagetype]tekst', <lijnbreedte>[.cirkelradius]: int/float, <zichtbaarheid> : boolean, [lijntpye][transparantie] :string '[aan uit (aan uit ( ...))][@transparantie]'
//
// imagetype: #l# = lijn, #dl#=dubbele lijn, #d# = stippellijn, #c#= transparant, #co# = cirkel opaque met cijfers
// aan/uit = pixellengte van de lijn, zichtbare lijn-open gedeelte
// transparantie = 0-1 transparantie van de lijn
//
//=====================
// ====================
// COPIAR 	
// COPIAR Copy this if you want a line
//COPIAR
//COPIAR	function nameofthefunction(color){
//COPIAR		return(
//COPIAR		{
//COPIAR			strokeColor:"color",
//COPIAR			strokeOpacity:0.7,
//COPIAR			strokeWidth:2,
//COPIAR			strokeLinecap: "square",
//COPIAR			strokeDashstyle: "1 0"
//COPIAR		});
//COPIAR	}
// COPIAR
// COPIAR Copy this if you want a point
// COPIAR	function nameofthefunction(color){
// COPIAR		return (
// COPIAR		{
// COPIAR			strokeColor:color,
// COPIAR			strokeOpacity:0.9,
// COPIAR			strokeWidth:3,
// COPIAR			pointRadius:5,
// COPIAR			fillColor:"white",
// COPIAR			fillOpacity:0.75
// COPIAR		});
// COPIAR	}
// COPIAR Copy this if you want an external icon
// COPIAR 		function tsforward(url){
// COPIAR 		return (
// COPIAR 		{
// COPIAR 			externalGraphic:url,
// COPIAR 			graphicOpacity: 0.75,
// COPIAR 			graphicWidth:20,
// COPIAR 			graphicHeight:20,
// COPIAR 			graphicXOffset: 4,
// COPIAR 			graphicYOffset: 0,
// COPIAR 			rotation:0
// COPIAR 		});
// COPIAR 	}
//	
//	COPIAR	if (type == "nameofthetdid"){   of index.html
//  COPIAR	map.addLayers([
//	COPIAR  make_layer(QURL + "?data=(way[key=value](bbox);node(w);way[otherkey=othervalue](bbox);node(w););out+skel;",
//  COPIAR  name="#typeoflineoriconinlegend#HTML code you want to show"
//  COPIAR  nameofthefunction("http://urloftheicon" or "color"),
//  COPIAR  false
//  COPIAR	),
//  COPIAR  from "make_layer" to ), you can replicate to generate every overpass query then... (next line)
//  COPIAR			]);
//  COPIAR			
//  COPIAR		}
// VOCABULARI nameofthefuncition= name of the function, Each function with custom parameters has to have an unique name.
//VOCABULARI
//VOCABULARI strokeColor=color of the line
//VOCABULARI strokeOpacity=0-1 transparency of the line
//VOCABULARI strokeWidth=Width of the line
//VOCABULARI strokeLinecap=Form of the cap of the line
//VOCABULARI strokeDashstyle=start/end of the line pixels in which start the line, if it is discontinuous
//VOCABULARI pointRadius=number in p�xels for the radius of the point
//VOCABULARI fillColor=color you want to fill the cercle
//VOCABULARI fillOpacity=0-1 transparency of the filled cercle
//VOCABULARI graphicOpacity=0-1 transparency of the icon
//VOCABULARI graphicWidth=in pixels, width of the icon
//VOCABULARI graphicHeight=in pixels, height of the icon
//VOCABULARI graphicXOffset=in pixels, offset in x from the point of the icon
//VOCABULARI graphicYOffset=in pixels, offset in y from the point of the icon
//VOCABULARI rotation:in grades, rotation angle of the icon
//VOCABULARI nameofthe td id you will find in index.html
// INSTRUCCIONS #typeoflineoriconinlegend#: #l# = line, #dl#=discontinuous line, #d# = dashed line, #c#= transparent, #co# = cercle opaque #ex#=external icon

// INSTRUCCIONS 
// INSTRUCCIONS default active option true enabled false unabled
// INSTRUCCIONS transparency = @0-1 transparency of the line
//

function layerdef(type){

	/*
	 * {
	 * 	strokeColor: "red",
	 * 	strokeOpacity: 0.9,
	 * 	strokeWidth: 5,
	 * 	strokeLinecap: "square",
	 * 	strokeDashstyle: "1 0"
	 */
	function defaultSolidLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
		});
	}

	function defaultDashedLine(color){
		return(
		{
			strokeColor:color,
			strokeOpacity:0.7,
			strokeWidth:2,
			strokeLinecap: "square",
			strokeDashstyle: "6 10"
		});
	}



	/*
	 * base Point Parameters:
	 * {
	 * 	strokeColor:"#FFFFFF",
	 * 	strokeOpacity:0.9,
	 * 	strokeWidth:3,
	 * 	pointRadius:3
	 * 	fillColor: "white",
	 * 	fillOpacity: 0.75,
	 * }
	 */
	function defaultPoint(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0.75
		});
	}
	
		function defaultPoint2(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.5,
			strokeWidth:1,
			pointRadius:3,
			fillColor:"black",
			fillOpacity:0.5
		});
	}
	
		function defaultPoint3(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:1,
			strokeWidth:3,
			pointRadius:5,
			fillColor:"white",
			fillOpacity:0
		});
	}
	
		function defaultPoint4(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:7,
			fillColor:"white",
			fillOpacity:0
		});
	}
	
			function defaultPoint5(color){
		return (
		{
			strokeColor:color,
			strokeOpacity:0.9,
			strokeWidth:3,
			pointRadius:9,
			fillColor:"white",
			fillOpacity:0
		});
	}
	
	

	/*
	 * external Point Parameters:
	 * {
	 * 	externalGraphic: "path/to/icon.png",
	 * 	graphicWidth: 6,
	 * 	graphicHeight:6,
	 * 	graphicOpacity: 0.75,
	 * 	graphicXOffset: 0,
	 * 	graphicYOffset: 0,
	 * 	rotation: 0
	 * }
	 */
	function defaultExtPoint(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:16,
			graphicHeight:16,
			rotation:125
		});
	}
	
		function tsforward(url){
		return (
		{
			externalGraphic:url,
			graphicOpacity: 0.75,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: 4,
			graphicYOffset: 0,
			rotation:0
		});
	}
	
		function tsbackward(url){
		return (
		{
			externalGraphic:url,
			graphicWidth:20,
			graphicHeight:20,
			graphicXOffset: -4,
			graphicYOffset: 0,
			rotation:180
		});
	}
	
	
		if (type == "lines"){
		//	dit maakt de layers voor de cycleway tags
		map.addLayers([
		//highway=cycleway
			make_layer(
				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway~'path$|^footway$'][bicycle=designated](bbox);node(w););out+skel;",
				name="#l#highway=cycleway",
				defaultSolidLine("red"),
				false,
			),
			  
            make_layer(
				QURL + "?data=(way[highway=cycleway][oneway=yes](bbox);node(w););out+skel;",
				name="#d#cycleway, oneway=yes",
				defaultDashedLine("green"),
				false
			),
			
            make_layer(
				QURL + "?data=(way[highway=cycleway][segregated=yes](bbox);node(w););out+skel;", 
				name="#dl#cycleway segregated=yes",
				defaultSolidLine("cyan"),
				false),
			
/*			  

*/
		]);
	}
	
	
	
	if (type == "test"){
		
		map.addLayers([
/*			
			make_layer(QURL + "?data=node[kerb=lowered](bbox);out+skel;", "#66ff66", name="#c#&nbspkerb=lowered", 3, false),
			make_layer(QURL + "?data=node[kerb=raised](bbox);out+skel;", "#ff3300", name="#c#&nbspkerb=raised", 3, false),
			make_layer(QURL + "?data=node[kerb=flush](bbox);out+skel;", "#0066ff", name="#c#&nbspkerb=flush", 3, false),
			make_layer(QURL + "?data=node[kerb=no](bbox);out+skel;", "#ffff00", name="#c#&nbspkerb=no<hr>", 3, false),
*/
			make_layer(
				QURL + "?data=node[wheelchair=yes](bbox);out+skel;",
				name="#ex#&nbspwheelchair=yes",
				defaultExtPoint("https://image.flaticon.com/icons/png/512/9/9285.png"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=no](bbox);out+skel;",
				name="#c#&nbspwheelchair=no",
				defaultPoint("red"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=designated](bbox);out+skel;",
				name="#c#&nbspwheelchair=designated",
				defaultPoint("blue"),
				false
			),

			make_layer(
				QURL + "?data=node[wheelchair=limited](bbox);out+skel;",
				name="#c#&nbspwheelchair=limited<hr>",
				defaultPoint("yellow"),
				false
			),

			make_layer(
				QURL + "?data=node['obstacle:wheelchair'=yes](bbox);out+skel;",
				name="#c#&nbspobstacle:wheelchair=yes<hr>",
				defaultPoint("black"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=traffic_signals](bbox);out+skel;",
				name="#ex#&nbspcrossing=traffic_signals",
				defaultExtPoint("http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42571-vertical-traffic-light-icon.png"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=no](bbox);out+skel;",
				name="#c#&nbspcrossing=no",
				defaultPoint("red"),
				false
			),

			make_layer(
				QURL + "?data=node[crossing=uncontrolled](bbox);out+skel;",
				name="#ex#&nbspcrossing=uncontrolled",
				defaultExtPoint("https://d30y9cdsu7xlg0.cloudfront.net/png/35167-200.png"),
				false
),
make_layer(
QURL + "?data=node['traffic_sign:backward'='ES:R1'](bbox);out+skel;",
name="#ex#&nbspES:R1 Backward ",
tsbackward("https://github.com/yopaseopor/beta_style_josm/raw/master/traffic_signs_EUR/ES/ES_R1.png"),
true
),

		make_layer(
				QURL + "?data=node[crossing=unmarked](bbox);out+skel;",
				name="#c#&nbspcrossing=unmarked<hr>",
				{
					strokeColor:"grey",
					strokeOpacity:0.9,
					strokeWidth:2,
					pointRadius:4,
					fillColor:"blue",
					fillOpacity:0.75
				},
				false
			),
/*
	  		//highways
            make_layer(QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway=path][bicycle=designated](bbox);node(w););out+skel;", "red",name="#l#highway=cycleway", 5, false),
			  
			make_layer(QURL + "?data=(way[highway=footway](bbox);node(w););out+skel;","#bd958b",name="#l#highway=footway", 5, false,"@0.8"),
			
			make_layer(QURL + "?data=(way[highway=path][bicycle!~'^designated'](bbox);node(w););out+skel;","#7b9541",name="#l#highway=path", 5, false,"@0.8"),
			
			make_layer(QURL + "?data=(way[highway=pedestrian](bbox);node(w););out+skel;", "#ff6500",name="#l#highway=pedestrian",5, false),
			  
			// tracks & tracktype
			make_layer(QURL + "?data=(way[highway=track](bbox);node(w););out+skel;","#bd9520",
			name="#l#highway=track", 5, false,"@0.8"),
			
            make_layer(QURL + "?data=(way[tracktype=grade1](bbox);node(w););out+skel;","#330000",name="#l#tracktype=grade1", 2, false),
			
			make_layer(QURL + "?data=(way[tracktype=grade2](bbox);node(w););out+skel;","#330000",name="#dl#tracktype=grade2", 3, false,"4 8"),
			
			make_layer(QURL + "?data=(way[tracktype=grade3](bbox);node(w););out+skel;","#A52A2A",name="#dl#tracktype=grade3", 2, false,"4 8"),
			
			make_layer(QURL + "?data=(way[tracktype=grade4](bbox);node(w););out+skel;","#A52A2A",name="#d#tracktype=grade4", 2, false,"1 6"),
			
			make_layer(QURL + "?data=(way[tracktype=grade5](bbox);node(w););out+skel;","black",name="#d#tracktype=grade5", 1, false,"1 3"),
			
			make_layer(QURL + "?data=(way[highway=track][tracktype!~'^grade'](bbox);node(w););out+skel;","white",name="#dl#tracktype unknown", 2, false,"4 8"),
			
			make_layer(QURL + "?data=(way[highway=track][cycleway](bbox);node(w););out+skel;","#ff008b",name="#dl#highway=track &<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcycleway=*",5, false,"4 8"),

			// surface on paths & tracks
			make_layer(QURL + "?data=(way[highway~'^cycle|^foot|^path|^pedestrian|^track'][surface~'^asphalt|^pav|^concrete'](bbox);node(w););out+skel;","#000080",name="#l#surface = paved", 2, false,"@0.8"),
			 
			make_layer(QURL + "?data=(way[surface~'^cob'](bbox);node(w););out+skel;","#000080",name="#dl#surface=cobblestone", 4, false,"4 8@0.8"),
			
			make_layer(QURL + "?data=(way[surface~'^fine_gravel|.shell.'](bbox);node(w););out+skel;","#3965d5",name="#dl#surface=fine_gravel/shells", 3, false,"4 8@0.8"),
			
			// semi paved
			make_layer(QURL + "?data=(way[surface~'^gravel|^compact|^loam'](bbox);node(w););out+skel;","yellow",name="#dl#surface = semi-paved", 3, false,"4 8@0.8"),
			
			// unpaved
			make_layer(QURL + "?data=(way[surface~'^grass|^ground|^unpaved|^dirt|^earth|^sand|^woodchips|^pebble'](bbox);node(w););out+skel;","yellow",name="#d#surface = unpaved", 2, false,"1 3@0.8"),

			 // smoothness
			 make_layer(QURL + "?data=(way[smoothness=bad](bbox);node(w););out+skel;","#00FFFF", 
			 name="#dl#smoothness=bad", 3, false,"4 8"),
			 
			 make_layer(QURL + "?data=(way[smoothness~'^very_bad|^horrible|^very_horrible|^impassable'](bbox);node(w););out+skel;","#00FFFF", 
			 name="#l#smoothness very bad", 4, false)
*/			 
			]);
	}			
		if (type == "route"){

			map.addLayers([
			
			//highway=cycleway
			make_layer(
				QURL + "?data=(way[highway=cycleway](bbox);node(w);way[highway=path][bicycle=designated](bbox);node(w););out+skel;",
				name="#l#highway=cycleway<hr>Route relations:",
				defaultSolidLine("red"),
				false),
/*
			//LF-routes
			make_layer(QURL + "?data=(relation[route=bicycle][network=ncn](bbox);way(r)(bbox);node(w););out+skel;", "blue",name="#l#NCN route <i>(LF route)</i>", 12, false,"@0.6"),

			// knooppuntenroutes
			make_a_layer(QURL + "?data=relation(bbox)[network=rcn];(way(r)(bbox);node(w););out+skel;node(bbox)[rcn_ref];out;", "#00FFFF",name="#l#RCN route <i>(knooppuntroute)</i>", 8, false),

			make_layer(QURL + "?data=(relation[route=bicycle][network=lcn](bbox);way(r)(bbox);node(w););out+skel;", "#7CFC00",name="#dl#LCN route <i>(lokale route)</i>", 5, false,"4 8"),
			
			make_layer(QURL + "?data=(relation[network=icn](bbox);way(r)(bbox);node(w););out+skel;relation[network=icn];rel(r)(bbox);(way(r)(bbox);node(w););out skel;", "yellow",name="#dl#ICN route <i>(Int.route)</i>", 3, false,"4 8"),
			
			//route=mtb
            make_layer(QURL + "?data=(relation[route=mtb](bbox);way(r)(bbox);node(w););out+skel;", "#bd008b",name="#dl#MTB route", 4, false,"4 8"),
			
			//route=hiking, horse
            make_a_layer(QURL + "?data=(relation[route~'hik|foot|walk'](bbox);way(r)(bbox);node(w););out+skel;node[rwn_ref][rcn_ref!~'.'](bbox);out;", "#390000",name="#l#hiking route", 5, false),
			
			make_a_layer(QURL + "?data=(relation[route=horse](bbox);way(r)(bbox);node(w););out+skel;node(bbox)[rhn_ref];out;", "#7b9520",name="#l#horse route", 4, false),
			
			make_layer(QURL + "?data=(way[railway~'^abandoned|^disused|^dismantled'](bbox);node(w););out+skel;", "#7b3000",name="#dl#former railway lines", 4, false,"4 8"),
			
			make_a_layer(QURL + "?data=node[tourism=information](bbox);out;", "red", name="#co#info<hr>Cyclability (indicative):", 2, false),
			
			
			
			// non cyclable ways
			make_layer(QURL + "?data=(way[bicycle~'no|use_sidepath'](bbox);node(w);way[highway][access~'^no|^priv'][vehicle!~'yes'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['mtb:scale'!~'^'](bbox);node(w);way[highway~'^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr'][access! ~'^no|^priv'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['ramp:bicycle'!~'yes'](bbox);node(w);way[highway=track][horse=designated][access! ~'^no|^priv'][bicycle!~'^no|^yes|^desig|^offic|^destin|^permis'][mtb!~'^yes|^desig|^offic|^destin|^permis']['mtb:scale'!~'^'][route!=mtb](bbox);node(w););out+skel;", "#393020",name="<img style='vertical-align: middle;background-color:#393020;' src='img/line.gif'> 'non cycleable' ways", 4, false,"@0.5"),
						
 			// cyclable ways
			make_layer(QURL + "?data=(way[highway][highway!~'^motorway|^trunk|^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr'][access!~'^no|^priv'][bicycle!=no][horse!=designated][tracktype!~'grade4|grade5'](bbox);node(w);way[highway][access~'^no|^priv'][bicycle~'^yes|^desig|^offic|^destin|^permis'](bbox);node(w);way[highway~'^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr|^trunk|^motor'][bicycle~'^yes|^desig|^offic|^destin|^permis'](bbox);node(w);way[highway~'^foot|^path|^pedes|^platform|^steps|^bridleway|^prop|^constr'][mtb~'^yes|^desig|^offic|^destin|^permis'](bbox);node(w);way[highway=steps]['ramp:bicycle'=yes](bbox);node(w);way[route=ferry][bicycle!=no](bbox);node(w););out+skel;", "#39ff00",name="<img style='vertical-align: middle;background-color:#39ff00;' src='img/line.gif'> 'cycleable' ways<hr>", 4, false,"@0.6")
			
*/
			]);
	
			// Officiële LF routes van het Fietsplatform
			var LFRoutes = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: red;' src='img/line.gif'>&nbspOfficial LF routes (routedatabank.nl)",

                                       "http://mapcache.icc.cat/icc_mapesmultibase/utm/wms/service?",
                                       {layers: "orto",
										transparent: true,
										format: "image/png"
										},{
										visibility: false
										});
			map.addLayer(LFRoutes);		
			
			var fietsnetwerk1 = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: green;' src='img/line.gif'>&nbspOfficial cycle node network (routedatabank.nl)",
                                       "http://mapcache.icc.cat/icc_mapesmultibase/utm/wms",
                                       {layers: "orto",
										transparent: true,
										format: "image/png"
										},{
										visibility: true
										});
			map.addLayer(fietsnetwerk1);	
			
			var fietsknoop1 = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: white;' src='img/tocircle.gif'>&nbspOfficial cycle nodes (routedatabank.nl)",
                                       "https://www.routedatabank.nl/geoserver/wms",
                                       {layers: "routedatabank:fietsknooppunten_vrij",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsknoop1);
			
			var fietsnetwerk = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: #39ff00;' src='img/line.gif'>&nbspOfficial cycle node network (pdok.nl)",
                                       "http://geodata.nationaalgeoregister.nl/fietsknooppuntennetwerk/wms",
                                       {layers: "netwerken",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsnetwerk);	
			
			var fietsknoop = new OpenLayers.Layer.WMS("<img style='vertical-align: middle;background-color: white;' src='img/tocircle.gif'>&nbspOfficial cycle nodes (pdok.nl)",
                                       "http://geodata.nationaalgeoregister.nl/fietsknooppuntennetwerk/wms",
                                       {layers: "knooppunten",
										transparent: true,
										format: "image/gif"
										},{
										visibility: false
										});
			map.addLayer(fietsknoop);
	
	}	

	if (type == "bugs"){
		//	dit maakt de layers voor de bugslaag
			map.addLayers([
			
						make_layer(
				QURL + "?data=node[wheelchair=no](bbox);out+skel;",
				name="#c#&nbspwheelchair=no",
				defaultPoint2("red"),
				false
			),
			
							make_layer(
				QURL + "?data=node[shop](bbox);out+skel;",
				name="#c#&nbspshop",
				defaultPoint2("yellow"),
				false
			),
			
								make_layer(
				QURL + "?data=node[amenity](bbox);out+skel;",
				name="#c#&nbspamenity",
				defaultPoint2("yellow"),
				false
			),
			
							make_layer(
				QURL + "?data=node[crossing](bbox);out+skel;",
				name="#c#&nbspcrossing only",
				defaultPoint3("red"),
				false
			),
			
								make_layer(
				QURL + "?data=node[crossing=traffic_signals](bbox);out+skel;",
				name="#c#&nbsptraffic_signals",
				defaultPoint4("blue"),
				false
			),	
			
									make_layer(
				QURL + "?data=node[crossing_ref=zebra](bbox);out+skel;",
				name="#c#&nbsptraffic_signals",
				defaultPoint5("grey"),
				false
			),
			
			
		/*	
		
			make_layer(QURL + "?data=(relation[route=bicycle](bbox);way[bicycle~'no|use_sidepath'](r);node(w););out+skel;", "#39ff00",name="#l#cycle routes & bicycle=no|use_sidepath",8, true,"5 10"),
	
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle=no][moped!~'^yes|^designated'](bbox);node(w););out+skel;", "#ff00d5",name="#l#cycleway/bicycle=no<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNote: temporarily blocked ways?",10, true),
			
			make_layer(QURL + "?data=(way[cycleway][bicycle~'no|use_sidepath'][cycleway!=no](bbox);node(w);way['cycleway:right'][bicycle=no](bbox);node(w);way['cycleway:left'][bicycle=no](bbox);node(w););out+skel;", "purple",name="#l#cycleway lane, track,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspopposite & bicycle=no|use_sidepath",8, true,"5 10"),
			
			make_layer(QURL + "?data=(way[highway=crossing](bbox);node(w););out+skel;", "red",name="#l#highway=crossing<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(should be a node, not a way)",8, true),
			
			make_layer(QURL + "?data=(way[highway=road](bbox);node(w);way[highway=cycleway][fixme](bbox);node(w);way[highway=cycleway][FIXME](bbox);node(w);way[cycleway][fixme](bbox);node(w);way[cycleway][FIXME](bbox);node(w););out+skel;", "green",name="#l#highway=road or cycleway<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspfixme (better tagging needed)",8, true),
			
			make_layer(QURL + "?data=(way[highway~'Pad|pad|Rad|rad|unknown'](bbox);node(w););out+skel;", "#ff6520",name="#l#highway=nonsense",8, true,"5 10@0.5"),
			
			make_layer(QURL + "?data=(relation[route=bicycle](bbox););way(r:\"\")(bbox)->.b;(way.b[oneway=yes];)->.c;(way.c[\"oneway:bicycle\"=no];way.c[cycleway=opposite];way.c[oneway=\"-1\"];way.c[oneway=\"bicycle:backward\"];way.c[oneway=\"bicycle:forward\"];way.c[cycleway=\"opposite_lane\"];)->.d;(.c;- .d;);(._;>;);out+skel;","#17202a",name="#l#oneway cycle route without b/f role",8, true,"5 10"),
			
			// overbodige tags?
			make_layer(QURL + "?data=(way[highway=cycleway][cycleway][cycleway!=shared][cycleway!=segregated](bbox);node(w););out+skel;", "#39ffd5",name="#l#highway=cycleway & cycleway=*",8, false),
      
			make_layer(QURL + "?data=(way[highway=cycleway][bicycle~'yes|designated'](bbox);node(w););out+skel;", "blue",name="#l#cycleway &<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspbicycle=yes/designated<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(needless tagging?)", 3, false,"5 10"),
			
			make_layer(QURL + "?data=(way[name~'^Fietspad|^fietspad|^pad$|^Pad$|cycleway|^path$|^Path$'](bbox);node(w);way[highway=cycleway][name!~'.'](bbox);node(w););out+skel;", "#ffff00",name="#l#cycleway/path without<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspstreetname (address search)",4, false),
*/
			]);
	}
	


}
	

function popuplinks(lonlat){

	  var thelink = "<div STYLE=\"margin:0px 0px 0px 0px;font-size: 8pt;\"><b>MAPA</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\"><img src='img/osm.gif'>OSM</a>&nbsp&nbsp"
	  //COPIAR You can configure all services give you longitud and latitude and specific zoom in URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "zoomcode" target=\"_blank\"><img src='url icon'>Name of the service</a>&nbsp&nbsp";
	  //COPIAR Puedes configurar todo aquel servicio que te d� longitud (lonlat.lon) y latitud (lonla.lat) y un zoom concreto en la URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codigozoom" target=\"_blank\"><img src='url icono'>Nombre del servicio</a>&nbsp&nbsp";
	  //COPIAR Pots configurar tots aquells serveis que et donin longitud i latitud i un zoom concre a l'adre�a URL
	  //COPIAR thelink = thelink + "<a href=\"url" + lonlat.lat + "," + lonlat.lon + "codizoom" target=\"_blank\"><img src='url icona'>Nom del servei</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"https://maps.google.es/maps?ll=" + lonlat.lat + "," + lonlat.lon + "&t=h&z=17\" target=\"_blank\"><img src='img/google.gif'>Google</a>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.bing.com/maps/?v=2&cp=" + lonlat.lat + "~" + lonlat.lon + "&lvl=17&dir=0&sty=h&form=LMLTCC\" target=\"_blank\"><img src='img/bing.gif'>Bing</a><p>";
	  thelink = thelink + "<a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,normal"  + "\" target=\"_blank\"><img src='img/here.png'>Here</a><hr>";
	  thelink = thelink + "<b>SATELITALES</b><br><a href=\"https://wego.here.com/?map="  + (lonlat.lat) + "," + (lonlat.lon ) + "17,satellite"  + "\" target=\"_blank\"><img src='img/digitalglobe.png'>DigitalGlobe</a>";
	  thelink = thelink + "<a href=\"https://www.google.es/maps/@" + lonlat.lat + "," + lonlat.lon + ",100m/data=!3m1!1e3\" target=\"_blank\"><img src='img/google.gif'>Google SAT</a><hr>&nbsp&nbsp";
	  thelink = thelink + "<b>A PIE DE CALLE</b><br><a href=\"https://www.mapillary.com/app/?lat="  + (lonlat.lat) + "&lng=" + (lonlat.lon ) + "&z=15"  + "\" target=\"_blank\"><img src='img/mapillary.png'>Mapillary</a>";
	  thelink = thelink + "<a href=\"https://openstreetcam.org/map/@"  + (lonlat.lat) + "," + (lonlat.lon ) + ",17z"  + "\" target=\"_blank\"><img src='img/openstreetcam.png'>OpenStreetCam</a><hr>";
	   thelink = thelink + "<b>RECORRIDOS</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=CD\" target=\"_blank\"><img src='img/osm.gif'>OSM Cycle Map</a>"
	  thelink = thelink + "<a href=\"http://hiking.waymarkedtrails.org/nl/?zoom=13" +  "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "\" target=\"_blank\"><img src='img/map_hiking.png'>Waymarked trails</a> ";
	  thelink = thelink + "<a href=\"https://www.wikiloc.com/wikiloc/map.do?lt=" + lonlat.lat + "&ln=" + lonlat.lon + "&z=17" + "\" target=\"_blank\"><img src='img/wikiloc.png'>Wikiloc</a><hr>";
	  thelink = thelink + "<b>TRANSPORTE</b><br><a href=\"http://www.openstreetmap.org?lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17&layers=TB\" target=\"_blank\"><img src='img/osm.gif'>OSM Public Transport</a>"
	  thelink = thelink + "<a href=\"http://www.xn--pnvkarte-m4a.de/#" + lonlat.lon + ";" + lonlat.lat + ";15" + "\" target=\"_blank\"><img src='img/opvnkarte.png'>Opvnkarte</a><hr> ";
	  
	  
	
	  var area = 0.04
	  var ctop = lonlat.lat + area;
	  var cbottom = ctop - (2 * area);
	  var cleft = lonlat.lon - area;
	  var cright = cleft + (2 * area); 
	  
	  thelink = thelink + "<b>Editar :</b><br><a href=\"http://localhost:8111/load_and_zoom?top=" + ctop + "&bottom=" + cbottom + "&left=" + cleft + "&right=" + cright + "\" target=\"josm_frame\">JOSM (necesitas conector)</a><br>";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=id&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Editor iD</a><br>&nbsp&nbsp";
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?editor=potlatch2&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 2</a><br>&nbsp&nbsp";	
	  thelink = thelink + "<a href=\"http://www.openstreetmap.org/edit?&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=17\" target=\"_blank\">Potlatch 1</a><hr>";
	  
	  thelink = thelink + "<b>Errores en OSM </b><br><a href=\"http://www.openstreetmap.org/#map=12" + "/" + lonlat.lat + "/" + lonlat.lon + "&layers=N" + "\" target=_blank> Notas en Openstreetmap</a><br \>";
	  thelink = thelink + "<a href=\"http://keepright.ipax.at/report_map.php?" + "&lat=" + lonlat.lat + "&lon=" + lonlat.lon + "&zoom=14&&layers=B0T&ch=0%2C50%2C191%2C195%2C201%2C205%2C206%2C311%2C312%2C313%2C402&show_ign=1&show_tmpign=1" + "\" target=_blank> Keepright</a><hr>"; 
	  thelink = thelink + "</b></div>";
	  return thelink;
	  
	}
