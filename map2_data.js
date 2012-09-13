/***********************************************************
Fake / precached data (don't anger the google!)
***********************************************************/


function build_address_geocodes_cache() {
	// Needless to say, the backend should probably cache this and send it with the menu.
	return {
	"699 8th Street, San Francisco, CA 94103":
	[{"address_components":[{"long_name":"699","short_name":"699","types":["street_number"]},{"long_name":"8th St","short_name":"8th St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"699 8th St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.7713265,"Ya":-122.40271139999999},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7699775197085,"f":37.7726754802915},"ea":{"b":-122.40406038029153,"f":-122.4013624197085}}},"types":["street_address"]}],
	
	"601 Townsend Street, San Francisco, CA 94103":
	[{"address_components":[{"long_name":"601","short_name":"601","types":["street_number"]},{"long_name":"Townsend St","short_name":"Townsend St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"601 Townsend St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.7713728,"Ya":-122.40201730000001},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.77002381970851,"f":37.7727217802915},"ea":{"b":-122.4033662802915,"f":-122.40066831970853}}},"types":["street_address"]}],
	
	"736 Divisadero St San Francisco, CA 94117":
	[{"address_components":[{"long_name":"736","short_name":"736","types":["street_number"]},{"long_name":"Divisadero St","short_name":"Divisadero St","types":["route"]},{"long_name":"Alamo Square","short_name":"Alamo Square","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94117","short_name":"94117","types":["postal_code"]}],"formatted_address":"736 Divisadero St, San Francisco, CA 94117, USA","geometry":{"location":{"Xa":37.776473,"Ya":-122.43771600000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.77512401970849,"f":37.77782198029149},"ea":{"b":-122.4390649802915,"f":-122.43636701970848}}},"types":["street_address"]}],
	
	"530 Hampshire St. Suite 301, San Francisco, CA 94110":
	[{"address_components":[{"long_name":"301","short_name":"301","types":["subpremise"]},{"long_name":"530","short_name":"530","types":["street_number"]},{"long_name":"Hampshire St","short_name":"Hampshire St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"530 Hampshire St #301, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.762741,"Ya":-122.40842680000003},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.7613920197085,"f":37.76408998029149},"ea":{"b":-122.40977578029151,"f":-122.40707781970849}}},"partial_match":true,"types":["subpremise"]}],
	
	"372 24th Street, Oakland, CA 94612": [{"address_components":[{"long_name":"372","short_name":"372","types":["street_number"]},{"long_name":"24th St","short_name":"24th St","types":["route"]},{"long_name":"Downtown Oakland","short_name":"Downtown Oakland","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94612","short_name":"94612","types":["postal_code"]}],"formatted_address":"372 24th St, Oakland, CA 94612, USA","geometry":{"location":{"Xa":37.8133246,"Ya":-122.26453609999999},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.81197561970851,"f":37.8146735802915},"ea":{"b":-122.26588508029147,"f":-122.2631871197085}}},"types":["street_address"]}],
	
	"345 Spear St, San Francisco, CA 94105": [{"address_components":[{"long_name":"345","short_name":"345","types":["street_number"]},{"long_name":"Spear St","short_name":"Spear St","types":["route"]},{"long_name":"South Beach","short_name":"South Beach","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94105","short_name":"94105","types":["postal_code"]}],"formatted_address":"345 Spear St, San Francisco, CA 94105, USA","geometry":{"location":{"Xa":37.7897624,"Ya":-122.39019209999998},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7884134197085,"f":37.7911113802915},"ea":{"b":-122.39154108029152,"f":-122.3888431197085}}},"types":["street_address"]}],
	
	"Pier 28 Annex, The Embarcadero, San Francisco, CA 94105": [{"address_components":[{"long_name":"94105","short_name":"94105","types":["postal_code"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"San Francisco, CA 94105, USA","geometry":{"bounds":{"ca":{"b":37.7824491,"f":37.80018200000001},"ea":{"b":-122.4034919,"f":-122.38168100000001}},"location":{"Xa":37.7890183,"Ya":-122.3915063},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.7824491,"f":37.80018200000001},"ea":{"b":-122.4034919,"f":-122.38168100000001}}},"types":["postal_code"]},{"address_components":[{"long_name":"The Embarcadero","short_name":"The Embarcadero","types":["route"]},{"long_name":"Embarcadero","short_name":"Embarcadero","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94105","short_name":"94105","types":["postal_code"]}],"formatted_address":"The Embarcadero, San Francisco, CA 94105, USA","geometry":{"bounds":{"ca":{"b":37.781789,"f":37.7993944},"ea":{"b":-122.39752959999998,"f":-122.3876444}},"location":{"Xa":37.7914152,"Ya":-122.39070889999999},"location_type":"GEOMETRIC_CENTER","viewport":{"ca":{"b":37.781789,"f":37.7993944},"ea":{"b":-122.39752959999998,"f":-122.3876444}}},"types":["route"]},{"address_components":[{"long_name":"Embarcadero Dentistry","short_name":"Embarcadero Dentistry","types":["point_of_interest","establishment"]},{"long_name":"1","short_name":"1","types":["street_number"]},{"long_name":"The Embarcadero","short_name":"The Embarcadero","types":["route"]},{"long_name":"Financial District","short_name":"Financial District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94105","short_name":"94105","types":["postal_code"]}],"formatted_address":"Embarcadero Dentistry, 1 The Embarcadero, San Francisco, CA 94105, USA","geometry":{"location":{"Xa":37.7949905,"Ya":-122.3984934},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.7936415197085,"f":37.79633948029149},"ea":{"b":-122.39984238029149,"f":-122.39714441970852}}},"types":["point_of_interest","dentist","doctor","health","establishment"]}],
	
	"799 Market St #4, San Francisco, CA 94103": 
	[{"address_components":[{"long_name":"799","short_name":"799","types":["street_number"]},{"long_name":"Market St","short_name":"Market St","types":["route"]},{"long_name":"SoMa","short_name":"SoMa","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"799 Market St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.785647,"Ya":-122.40526499999999},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7842980197085,"f":37.7869959802915},"ea":{"b":-122.40661398029147,"f":-122.4039160197085}}},"partial_match":true,"types":["street_address"]}],
	
	"660 3rd Street, 4th Floor, San Francisco, CA 94107":
	[{"address_components":[{"long_name":"660","short_name":"660","types":["street_number"]},{"long_name":"3rd St","short_name":"3rd St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94107","short_name":"94107","types":["postal_code"]}],"formatted_address":"660 3rd St, San Francisco, CA 94107, USA","geometry":{"location":{"Xa":37.77934260000001,"Ya":-122.3933634},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.77799361970851,"f":37.78069158029151},"ea":{"b":-122.39471238029148,"f":-122.39201441970852}}},"partial_match":true,"types":["street_address"]}],
	
	"168 South Park Ave, SF, CA 94107":
	[{"address_components":[{"long_name":"168","short_name":"168","types":["street_number"]},{"long_name":"Park St","short_name":"Park St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"168 Park St, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.7365785,"f":37.7365793},"ea":{"b":-122.42177040000001,"f":-122.42177029999999}},"location":{"Xa":37.7365785,"Ya":-122.42177040000001},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7352299197085,"f":37.7379278802915},"ea":{"b":-122.42311933029151,"f":-122.42042136970849}}},"partial_match":true,"types":["street_address"]}],
	
	"2901 Mission St, San Francisco, CA 94110":
	[{"address_components":[{"long_name":"2901","short_name":"2901","types":["street_number"]},{"long_name":"Mission St","short_name":"Mission St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"2901 Mission St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.7505442,"Ya":-122.41818720000003},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7491952197085,"f":37.7518931802915},"ea":{"b":-122.41953618029152,"f":-122.4168382197085}}},"types":["street_address"]}],
	
	"301 Brannan Street #6,\u00a0San Francisco, CA 94107":
	[{"address_components":[{"long_name":"301","short_name":"301","types":["street_number"]},{"long_name":"Brannan St","short_name":"Brannan St","types":["route"]},{"long_name":"South Beach","short_name":"South Beach","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94107","short_name":"94107","types":["postal_code"]}],"formatted_address":"301 Brannan St, San Francisco, CA 94107, USA","geometry":{"location":{"Xa":37.7815721,"Ya":-122.3922748},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7802231197085,"f":37.78292108029149},"ea":{"b":-122.39362378029148,"f":-122.39092581970851}}},"partial_match":true,"types":["street_address"]}],
	
	"597 Haight St, San Francisco, CA 94117":
	[{"address_components":[{"long_name":"597","short_name":"597","types":["street_number"]},{"long_name":"Haight St","short_name":"Haight St","types":["route"]},{"long_name":"Lower Haight","short_name":"Lower Haight","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94117","short_name":"94117","types":["postal_code"]}],"formatted_address":"597 Haight St, San Francisco, CA 94117, USA","geometry":{"location":{"Xa":37.7718332,"Ya":-122.43195889999998},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7704842197085,"f":37.77318218029149},"ea":{"b":-122.43330788029152,"f":-122.4306099197085}}},"types":["street_address"]}],
	
	"1740 Haight St, San Francisco, CA 94117":
	[{"address_components":[{"long_name":"1740","short_name":"1740","types":["street_number"]},{"long_name":"Haight St","short_name":"Haight St","types":["route"]},{"long_name":"Haight","short_name":"Haight","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94117","short_name":"94117","types":["postal_code"]}],"formatted_address":"1740 Haight St, San Francisco, CA 94117, USA","geometry":{"location":{"Xa":37.7695971,"Ya":-122.4509539},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7682481197085,"f":37.77094608029149},"ea":{"b":-122.45230288029148,"f":-122.44960491970852}}},"types":["street_address"]}],
	
	"1550 Bryant St. San Francisco, CA 94103":
	[{"address_components":[{"long_name":"1550","short_name":"1550","types":["street_number"]},{"long_name":"Bryant St","short_name":"Bryant St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"1550 Bryant St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.767562,"Ya":-122.41114199999998},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7662130197085,"f":37.7689109802915},"ea":{"b":-122.41249098029152,"f":-122.4097930197085}}},"types":["street_address"]}],
	
	"650D Florida Street, San Francisco, CA, 94110":
	[{"address_components":[{"long_name":"650","short_name":"650","types":["street_number"]},{"long_name":"Florida St","short_name":"Florida St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"650 Florida St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.760978,"Ya":-122.4111499},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.75962901970851,"f":37.7623269802915},"ea":{"b":-122.41249888029148,"f":-122.40980091970852}}},"partial_match":true,"types":["street_address"]}],
	
	"593 Guerrero Street, San Francisco, CA":
	[{"address_components":[{"long_name":"593","short_name":"593","types":["street_number"]},{"long_name":"Guerrero St","short_name":"Guerrero St","types":["route"]},{"long_name":"Mission Dolores","short_name":"Mission Dolores","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"593 Guerrero St, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.7618377,"f":37.7618378},"ea":{"b":-122.42380209999999,"f":-122.42380109999999}},"location":{"Xa":37.7618378,"Ya":-122.42380109999999},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7604887697085,"f":37.7631867302915},"ea":{"b":-122.42515058029153,"f":-122.42245261970851}}},"types":["street_address"]}],
	
	"22nd & Bartlett, San Francisco, CA 94110":
	[{"address_components":[{"long_name":"22nd St","short_name":"22nd St","types":["route"]},{"long_name":"Mission","short_name":"Mission","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"22nd St & Bartlett St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.7553766,"Ya":-122.41985699999998},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.75402761970849,"f":37.75672558029149},"ea":{"b":-122.42120598029152,"f":-122.4185080197085}}},"partial_match":true,"types":["intersection"]}],
	
	"1307 61st St, Emeryville, CA":
	[{"address_components":[{"long_name":"1307","short_name":"1307","types":["street_number"]},{"long_name":"61st St","short_name":"61st St","types":["route"]},{"long_name":"Emeryville","short_name":"Emeryville","types":["locality","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94608","short_name":"94608","types":["postal_code"]}],"formatted_address":"1307 61st St, Emeryville, CA 94608, USA","geometry":{"bounds":{"ca":{"b":37.8429845,"f":37.84298520000001},"ea":{"b":-122.2887814,"f":-122.28878099999997}},"location":{"Xa":37.8429845,"Ya":-122.28878099999997},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.8416358697085,"f":37.8443338302915},"ea":{"b":-122.2901301802915,"f":-122.28743221970853}}},"types":["street_address"]}],
	
	"800 Potter Street, Berkeley, CA 94710":
	[{"address_components":[{"long_name":"800","short_name":"800","types":["street_number"]},{"long_name":"Potter St","short_name":"Potter St","types":["route"]},{"long_name":"Southwest Berkeley","short_name":"Southwest Berkeley","types":["sublocality","political"]},{"long_name":"Berkeley","short_name":"Berkeley","types":["locality","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94710","short_name":"94710","types":["postal_code"]}],"formatted_address":"800 Potter St, Berkeley, CA 94710, USA","geometry":{"location":{"Xa":37.8511628,"Ya":-122.29265120000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.84981381970849,"f":37.85251178029149},"ea":{"b":-122.2940001802915,"f":-122.29130221970848}}},"types":["street_address"]}],
	
	"530 Hampshire St #301, San Francisco Ca":
	[{"address_components":[{"long_name":"530","short_name":"530","types":["street_number"]},{"long_name":"Hampshire St","short_name":"Hampshire St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"530 Hampshire St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.762741,"Ya":-122.40842680000003},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7613920197085,"f":37.76408998029149},"ea":{"b":-122.40977578029151,"f":-122.40707781970849}}},"partial_match":true,"types":["street_address"]}],
	
	"Stern Grove Park, SF CA":
	[{"address_components":[{"long_name":"Sigmund Stern Grove","short_name":"Sigmund Stern Grove","types":["establishment"]},{"long_name":"2750","short_name":"2750","types":["street_number"]},{"long_name":"19th Ave","short_name":"19th Ave","types":["route"]},{"long_name":"Sunset District","short_name":"Sunset District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94132","short_name":"94132","types":["postal_code"]}],"formatted_address":"Sigmund Stern Grove, 2750 19th Ave, San Francisco, CA 94132, USA","geometry":{"bounds":{"ca":{"b":37.734665,"f":37.7374508},"ea":{"b":-122.48187459999997,"f":-122.47520309999999}},"location":{"Xa":37.7358667,"Ya":-122.4771518},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.734665,"f":37.7374508},"ea":{"b":-122.48187459999997,"f":-122.47520309999999}}},"partial_match":true,"types":["park","establishment"]}],
	
	"Solano & San Pablo Ave, Albany, CA 94706":
	[{"address_components":[{"long_name":"San Pablo Ave","short_name":"San Pablo Ave","types":["route"]},{"long_name":"Albany","short_name":"Albany","types":["locality","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94706","short_name":"94706","types":["postal_code"]}],"formatted_address":"San Pablo Ave & Solano Ave, Albany, CA 94706, USA","geometry":{"location":{"Xa":37.8902742,"Ya":-122.29888289999997},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.8889252197085,"f":37.8916231802915},"ea":{"b":-122.3002318802915,"f":-122.29753391970848}}},"partial_match":true,"types":["intersection"]}],
	
	"101 Lake Ave, Piedmont, CA 94611":
	[{"address_components":[{"long_name":"101","short_name":"101","types":["street_number"]},{"long_name":"Lake Ave","short_name":"Lake Ave","types":["route"]},{"long_name":"Piedmont","short_name":"Piedmont","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94611","short_name":"94611","types":["postal_code"]}],"formatted_address":"101 Lake Ave, Piedmont, CA 94611, USA","geometry":{"location":{"Xa":37.82444340000001,"Ya":-122.24705519999998},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.82309441970851,"f":37.82579238029151},"ea":{"b":-122.24840418029152,"f":-122.2457062197085}}},"types":["street_address"]}],
	
	"2312 Russell Street, Berkeley, CA 94705":
	[{"address_components":[{"long_name":"2312","short_name":"2312","types":["street_number"]},{"long_name":"Russell St","short_name":"Russell St","types":["route"]},{"long_name":"South Berkeley","short_name":"South Berkeley","types":["neighborhood","political"]},{"long_name":"Berkeley","short_name":"Berkeley","types":["locality","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94705","short_name":"94705","types":["postal_code"]}],"formatted_address":"2312 Russell St, Berkeley, CA 94705, USA","geometry":{"location":{"Xa":37.8573108,"Ya":-122.26084659999998},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.8559618197085,"f":37.8586597802915},"ea":{"b":-122.26219558029152,"f":-122.2594976197085}}},"types":["street_address"]}],
	
	"1106 Market St, San Francisco, CA 94102  ":
	[{"address_components":[{"long_name":"1106","short_name":"1106","types":["street_number"]},{"long_name":"Market St","short_name":"Market St","types":["route"]},{"long_name":"Civic Center","short_name":"Civic Center","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94102","short_name":"94102","types":["postal_code"]}],"formatted_address":"1106 Market St, San Francisco, CA 94102, USA","geometry":{"location":{"Xa":37.7809256,"Ya":-122.41229900000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7795766197085,"f":37.7822745802915},"ea":{"b":-122.4136479802915,"f":-122.41095001970848}}},"types":["street_address"]}],
	
	"2209 Polk St, San Francisco, CA 94109":
	[{"address_components":[{"long_name":"2209","short_name":"2209","types":["street_number"]},{"long_name":"Polk St","short_name":"Polk St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94109","short_name":"94109","types":["postal_code"]}],"formatted_address":"2209 Polk St, San Francisco, CA 94109, USA","geometry":{"location":{"Xa":37.79708370000001,"Ya":-122.42211930000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.79573471970851,"f":37.79843268029151},"ea":{"b":-122.4234682802915,"f":-122.42077031970848}}},"types":["street_address"]}],
	
	"65 Webster Street, Oakland, CA 94607":
	[{"address_components":[{"long_name":"65","short_name":"65","types":["street_number"]},{"long_name":"Webster St","short_name":"Webster St","types":["route"]},{"long_name":"Downtown Oakland","short_name":"Downtown Oakland","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]}],"formatted_address":"65 Webster St, Oakland, CA 94607, USA","geometry":{"bounds":{"ca":{"b":37.7944299,"f":37.7944302},"ea":{"b":-122.27436690000002,"f":-122.27436599999999}},"location":{"Xa":37.7944302,"Ya":-122.27436690000002},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7930810697085,"f":37.7957790302915},"ea":{"b":-122.27571543029148,"f":-122.27301746970852}}},"partial_match":true,"types":["street_address"]}],
	
	"2128 Folsom Street":
	[{"address_components":[{"long_name":"2128","short_name":"2128","types":["street_number"]},{"long_name":"Folsom St","short_name":"Folsom St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"2128 Folsom St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.7632389,"Ya":-122.4152717},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.76188991970849,"f":37.76458788029149},"ea":{"b":-122.41662068029149,"f":-122.41392271970847}}},"types":["street_address"]}],
	
	"1601 Willow Road, Menlo Park, CA 94025":
	[{"address_components":[{"long_name":"1601","short_name":"1601","types":["street_number"]},{"long_name":"Willow Rd","short_name":"Willow Rd","types":["route"]},{"long_name":"Menlo Park","short_name":"Menlo Park","types":["locality","political"]},{"long_name":"San Mateo","short_name":"San Mateo","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94025","short_name":"94025","types":["postal_code"]}],"formatted_address":"1601 Willow Rd, Menlo Park, CA 94025, USA","geometry":{"location":{"Xa":37.4832526,"Ya":-122.150037},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.4819036197085,"f":37.4846015802915},"ea":{"b":-122.15138598029148,"f":-122.14868801970852}}},"types":["street_address"]}],
	
	"402 Cortland Ave San Francisco, CA 94110":
	[{"address_components":[{"long_name":"402","short_name":"402","types":["street_number"]},{"long_name":"Cortland Ave","short_name":"Cortland Ave","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"402 Cortland Ave, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.7390866,"Ya":-122.41762299999999},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7377376197085,"f":37.7404355802915},"ea":{"b":-122.41897198029153,"f":-122.41627401970851}}},"types":["street_address"]}],
	
	"610 Old Mason Street  San Francisco, CA 94129":
	[{"address_components":[{"long_name":"610","short_name":"610","types":["street_number"]},{"long_name":"Golden Gate National Recreation Area","short_name":"Golden Gate National Recreation Area","types":["establishment"]},{"long_name":"Old Mason St","short_name":"Old Mason St","types":["route"]},{"long_name":"Presidio","short_name":"Presidio","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94129","short_name":"94129","types":["postal_code"]}],"formatted_address":"610 Old Mason St, Golden Gate National Recreation Area, San Francisco, CA 94129, USA","geometry":{"location":{"Xa":37.8029076,"Ya":-122.45886659999996},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.80155861970849,"f":37.80425658029149},"ea":{"b":-122.4602155802915,"f":-122.45751761970848}}},"types":["street_address"]}],
	
	"2323 Mission St, San Francisco, CA 94110":
	[{"address_components":[{"long_name":"2323","short_name":"2323","types":["street_number"]},{"long_name":"Mission St","short_name":"Mission St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"2323 Mission St, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.7598064,"f":37.7598064},"ea":{"b":-122.41919559999997,"f":-122.4191945}},"location":{"Xa":37.7598064,"Ya":-122.4191945},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.75845741970851,"f":37.76115538029151},"ea":{"b":-122.42054403029147,"f":-122.4178460697085}}},"types":["street_address"]}],
	
	"550 Alabama St., San Francisco, CA 94110 (Buzz 11)":
	[{"address_components":[{"long_name":"550","short_name":"550","types":["street_number"]},{"long_name":"Alabama St","short_name":"Alabama St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"550 Alabama St, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.762367,"f":37.7623671},"ea":{"b":-122.41213870000001,"f":-122.41213770000002}},"location":{"Xa":37.762367,"Ya":-122.41213870000001},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7610180697085,"f":37.7637160302915},"ea":{"b":-122.4134871802915,"f":-122.41078921970848}}},"types":["street_address"]}],
	
	"2025 Telegraph Ave, Oakland, CA":
	[{"address_components":[{"long_name":"2025","short_name":"2025","types":["street_number"]},{"long_name":"Telegraph Ave","short_name":"Telegraph Ave","types":["route"]},{"long_name":"Uptown","short_name":"Uptown","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94612","short_name":"94612","types":["postal_code"]}],"formatted_address":"2025 Telegraph Ave, Oakland, CA 94612, USA","geometry":{"location":{"Xa":37.810166,"Ya":-122.269834},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.8088170197085,"f":37.8115149802915},"ea":{"b":-122.27118298029148,"f":-122.26848501970852}}},"types":["street_address"]}],
	
	"Larkspur Landing Circle":
	[{"address_components":[{"long_name":"Larkspur Landing Cir","short_name":"Larkspur Landing Cir","types":["route"]},{"long_name":"Larkspur","short_name":"Larkspur","types":["locality","political"]},{"long_name":"Marin","short_name":"Marin","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94939","short_name":"94939","types":["postal_code"]}],"formatted_address":"Larkspur Landing Cir, Larkspur, CA 94939, USA","geometry":{"bounds":{"ca":{"b":37.9453568,"f":37.9494169},"ea":{"b":-122.512292,"f":-122.50555300000002}},"location":{"Xa":37.9480101,"Ya":-122.50849790000001},"location_type":"GEOMETRIC_CENTER","viewport":{"ca":{"b":37.9453568,"f":37.9494169},"ea":{"b":-122.512292,"f":-122.50555300000002}}},"types":["route"]}],
	
	"331 Cortland, San Francisco 94110":
	[{"address_components":[{"long_name":"331","short_name":"331","types":["street_number"]},{"long_name":"Cortland Ave","short_name":"Cortland Ave","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"331 Cortland Ave, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.7392092,"f":37.73921},"ea":{"b":-122.418023,"f":-122.41802289999998}},"location":{"Xa":37.73921,"Ya":-122.41802289999998},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7378606197085,"f":37.74055858029149},"ea":{"b":-122.4193719302915,"f":-122.41667396970848}}},"partial_match":true,"types":["street_address"]}],
	
	"320 Fell Street, San Francisco CA 94102":
	[{"address_components":[{"long_name":"320","short_name":"320","types":["street_number"]},{"long_name":"Fell St","short_name":"Fell St","types":["route"]},{"long_name":"Hayes Valley","short_name":"Hayes Valley","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94102","short_name":"94102","types":["postal_code"]}],"formatted_address":"320 Fell St, San Francisco, CA 94102, USA","geometry":{"location":{"Xa":37.7760092,"Ya":-122.42317919999999},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.77466021970851,"f":37.77735818029151},"ea":{"b":-122.42452818029153,"f":-122.42183021970851}}},"types":["street_address"]}],
	
	"1123 Folsom St, San Francisco CA 94107":
	[{"address_components":[{"long_name":"1123","short_name":"1123","types":["street_number"]},{"long_name":"Folsom St","short_name":"Folsom St","types":["route"]},{"long_name":"SoMa","short_name":"SoMa","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"1123 Folsom St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.7761514,"Ya":-122.4084575},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7748024197085,"f":37.7775003802915},"ea":{"b":-122.40980648029148,"f":-122.40710851970852}}},"partial_match":true,"types":["street_address"]}],
	
	"10 Thomas Drive, Mill Valley, CA 94941":
	[{"address_components":[{"long_name":"10","short_name":"10","types":["street_number"]},{"long_name":"Thomas Dr","short_name":"Thomas Dr","types":["route"]},{"long_name":"Mill Valley","short_name":"Mill Valley","types":["locality","political"]},{"long_name":"Marin","short_name":"Marin","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94941","short_name":"94941","types":["postal_code"]}],"formatted_address":"10 Thomas Dr, Mill Valley, CA 94941, USA","geometry":{"location":{"Xa":37.906023,"Ya":-122.51401900000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.90467401970849,"f":37.90737198029149},"ea":{"b":-122.5153679802915,"f":-122.51267001970848}}},"types":["street_address"]}],
	
	"550 Alabama St, San Francisco CA 94110":
	[{"address_components":[{"long_name":"550","short_name":"550","types":["street_number"]},{"long_name":"Alabama St","short_name":"Alabama St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"550 Alabama St, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.762367,"f":37.7623671},"ea":{"b":-122.41213870000001,"f":-122.41213770000002}},"location":{"Xa":37.762367,"Ya":-122.41213870000001},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7610180697085,"f":37.7637160302915},"ea":{"b":-122.4134871802915,"f":-122.41078921970848}}},"types":["street_address"]}],
	
	"4th Street between Lincoln and b Street, San Rafael CA":
	[{"address_components":[{"long_name":"San Rafael","short_name":"San Rafael","types":["locality","political"]},{"long_name":"Marin","short_name":"Marin","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"San Rafael, CA, USA","geometry":{"bounds":{"ca":{"b":37.9424867,"f":38.0278209},"ea":{"b":-122.592352,"f":-122.4491486}},"location":{"Xa":37.9735346,"Ya":-122.53108739999999},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.9424867,"f":38.0278209},"ea":{"b":-122.592352,"f":-122.4491486}}},"types":["locality","political"]}],
	
	"759 E Blithedale, Mill Valley CA":
	[{"address_components":[{"long_name":"759","short_name":"759","types":["street_number"]},{"long_name":"E Blithedale Ave","short_name":"E Blithedale Ave","types":["route"]},{"long_name":"Mill Valley","short_name":"Mill Valley","types":["locality","political"]},{"long_name":"Marin","short_name":"Marin","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94941","short_name":"94941","types":["postal_code"]}],"formatted_address":"759 E Blithedale Ave, Mill Valley, CA 94941, USA","geometry":{"location":{"Xa":37.903432,"Ya":-122.524517},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.9020830197085,"f":37.9047809802915},"ea":{"b":-122.52586598029148,"f":-122.52316801970852}}},"partial_match":true,"types":["street_address"]}],
	
	"1106 Market St, San Francisco, CA 94102":
	[{"address_components":[{"long_name":"1106","short_name":"1106","types":["street_number"]},{"long_name":"Market St","short_name":"Market St","types":["route"]},{"long_name":"Civic Center","short_name":"Civic Center","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94102","short_name":"94102","types":["postal_code"]}],"formatted_address":"1106 Market St, San Francisco, CA 94102, USA","geometry":{"location":{"Xa":37.7809256,"Ya":-122.41229900000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7795766197085,"f":37.7822745802915},"ea":{"b":-122.4136479802915,"f":-122.41095001970848}}},"types":["street_address"]}],
	
	"Bridgeway and Napa St., Sausalito CA":
	[{"address_components":[{"long_name":"Bridgeway","short_name":"Bridgeway","types":["route"]},{"long_name":"Sausalito","short_name":"Sausalito","types":["locality","political"]},{"long_name":"Marin","short_name":"Marin","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94965","short_name":"94965","types":["postal_code"]}],"formatted_address":"Bridgeway & Napa St, Sausalito, CA 94965, USA","geometry":{"location":{"Xa":37.8612154,"Ya":-122.48942399999999},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.8598664197085,"f":37.8625643802915},"ea":{"b":-122.49077298029147,"f":-122.4880750197085}}},"types":["intersection"]}],
	
	"1830 Harrison St, San Francisco, CA":
	[{"address_components":[{"long_name":"1830","short_name":"1830","types":["street_number"]},{"long_name":"Harrison St","short_name":"Harrison St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"1830 Harrison St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.7680142,"Ya":-122.41356810000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7666652197085,"f":37.7693631802915},"ea":{"b":-122.4149170802915,"f":-122.41221911970848}}},"types":["street_address"]}],
	
	"3490 California St, Suite 203, San Francisco CA":
	[{"address_components":[{"long_name":"203","short_name":"203","types":["subpremise"]},{"long_name":"3490","short_name":"3490","types":["street_number"]},{"long_name":"California St","short_name":"California St","types":["route"]},{"long_name":"Presidio Heights","short_name":"Presidio Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94118","short_name":"94118","types":["postal_code"]}],"formatted_address":"3490 California St #203, San Francisco, CA 94118, USA","geometry":{"location":{"Xa":37.7867614,"Ya":-122.4516544},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.7854124197085,"f":37.7881103802915},"ea":{"b":-122.45300338029153,"f":-122.45030541970851}}},"partial_match":true,"types":["subpremise"]}],
	
	"900 North Point St, Suite F100, San Francisco CA":
	[{"address_components":[{"long_name":"f100","short_name":"f100","types":["subpremise"]},{"long_name":"900","short_name":"900","types":["street_number"]},{"long_name":"North Point St","short_name":"North Point St","types":["route"]},{"long_name":"Fisherman's Wharf","short_name":"Fisherman's Wharf","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94109","short_name":"94109","types":["postal_code"]}],"formatted_address":"f100, 900 North Point St, San Francisco, CA 94109, USA","geometry":{"location":{"Xa":37.80564469999999,"Ya":-122.42237449999999},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.8042957197085,"f":37.80699368029149},"ea":{"b":-122.42372348029153,"f":-122.42102551970851}}},"partial_match":true,"types":["subpremise"]}],
	
	"470 Carolina St, San Francisco CA":
	[{"address_components":[{"long_name":"470","short_name":"470","types":["street_number"]},{"long_name":"Carolina St","short_name":"Carolina St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"470 Carolina St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.7626075,"Ya":-122.40060410000001},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.76125851970851,"f":37.7639564802915},"ea":{"b":-122.40195308029149,"f":-122.39925511970853}}},"types":["street_address"]}],
	
	"1828 Union St, San Francisco CA":
	[{"address_components":[{"long_name":"1828","short_name":"1828","types":["street_number"]},{"long_name":"Union St","short_name":"Union St","types":["route"]},{"long_name":"Cow Hollow","short_name":"Cow Hollow","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94123","short_name":"94123","types":["postal_code"]}],"formatted_address":"1828 Union St, San Francisco, CA 94123, USA","geometry":{"location":{"Xa":37.7979641,"Ya":-122.4294597},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.79661511970851,"f":37.7993130802915},"ea":{"b":-122.43080868029153,"f":-122.42811071970851}}},"types":["street_address"]}],
	
	"556 San Mateo Avenue, San Bruno CA":
	[{"address_components":[{"long_name":"556","short_name":"556","types":["street_number"]},{"long_name":"San Mateo Ave","short_name":"San Mateo Ave","types":["route"]},{"long_name":"San Bruno","short_name":"San Bruno","types":["locality","political"]},{"long_name":"San Mateo","short_name":"San Mateo","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94066","short_name":"94066","types":["postal_code"]}],"formatted_address":"556 San Mateo Ave, San Bruno, CA 94066, USA","geometry":{"location":{"Xa":37.625655,"Ya":-122.41096099999999},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.62430601970851,"f":37.6270039802915},"ea":{"b":-122.41230998029152,"f":-122.4096120197085}}},"types":["street_address"]}],
	
	"855 El Camino Real, #127, Palo Alto CA":
	[{"address_components":[{"long_name":"855","short_name":"855","types":["street_number"]},{"long_name":"El Camino Real","short_name":"El Camino Real","types":["route"]},{"long_name":"Palo Alto","short_name":"Palo Alto","types":["locality","political"]},{"long_name":"Santa Clara","short_name":"Santa Clara","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94301","short_name":"94301","types":["postal_code"]}],"formatted_address":"855 El Camino Real, Palo Alto, CA 94301, USA","geometry":{"location":{"Xa":37.4394145,"Ya":-122.15868290000003},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.4380655197085,"f":37.4407634802915},"ea":{"b":-122.16003188029151,"f":-122.15733391970849}}},"partial_match":true,"types":["street_address"]}],
	
	"514 4th St, San Rafael CA":
	[{"address_components":[{"long_name":"514","short_name":"514","types":["street_number"]},{"long_name":"4th St","short_name":"4th St","types":["route"]},{"long_name":"San Rafael","short_name":"San Rafael","types":["locality","political"]},{"long_name":"Marin","short_name":"Marin","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94901","short_name":"94901","types":["postal_code"]}],"formatted_address":"514 4th St, San Rafael, CA 94901, USA","geometry":{"location":{"Xa":37.9722802,"Ya":-122.51955420000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.9709312197085,"f":37.9736291802915},"ea":{"b":-122.5209031802915,"f":-122.51820521970853}}},"types":["street_address"]}],
	
	"2948 Folsom Street, San Francisco CA 94110":
	[{"address_components":[{"long_name":"2948","short_name":"2948","types":["street_number"]},{"long_name":"Folsom St","short_name":"Folsom St","types":["route"]},{"long_name":"Mission","short_name":"Mission","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"2948 Folsom St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.7501387,"Ya":-122.41401869999999},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7487897197085,"f":37.7514876802915},"ea":{"b":-122.41536768029152,"f":-122.4126697197085}}},"types":["street_address"]}],
	
	"2127 Polk Street, San Francisco, CA 94109":
	[{"address_components":[{"long_name":"2127","short_name":"2127","types":["street_number"]},{"long_name":"Polk St","short_name":"Polk St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94109","short_name":"94109","types":["postal_code"]}],"formatted_address":"2127 Polk St, San Francisco, CA 94109, USA","geometry":{"location":{"Xa":37.7963706,"Ya":-122.42200739999998},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.79502161970849,"f":37.79771958029149},"ea":{"b":-122.42335638029147,"f":-122.4206584197085}}},"types":["street_address"]}],
	
	"331 Cortland Ave, San Francisco, CA":
	[{"address_components":[{"long_name":"331","short_name":"331","types":["street_number"]},{"long_name":"Cortland Ave","short_name":"Cortland Ave","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"331 Cortland Ave, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.7392092,"f":37.73921},"ea":{"b":-122.418023,"f":-122.41802289999998}},"location":{"Xa":37.73921,"Ya":-122.41802289999998},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7378606197085,"f":37.74055858029149},"ea":{"b":-122.4193719302915,"f":-122.41667396970848}}},"types":["street_address"]}],
	
	"50 Stow Lake Drive, San Francisco CA 94118":
	[{"address_components":[{"long_name":"50","short_name":"50","types":["street_number"]},{"long_name":"Stow Lake Dr","short_name":"Stow Lake Dr","types":["route"]},{"long_name":"Golden Gate Park","short_name":"Golden Gate Park","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94118","short_name":"94118","types":["postal_code"]}],"formatted_address":"50 Stow Lake Dr, San Francisco, CA 94118, USA","geometry":{"location":{"Xa":37.7706273,"Ya":-122.47707830000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7692783197085,"f":37.7719762802915},"ea":{"b":-122.4784272802915,"f":-122.47572931970853}}},"types":["street_address"]}],
	
	"1 Ferry Building, San Francisco CA":
	[{"address_components":[{"long_name":"San Francisco Ferry Bldg","short_name":"San Francisco Ferry Bldg","types":["establishment"]},{"long_name":"Embarcadero","short_name":"Embarcadero","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94105","short_name":"94105","types":["postal_code"]}],"formatted_address":"San Francisco Ferry Bldg, San Francisco, CA 94105, USA","geometry":{"bounds":{"ca":{"b":37.7946684,"f":37.7964159},"ea":{"b":-122.39432060000001,"f":-122.3924821}},"location":{"Xa":37.7955195,"Ya":-122.39336500000002},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.7941931697085,"f":37.7968911302915},"ea":{"b":-122.39475033029152,"f":-122.3920523697085}}},"partial_match":true,"types":["establishment"]},{"address_components":[{"long_name":"Vallejo - San Francisco Ferry Bldg","short_name":"Vallejo - San Francisco Ferry Bldg","types":["route"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"Vallejo - San Francisco Ferry Bldg, CA, USA","geometry":{"bounds":{"ca":{"b":37.795347,"f":38.0999251},"ea":{"b":-122.43904759999998,"f":-122.24459690000003}},"location":{"Xa":37.947636,"Ya":-122.34182220000002},"location_type":"GEOMETRIC_CENTER","viewport":{"ca":{"b":37.795347,"f":38.0999251},"ea":{"b":-122.43904759999998,"f":-122.24459690000003}}},"partial_match":true,"types":["route"]},{"address_components":[{"long_name":"Alameda/Oakland - San Francisco Ferry Bldg","short_name":"Alameda/Oakland - San Francisco Ferry Bldg","types":["route"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"Alameda/Oakland - San Francisco Ferry Bldg, CA, USA","geometry":{"bounds":{"ca":{"b":37.7919392,"f":37.7988091},"ea":{"b":-122.39201750000001,"f":-122.28014439999998}},"location":{"Xa":37.7953742,"Ya":-122.33608099999998},"location_type":"GEOMETRIC_CENTER","viewport":{"ca":{"b":37.7919392,"f":37.7988091},"ea":{"b":-122.39201750000001,"f":-122.28014439999998}}},"partial_match":true,"types":["route"]}],
	
	"1666 Market Street, San Francisco, CA 94103":
	[{"address_components":[{"long_name":"1666","short_name":"1666","types":["street_number"]},{"long_name":"Market St","short_name":"Market St","types":["route"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"1666 Market St, San Francisco, CA 94103, USA","geometry":{"bounds":{"ca":{"b":37.7730969,"f":37.7730975},"ea":{"b":-122.4217152,"f":-122.42171450000001}},"location":{"Xa":37.7730969,"Ya":-122.42171450000001},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7717482197085,"f":37.7744461802915},"ea":{"b":-122.42306383029148,"f":-122.42036586970852}}},"types":["street_address"]}],
	
	"610 Old Mason Street San Francisco, CA 94129":
	[{"address_components":[{"long_name":"610","short_name":"610","types":["street_number"]},{"long_name":"Golden Gate National Recreation Area","short_name":"Golden Gate National Recreation Area","types":["establishment"]},{"long_name":"Old Mason St","short_name":"Old Mason St","types":["route"]},{"long_name":"Presidio","short_name":"Presidio","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94129","short_name":"94129","types":["postal_code"]}],"formatted_address":"610 Old Mason St, Golden Gate National Recreation Area, San Francisco, CA 94129, USA","geometry":{"location":{"Xa":37.8029076,"Ya":-122.45886659999996},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.80155861970849,"f":37.80425658029149},"ea":{"b":-122.4602155802915,"f":-122.45751761970848}}},"types":["street_address"]}],
	
	"530 Hampshire St, San Francisco CA 94110":
	[{"address_components":[{"long_name":"530","short_name":"530","types":["street_number"]},{"long_name":"Hampshire St","short_name":"Hampshire St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"530 Hampshire St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.762741,"Ya":-122.40842680000003},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7613920197085,"f":37.76408998029149},"ea":{"b":-122.40977578029151,"f":-122.40707781970849}}},"types":["street_address"]}],
	
	"650D Florida Street, San Francisco, CA":
	[{"address_components":[{"long_name":"650","short_name":"650","types":["street_number"]},{"long_name":"Florida St","short_name":"Florida St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"650 Florida St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.760978,"Ya":-122.4111499},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.75962901970851,"f":37.7623269802915},"ea":{"b":-122.41249888029148,"f":-122.40980091970852}}},"partial_match":true,"types":["street_address"]}],
	
	"1123 Folsom Street, San Francisco, CA 94107":
	[{"address_components":[{"long_name":"1123","short_name":"1123","types":["street_number"]},{"long_name":"Folsom St","short_name":"Folsom St","types":["route"]},{"long_name":"SoMa","short_name":"SoMa","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"1123 Folsom St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.7761514,"Ya":-122.4084575},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7748024197085,"f":37.7775003802915},"ea":{"b":-122.40980648029148,"f":-122.40710851970852}}},"partial_match":true,"types":["street_address"]}],
	
	"650D Florida Street, San Francisco, CA 94110":
	[{"address_components":[{"long_name":"650","short_name":"650","types":["street_number"]},{"long_name":"Florida St","short_name":"Florida St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"650 Florida St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.760978,"Ya":-122.4111499},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.75962901970851,"f":37.7623269802915},"ea":{"b":-122.41249888029148,"f":-122.40980091970852}}},"partial_match":true,"types":["street_address"]}],
	
	"Mission District, SF":
	[{"address_components":[{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"Mission District, San Francisco, CA, USA","geometry":{"bounds":{"ca":{"b":37.7478639,"f":37.7718682},"ea":{"b":-122.4268985,"f":-122.40312340000003}},"location":{"Xa":37.76,"Ya":-122.42000000000002},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.7478639,"f":37.7718682},"ea":{"b":-122.4268985,"f":-122.40312340000003}}},"partial_match":true,"types":["neighborhood","political"]}],
	
	"1 Ferry Building, San Francisco CA 94111":
	[{"address_components":[{"long_name":"Vallejo - San Francisco Ferry Bldg","short_name":"Vallejo - San Francisco Ferry Bldg","types":["route"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"Vallejo - San Francisco Ferry Bldg, CA, USA","geometry":{"bounds":{"ca":{"b":37.795347,"f":38.0999251},"ea":{"b":-122.43904759999998,"f":-122.24459690000003}},"location":{"Xa":37.947636,"Ya":-122.34182220000002},"location_type":"GEOMETRIC_CENTER","viewport":{"ca":{"b":37.795347,"f":38.0999251},"ea":{"b":-122.43904759999998,"f":-122.24459690000003}}},"partial_match":true,"types":["route"]}],
	
	"530 Hampshire Street, Suite 301, San Francisco CA 94110":
	[{"address_components":[{"long_name":"301","short_name":"301","types":["subpremise"]},{"long_name":"530","short_name":"530","types":["street_number"]},{"long_name":"Hampshire St","short_name":"Hampshire St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"530 Hampshire St #301, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.762741,"Ya":-122.40842680000003},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.7613920197085,"f":37.76408998029149},"ea":{"b":-122.40977578029151,"f":-122.40707781970849}}},"partial_match":true,"types":["subpremise"]}],
	
	"1106 Market Street, San Francisco CA 94102":
	[{"address_components":[{"long_name":"1106","short_name":"1106","types":["street_number"]},{"long_name":"Market St","short_name":"Market St","types":["route"]},{"long_name":"Civic Center","short_name":"Civic Center","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94102","short_name":"94102","types":["postal_code"]}],"formatted_address":"1106 Market St, San Francisco, CA 94102, USA","geometry":{"location":{"Xa":37.7809256,"Ya":-122.41229900000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7795766197085,"f":37.7822745802915},"ea":{"b":-122.4136479802915,"f":-122.41095001970848}}},"types":["street_address"]}],
	
	"1106 Market Street, San Francisco, CA 94102":
	[{"address_components":[{"long_name":"1106","short_name":"1106","types":["street_number"]},{"long_name":"Market St","short_name":"Market St","types":["route"]},{"long_name":"Civic Center","short_name":"Civic Center","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94102","short_name":"94102","types":["postal_code"]}],"formatted_address":"1106 Market St, San Francisco, CA 94102, USA","geometry":{"location":{"Xa":37.7809256,"Ya":-122.41229900000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7795766197085,"f":37.7822745802915},"ea":{"b":-122.4136479802915,"f":-122.41095001970848}}},"types":["street_address"]}],
	
	"3111 24th Street, San Francisco, CA 94110":
	[{"address_components":[{"long_name":"3111","short_name":"3111","types":["street_number"]},{"long_name":"24th St","short_name":"24th St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"3111 24th St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.7524,"Ya":-122.41447019999998},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.75105101970851,"f":37.7537489802915},"ea":{"b":-122.41581918029152,"f":-122.4131212197085}}},"types":["street_address"]}],
	
	"1106 Market Street  San Francisco, CA 94102":
	[{"address_components":[{"long_name":"1106","short_name":"1106","types":["street_number"]},{"long_name":"Market St","short_name":"Market St","types":["route"]},{"long_name":"Civic Center","short_name":"Civic Center","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94102","short_name":"94102","types":["postal_code"]}],"formatted_address":"1106 Market St, San Francisco, CA 94102, USA","geometry":{"location":{"Xa":37.7809256,"Ya":-122.41229900000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7795766197085,"f":37.7822745802915},"ea":{"b":-122.4136479802915,"f":-122.41095001970848}}},"types":["street_address"]}],
	
	"530 Hampshire St. #301, San Francisco CA 94110":
	[{"address_components":[{"long_name":"530","short_name":"530","types":["street_number"]},{"long_name":"Hampshire St","short_name":"Hampshire St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"530 Hampshire St, San Francisco, CA 94110, USA","geometry":{"location":{"Xa":37.762741,"Ya":-122.40842680000003},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7613920197085,"f":37.76408998029149},"ea":{"b":-122.40977578029151,"f":-122.40707781970849}}},"partial_match":true,"types":["street_address"]}],
	
	"298 Monterey Boulevard San Francisco, CA 94131":
	[{"address_components":[{"long_name":"298","short_name":"298","types":["street_number"]},{"long_name":"Monterey Blvd","short_name":"Monterey Blvd","types":["route"]},{"long_name":"Twin Peaks West","short_name":"Twin Peaks West","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94131","short_name":"94131","types":["postal_code"]}],"formatted_address":"298 Monterey Blvd, San Francisco, CA 94131, USA","geometry":{"location":{"Xa":37.731813,"Ya":-122.44183499999997},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.73046401970849,"f":37.73316198029149},"ea":{"b":-122.44318398029151,"f":-122.44048601970849}}},"types":["street_address"]}],
	
	"816 Diamond Street San Francisco, CA 94114":
	[{"address_components":[{"long_name":"816","short_name":"816","types":["street_number"]},{"long_name":"Diamond St","short_name":"Diamond St","types":["route"]},{"long_name":"Noe Valley","short_name":"Noe Valley","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94114","short_name":"94114","types":["postal_code"]}],"formatted_address":"816 Diamond St, San Francisco, CA 94114, USA","geometry":{"location":{"Xa":37.7508654,"Ya":-122.436441},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7495164197085,"f":37.75221438029149},"ea":{"b":-122.43778998029148,"f":-122.43509201970852}}},"types":["street_address"]}],
	
	"65 Funston Avenue, the Presidio, San Francisco, CA 94129":
	[{"address_components":[{"long_name":"Funston Ave","short_name":"Funston Ave","types":["route"]},{"long_name":"Golden Gate National Recreation Area","short_name":"Golden Gate National Recreation Area","types":["establishment"]},{"long_name":"Presidio","short_name":"Presidio","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94129","short_name":"94129","types":["postal_code"]}],"formatted_address":"Funston Ave, Golden Gate National Recreation Area, San Francisco, CA 94129, USA","geometry":{"bounds":{"ca":{"b":37.7970504,"f":37.8008588},"ea":{"b":-122.4574667,"f":-122.45452590000002}},"location":{"Xa":37.7988055,"Ya":-122.45606190000001},"location_type":"GEOMETRIC_CENTER","viewport":{"ca":{"b":37.7970504,"f":37.8008588},"ea":{"b":-122.4574667,"f":-122.45452590000002}}},"partial_match":true,"types":["route"]}],
	
	"331 Cortland Ave., San Francisco CA 94110":
	[{"address_components":[{"long_name":"331","short_name":"331","types":["street_number"]},{"long_name":"Cortland Ave","short_name":"Cortland Ave","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"331 Cortland Ave, San Francisco, CA 94110, USA","geometry":{"bounds":{"ca":{"b":37.7392092,"f":37.73921},"ea":{"b":-122.418023,"f":-122.41802289999998}},"location":{"Xa":37.73921,"Ya":-122.41802289999998},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.7378606197085,"f":37.74055858029149},"ea":{"b":-122.4193719302915,"f":-122.41667396970848}}},"types":["street_address"]}],
	
	"1830 Harrison Street, San Francisco, CA 94103":
	[{"address_components":[{"long_name":"1830","short_name":"1830","types":["street_number"]},{"long_name":"Harrison St","short_name":"Harrison St","types":["route"]},{"long_name":"Central East San Francisco","short_name":"Central East San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"1830 Harrison St, San Francisco, CA 94103, USA","geometry":{"location":{"Xa":37.7680142,"Ya":-122.41356810000002},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7666652197085,"f":37.7693631802915},"ea":{"b":-122.4149170802915,"f":-122.41221911970848}}},"types":["street_address"]}],
	
	"24th St at Webster St":
	[{"address_components":[{"long_name":"Webster St","short_name":"Webster St","types":["route"]},{"long_name":"Downtown Oakland","short_name":"Downtown Oakland","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94612","short_name":"94612","types":["postal_code"]}],"formatted_address":"Webster St & 24th St, Oakland, CA 94612, USA","geometry":{"location":{"Xa":37.8132953,"Ya":-122.2648896},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.8119463197085,"f":37.8146442802915},"ea":{"b":-122.26623858029149,"f":-122.26354061970846}}},"types":["intersection"]},{"address_components":[{"long_name":"Webster St","short_name":"Webster St","types":["route"]},{"long_name":"Bay City","short_name":"Bay City","types":["locality","political"]},{"long_name":"Bay","short_name":"Bay","types":["administrative_area_level_2","political"]},{"long_name":"Michigan","short_name":"MI","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"48708","short_name":"48708","types":["postal_code"]}],"formatted_address":"Webster St & 24th St, Bay City, MI 48708, USA","geometry":{"location":{"Xa":43.5786072,"Ya":-83.89772019999998},"location_type":"APPROXIMATE","viewport":{"ca":{"b":43.5772582197085,"f":43.5799561802915},"ea":{"b":-83.89906918029152,"f":-83.8963712197085}}},"types":["intersection"]},{"address_components":[{"long_name":"24th St","short_name":"24th St","types":["route"]},{"long_name":"Oak Hill","short_name":"Oak Hill","types":["locality","political"]},{"long_name":"Plateau","short_name":"Plateau","types":["administrative_area_level_3","political"]},{"long_name":"Fayette","short_name":"Fayette","types":["administrative_area_level_2","political"]},{"long_name":"West Virginia","short_name":"WV","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"25901","short_name":"25901","types":["postal_code"]}],"formatted_address":"24th St & Webster St, Oak Hill, WV 25901, USA","geometry":{"location":{"Xa":37.989216,"Ya":-81.124506},"location_type":"APPROXIMATE","viewport":{"ca":{"b":37.9878670197085,"f":37.9905649802915},"ea":{"b":-81.12585498029148,"f":-81.12315701970851}}},"types":["intersection"]},{"address_components":[{"long_name":"E 24th St","short_name":"E 24th St","types":["route"]},{"long_name":"Trenton","short_name":"Trenton","types":["locality","political"]},{"long_name":"Trenton","short_name":"Trenton","types":["administrative_area_level_3","political"]},{"long_name":"Grundy","short_name":"Grundy","types":["administrative_area_level_2","political"]},{"long_name":"Missouri","short_name":"MO","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"64683","short_name":"64683","types":["postal_code"]}],"formatted_address":"E 24th St & Webster St, Trenton, MO 64683, USA","geometry":{"location":{"Xa":40.0870218,"Ya":-93.60829039999999},"location_type":"APPROXIMATE","viewport":{"ca":{"b":40.0856728197085,"f":40.0883707802915},"ea":{"b":-93.60963938029153,"f":-93.6069414197085}}},"partial_match":true,"types":["intersection"]}],
	
	"530 Hampshire St #301, SF, CA 94110":
	[{"address_components":[{"long_name":"530","short_name":"530","types":["street_number"]},{"long_name":"Hampshire Ave","short_name":"Hampshire Ave","types":["route"]},{"long_name":"Serramonte","short_name":"Serramonte","types":["neighborhood","political"]},{"long_name":"Daly City","short_name":"Daly City","types":["locality","political"]},{"long_name":"San Mateo","short_name":"San Mateo","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94015","short_name":"94015","types":["postal_code"]}],"formatted_address":"530 Hampshire Ave, Daly City, CA 94015, USA","geometry":{"bounds":{"ca":{"b":37.6534796,"f":37.6534802},"ea":{"b":-122.45909770000003,"f":-122.45909710000001}},"location":{"Xa":37.6534796,"Ya":-122.45909770000003},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.6521309197085,"f":37.6548288802915},"ea":{"b":-122.4604463802915,"f":-122.45774841970848}}},"partial_match":true,"types":["street_address"]},{"address_components":[{"long_name":"530","short_name":"530","types":["street_number"]},{"long_name":"Hampshire Ct","short_name":"Hampshire Ct","types":["route"]},{"long_name":"Serramonte","short_name":"Serramonte","types":["neighborhood","political"]},{"long_name":"Daly City","short_name":"Daly City","types":["locality","political"]},{"long_name":"San Mateo","short_name":"San Mateo","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94015","short_name":"94015","types":["postal_code"]}],"formatted_address":"530 Hampshire Ct, Daly City, CA 94015, USA","geometry":{"bounds":{"ca":{"b":37.6536614,"f":37.6536619},"ea":{"b":-122.45768020000003,"f":-122.45767940000002}},"location":{"Xa":37.6536614,"Ya":-122.45767940000002},"location_type":"RANGE_INTERPOLATED","viewport":{"ca":{"b":37.6523126697085,"f":37.6550106302915},"ea":{"b":-122.45902878029153,"f":-122.45633081970851}}},"partial_match":true,"types":["street_address"]}],
	
	"4031 Balboa, SF, CA 94121":
	[{"address_components":[{"long_name":"4031","short_name":"4031","types":["street_number"]},{"long_name":"Balboa St","short_name":"Balboa St","types":["route"]},{"long_name":"Outer Richmond","short_name":"Outer Richmond","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_3","political"]},{"long_name":"San Francisco","short_name":"San Francisco","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94121","short_name":"94121","types":["postal_code"]}],"formatted_address":"4031 Balboa St, San Francisco, CA 94121, USA","geometry":{"location":{"Xa":37.7753951,"Ya":-122.50212010000001},"location_type":"ROOFTOP","viewport":{"ca":{"b":37.7740461197085,"f":37.7767440802915},"ea":{"b":-122.5034690802915,"f":-122.50077111970847}}},"partial_match":true,"types":["street_address"]}]
	};
}

function fakemenus() {
	return [
	{
		"pickups": [
			{
				"lastProcessedPickupDate": "2012-09-04T23:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [], 
				"pickupWindow": {
					"startAt": "2012-08-21T23:00:00.000Z", 
					"endAt": "2012-08-22T01:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"messages": {
					"email": {
						"pickupInstructions": "Your goods will be waiting for you in the 4th floor mailroom."
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "4th floor mailroom", 
					"name": "Frog Design SF (employees only)", 
					"address": "660 3rd Street, 4th Floor, San Francisco, CA 94107"
				}, 
				"updatedAt": "2012-09-07T19:29:26.113Z", 
				"processCutoffOffset": -100800000, 
				"_id": "502d971f43aa34030000000e", 
				"createdAt": "2012-08-17T00:58:07.483Z"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-04T23:30:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [], 
				"pickupWindow": {
					"startAt": "2012-08-21T23:30:00.000Z", 
					"endAt": "2012-08-22T01:30:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"messages": {
					"email": {
						"pickupInstructions": "Your bread will be waiting at the Zynga Shipping and Receiving Loading Dock off of 650 Townsend St."
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "8th and Townsend St.", 
					"name": " Zynga SF Office (employees only)", 
					"address": "699 8th Street, San Francisco, CA 94103"
				}, 
				"updatedAt": "2012-09-07T19:29:26.113Z", 
				"processCutoffOffset": -189000000, 
				"_id": "5029546e7301d90300000021", 
				"createdAt": "2012-08-13T19:24:30.153Z"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-04T23:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_soma"
				], 
				"pickupWindow": {
					"startAt": "2012-08-07T23:00:00.000Z", 
					"endAt": "2012-08-08T01:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "2nd and Brannan St", 
					"name": "StumbleUpon SF (employees only)", 
					"address": "301 Brannan Street #6,\u00a0San Francisco, CA 94107"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -187200000, 
				"_id": "5022ea7249996b030000025d", 
				"createdAt": "2012-08-08T22:38:42.762Z"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T23:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_soma", 
					"sfbay_downtown"
				], 
				"recurringPickup": "4f4eeeb11126370400000051", 
				"pickupWindow": {
					"startAt": "2012-03-07T00:00:00.000Z", 
					"endAt": "2012-03-07T03:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY", 
						"EXDATE": "20120621,20120628,20120705,20120712,20120719"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "Near the Espresso Bar, 601 Townsend Street, San Francisco, CA 94103", 
					"name": "Adobe SF Office (employees only)", 
					"address": "601 Townsend Street, San Francisco, CA 94103"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -165600000, 
				"_id": "4f4eeeb11126370400000056"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T00:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_oakland"
				], 
				"pickupWindow": {
					"startAt": "2012-09-05T00:00:00.000Z", 
					"endAt": "2012-09-05T02:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "(Oakland) 24th St at Webster St", 
					"name": "Kitchener Oakland", 
					"address": "372 24th Street, Oakland, CA 94612"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -169200000, 
				"_id": "503facef5e3daa0300000014", 
				"createdAt": "2012-08-30T18:11:59.457Z"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T23:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_soma", 
					"sfbay_downtown"
				], 
				"recurringPickup": "4f4eeeb11126370400000052", 
				"pickupWindow": {
					"startAt": "2012-03-07T00:00:00.000Z", 
					"endAt": "2012-03-07T03:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY", 
						"EXDATE": "20120622,20120629,20120706,20120713,20120720"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "Left Coast Cafe, 345 Spear St, San Francisco, CA 94105", 
					"name": "Google SF Office (employees only)", 
					"address": "345 Spear St, San Francisco, CA 94105"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -165600000, 
				"_id": "4f4eeeb11126370400000054"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T23:30:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_soma", 
					"sfbay_downtown"
				], 
				"pickupWindow": {
					"startAt": "2012-03-07T00:30:00.000Z", 
					"endAt": "2012-03-07T03:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY", 
						"EXDATE": "20120622,20120629,20120706,20120713,20120720"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "Pier 28 Annex", 
					"name": "IDEO SF Office (employees only)", 
					"address": "Pier 28 Annex, The Embarcadero, San Francisco, CA 94105"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -167400000, 
				"_id": "4fb2f8df9556c2070000000e"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T23:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_soma", 
					"sfbay_downtown"
				], 
				"pickupWindow": {
					"startAt": "2012-03-07T00:00:00.000Z", 
					"endAt": "2012-03-07T03:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY", 
						"EXDATE": "20120622,20120629,20120706,20120713,20120720"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "Near 4th and Market St., San Francisco, CA 94103", 
					"name": "OpenTable SF Office (employees only)", 
					"address": "799 Market St #4, San Francisco, CA 94103"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -165600000, 
				"_id": "4fbd3365d674160700000069"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T23:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_mission"
				], 
				"pickupWindow": {
					"startAt": "2012-03-07T00:00:00.000Z", 
					"endAt": "2012-03-07T03:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY", 
						"EXDATE": "20120622,20120629,20120706,20120713,20120720"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "Hampshire & Mariposa, San Francisco, CA 94110", 
					"name": "Good Eggs HQ", 
					"address": "530 Hampshire St. Suite 301, San Francisco, CA 94110"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -165600000, 
				"_id": "4f8ca62febae06070000007f"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T23:00:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_mission"
				], 
				"recurringPickup": "4f4eeeb1112637040000004f", 
				"pickupWindow": {
					"startAt": "2012-03-07T00:00:00.000Z", 
					"endAt": "2012-03-07T03:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY", 
						"EXDATE": "20120621,20120628,20120705,20120712,20120719"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "25th & Mission, San Francisco, CA 94110", 
					"name": "Mission Pie", 
					"address": "2901 Mission St, San Francisco, CA 94110"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -165600000, 
				"_id": "4f4eeeb1112637040000005a"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-06T23:30:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_soma"
				], 
				"pickupWindow": {
					"startAt": "2012-09-04T23:30:00.000Z", 
					"endAt": "2012-09-05T01:30:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "(SOMA) South Park Ave off 3rd St", 
					"name": "Syntropy Integrative Health Center", 
					"address": "168 South Park Ave, SF, CA 94107"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -167400000, 
				"_id": "503facef5e3daa0300000015", 
				"createdAt": "2012-08-30T18:11:59.457Z"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-07T00:30:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_hayeshaight"
				], 
				"pickupWindow": {
					"startAt": "2012-08-03T00:30:00.000Z", 
					"endAt": "2012-08-03T02:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "(Lower Haight) Haight St btwn Steiner and Fillmore", 
					"name": "Black Pancake Records", 
					"address": "597 Haight St, San Francisco, CA 94117"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -174600000, 
				"_id": "5010e33d26bf0c03000000dc", 
				"createdAt": "2012-07-26T06:27:09.468Z"
			}, 
			{
				"lastProcessedPickupDate": "2012-09-07T00:15:00.000Z", 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_hayeshaight"
				], 
				"pickupWindow": {
					"startAt": "2012-08-31T00:15:00.000Z", 
					"endAt": "2012-08-31T02:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"pickupReminderOffset": -86400000, 
				"location": {
					"vagueAddress": "(Upper Haight) Haight St & Cole St", 
					"name": "Buyer's Best Friend", 
					"address": "1740 Haight St, San Francisco, CA 94117"
				}, 
				"updatedAt": "2012-09-07T19:29:26.114Z", 
				"processCutoffOffset": -173700000, 
				"_id": "50381a1f7342f60300000013", 
				"createdAt": "2012-08-25T00:19:43.246Z"
			}, 
			{
				"pickupReminderOffset": -43200000, 
				"menuTypes": [
					"single", 
					"standing"
				], 
				"neighborhoods": [
					"sfbay_hayeshaight"
				], 
				"pickupWindow": {
					"startAt": "2012-09-12T14:00:00.000Z", 
					"endAt": "2012-09-12T21:00:00.000Z", 
					"RRULE": {
						"FREQ": "WEEKLY"
					}
				}, 
				"location": {
					"vagueAddress": "Divisadero St at Fulton St", 
					"name": "The Mill", 
					"address": "736 Divisadero St San Francisco, CA 94117"
				}, 
				"updatedAt": "2012-09-07T19:29:26.115Z", 
				"processCutoffOffset": -219600000, 
				"_id": "504a4a8cd2fcc40200000042", 
				"createdAt": "2012-09-07T19:27:08.166Z"
			}
		], 
		"products": [
			{
				"description": "you just sit back and relax, i'll take real good care of you.", 
				"quantity": 0, 
				"quantities": [], 
				"price": 5, 
				"startingAvailability": 60, 
				"unit": "loaf", 
				"details": "some of the breads you can look forward to: walnut, black pepper parmesan, sunflower pumpkin flax, sourdough...", 
				"maxQuantity": 5, 
				"updatedAt": "2012-09-07T19:29:26.113Z", 
				"images": [
					"bread1.jpg", 
					"bread4.jpg", 
					"bread3.jpg", 
					"bread6.jpg", 
					"bread7.jpg", 
					"bread8.jpg", 
					"bread9.jpg"
				], 
				"_id": "4f4eeeb1112637040000005c", 
				"availabilityStyle": "perPickup", 
				"createdAt": "2012-03-01T03:36:17.874Z", 
				"name": "Bread of the Week"
			}
		], 
		"subscriptionOffer": "4f4eed24d7413d0400000012", 
		"_id": "4f4eeeb11126370400000053", 
		"vendor": {
			"_id": "4f4d45d6ed09180400000030", 
			"name": "Josey Baker Bread", 
			"slug": "joseybakerbread"
		}
	},
	{
        "pickups": [
            {
                "pickupReminderOffset": -86400000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [], 
                "pickupWindow": {
                    "startAt": "2012-08-21T23:00:00.000Z", 
                    "endAt": "2012-08-22T01:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "messages": {
                    "email": {
                        "pickupInstructions": "Your goods will be waiting for you in the 4th floor mailroom."
                    }
                }, 
                "location": {
                    "vagueAddress": "4th floor mailroom", 
                    "name": "Frog Design SF (employees only)", 
                    "address": "660 3rd Street, 4th Floor, San Francisco, CA 94107"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -100800000, 
                "_id": "502d971f43aa34030000000e", 
                "createdAt": "2012-08-17T00:58:07.499Z"
            }, 
            {
                "pickupReminderOffset": -86400000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [], 
                "pickupWindow": {
                    "startAt": "2012-08-21T23:30:00.000Z", 
                    "endAt": "2012-08-22T01:30:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "messages": {
                    "email": {
                        "pickupInstructions": "Your bread will be waiting at the Zynga Shipping and Receiving Loading Dock off of 650 Townsend St."
                    }
                }, 
                "location": {
                    "vagueAddress": "8th and Townsend St.", 
                    "name": " Zynga SF Office (employees only)", 
                    "address": "699 8th Street, San Francisco, CA 94103"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -189000000, 
                "_id": "5029546e7301d90300000021", 
                "createdAt": "2012-08-13T19:24:30.196Z"
            }, 
            {
                "pickupReminderOffset": -86400000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_soma"
                ], 
                "pickupWindow": {
                    "startAt": "2012-08-07T23:00:00.000Z", 
                    "endAt": "2012-08-08T01:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "location": {
                    "vagueAddress": "2nd and Brannan St", 
                    "name": "StumbleUpon SF (employees only)", 
                    "address": "301 Brannan Street #6,\u00a0San Francisco, CA 94107"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -187200000, 
                "_id": "5022ea7249996b030000025d", 
                "createdAt": "2012-08-08T22:38:42.782Z"
            }, 
            {
                "lastProcessedPickupDate": null, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_soma", 
                    "sfbay_downtown"
                ], 
                "pickupWindow": {
                    "startAt": "2012-03-07T00:00:00.000Z", 
                    "endAt": "2012-03-07T03:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY", 
                        "EXDATE": "20120621,20120628,20120705,20120712,20120719"
                    }
                }, 
                "pickupReminderOffset": -86400000, 
                "location": {
                    "vagueAddress": "Near the Espresso Bar, 601 Townsend Street, San Francisco, CA 94103", 
                    "name": "Adobe SF Office (employees only)", 
                    "address": "601 Townsend Street, San Francisco, CA 94103"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -165600000, 
                "_id": "4f4eeeb11126370400000056", 
                "createdAt": "2012-07-26T09:43:36.461Z"
            }, 
            {
                "pickupReminderOffset": -86400000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_oakland"
                ], 
                "pickupWindow": {
                    "startAt": "2012-09-05T00:00:00.000Z", 
                    "endAt": "2012-09-05T02:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "location": {
                    "vagueAddress": "(Oakland) 24th St at Webster St", 
                    "name": "Kitchener Oakland", 
                    "address": "372 24th Street, Oakland, CA 94612"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -169200000, 
                "_id": "503facef5e3daa0300000014", 
                "createdAt": "2012-08-30T18:11:59.501Z"
            }, 
            {
                "lastProcessedPickupDate": null, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_soma", 
                    "sfbay_downtown"
                ], 
                "pickupWindow": {
                    "startAt": "2012-03-07T00:00:00.000Z", 
                    "endAt": "2012-03-07T03:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY", 
                        "EXDATE": "20120622,20120629,20120706,20120713,20120720"
                    }
                }, 
                "pickupReminderOffset": -86400000, 
                "location": {
                    "vagueAddress": "Left Coast Cafe, 345 Spear St, San Francisco, CA 94105", 
                    "name": "Google SF Office (employees only)", 
                    "address": "345 Spear St, San Francisco, CA 94105"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -165600000, 
                "_id": "4f4eeeb11126370400000054", 
                "createdAt": "2012-07-26T09:43:36.461Z"
            }, 
            {
                "lastProcessedPickupDate": null, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_soma", 
                    "sfbay_downtown"
                ], 
                "pickupWindow": {
                    "startAt": "2012-03-07T00:30:00.000Z", 
                    "endAt": "2012-03-07T03:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY", 
                        "EXDATE": "20120622,20120629,20120706,20120713,20120720"
                    }
                }, 
                "pickupReminderOffset": -86400000, 
                "location": {
                    "vagueAddress": "Pier 28 Annex", 
                    "name": "IDEO SF Office (employees only)", 
                    "address": "Pier 28 Annex, The Embarcadero, San Francisco, CA 94105"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -167400000, 
                "_id": "4fb2f8df9556c2070000000e", 
                "createdAt": "2012-07-26T09:43:36.461Z"
            }, 
            {
                "lastProcessedPickupDate": null, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_soma", 
                    "sfbay_downtown"
                ], 
                "pickupWindow": {
                    "startAt": "2012-03-07T00:00:00.000Z", 
                    "endAt": "2012-03-07T03:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY", 
                        "EXDATE": "20120622,20120629,20120706,20120713,20120720"
                    }
                }, 
                "pickupReminderOffset": -86400000, 
                "location": {
                    "vagueAddress": "Near 4th and Market St., San Francisco, CA 94103", 
                    "name": "OpenTable SF Office (employees only)", 
                    "address": "799 Market St #4, San Francisco, CA 94103"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -165600000, 
                "_id": "4fbd3365d674160700000069", 
                "createdAt": "2012-07-26T09:43:36.462Z"
            }, 
            {
                "lastProcessedPickupDate": null, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_mission"
                ], 
                "pickupWindow": {
                    "startAt": "2012-03-07T00:00:00.000Z", 
                    "endAt": "2012-03-07T03:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY", 
                        "EXDATE": "20120622,20120629,20120706,20120713,20120720"
                    }
                }, 
                "pickupReminderOffset": -86400000, 
                "location": {
                    "vagueAddress": "Hampshire & Mariposa, San Francisco, CA 94110", 
                    "name": "Good Eggs HQ", 
                    "address": "530 Hampshire St. Suite 301, San Francisco, CA 94110"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -165600000, 
                "_id": "4f8ca62febae06070000007f", 
                "createdAt": "2012-07-26T09:43:36.462Z"
            }, 
            {
                "lastProcessedPickupDate": null, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_mission"
                ], 
                "pickupWindow": {
                    "startAt": "2012-03-07T00:00:00.000Z", 
                    "endAt": "2012-03-07T03:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY", 
                        "EXDATE": "20120621,20120628,20120705,20120712,20120719"
                    }
                }, 
                "pickupReminderOffset": -86400000, 
                "location": {
                    "vagueAddress": "25th & Mission, San Francisco, CA 94110", 
                    "name": "Mission Pie", 
                    "address": "2901 Mission St, San Francisco, CA 94110"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -165600000, 
                "_id": "4f4eeeb1112637040000005a", 
                "createdAt": "2012-07-26T09:43:36.462Z"
            }, 
            {
                "pickupReminderOffset": -86400000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_soma"
                ], 
                "pickupWindow": {
                    "startAt": "2012-09-04T23:30:00.000Z", 
                    "endAt": "2012-09-05T01:30:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "location": {
                    "vagueAddress": "(SOMA) South Park Ave off 3rd St", 
                    "name": "Syntropy Integrative Health Center", 
                    "address": "168 South Park Ave, SF, CA 94107"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -167400000, 
                "_id": "503facef5e3daa0300000015", 
                "createdAt": "2012-08-30T18:11:59.522Z"
            }, 
            {
                "lastProcessedPickupDate": null, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_hayeshaight"
                ], 
                "pickupWindow": {
                    "startAt": "2012-08-03T00:30:00.000Z", 
                    "endAt": "2012-08-03T02:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "pickupReminderOffset": -86400000, 
                "location": {
                    "vagueAddress": "(Lower Haight) Haight St btwn Steiner and Fillmore", 
                    "name": "Black Pancake Records", 
                    "address": "597 Haight St, San Francisco, CA 94117"
                }, 
                "updatedAt": "2012-09-07T19:29:26.117Z", 
                "processCutoffOffset": -174600000, 
                "_id": "5010e33d26bf0c03000000dc", 
                "createdAt": "2012-07-26T09:43:36.462Z"
            }, 
            {
                "pickupReminderOffset": -86400000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_hayeshaight"
                ], 
                "pickupWindow": {
                    "startAt": "2012-08-31T00:15:00.000Z", 
                    "endAt": "2012-08-31T02:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "location": {
                    "vagueAddress": "(Upper Haight) Haight St & Cole St", 
                    "name": "Buyer's Best Friend", 
                    "address": "1740 Haight St, San Francisco, CA 94117"
                }, 
                "updatedAt": "2012-09-07T19:29:26.119Z", 
                "processCutoffOffset": -173700000, 
                "_id": "50381a1f7342f60300000013", 
                "createdAt": "2012-08-25T00:19:43.264Z"
            }, 
            {
                "pickupReminderOffset": -43200000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_hayeshaight"
                ], 
                "pickupWindow": {
                    "startAt": "2012-09-12T14:00:00.000Z", 
                    "endAt": "2012-09-12T21:00:00.000Z", 
                    "RRULE": {
                        "FREQ": "WEEKLY"
                    }
                }, 
                "location": {
                    "vagueAddress": "Divisadero St at Fulton St", 
                    "name": "The Mill", 
                    "address": "736 Divisadero St San Francisco, CA 94117"
                }, 
                "updatedAt": "2012-09-07T19:29:26.119Z", 
                "processCutoffOffset": -219600000, 
                "_id": "504a4a8cd2fcc40200000042", 
                "createdAt": "2012-09-07T19:27:08.170Z"
            }
        ], 
        "products": [
            {
                "description": "you just sit back and relax, i'll take real good care of you.", 
                "quantity": 0, 
                "quantities": [], 
                "price": 5, 
                "startingAvailability": 60, 
                "unit": "loaf", 
                "details": "some of the breads I've made recently: walnut, black pepper parmesan, sunflower pumpkin flax, sourdough..", 
                "maxQuantity": 5, 
                "updatedAt": "2012-09-07T19:29:26.116Z", 
                "images": [
                    "bread1.jpg", 
                    "bread4.jpg", 
                    "bread3.jpg", 
                    "bread6.jpg", 
                    "bread7.jpg", 
                    "bread8.jpg", 
                    "bread9.jpg"
                ], 
                "_id": "4f4eeeb1112637040000005c", 
                "availabilityStyle": "perDayOfWeek", 
                "createdAt": "2012-07-26T09:43:36.463Z", 
                "name": "Bread of the Week"
            }
        ], 
        "subscriptionOffer": null, 
        "_id": "50111148e0f09e0300000306", 
        "vendor": {
            "_id": "4f4d45d6ed09180400000030", 
            "name": "Josey Baker Bread", 
            "slug": "joseybakerbread"
        }
    }, 
    {
        "pickups": [
            {
                "pickupReminderOffset": -86400000, 
                "menuTypes": [
                    "single", 
                    "standing"
                ], 
                "neighborhoods": [
                    "sfbay_mission", 
                    "sfbay_soma", 
                    "sfbay_hayeshaight", 
                    "sfbay_downtown", 
                    "sfbay_oakland", 
                    "sfbay_berkeley"
                ], 
                "pickupWindow": {
                    "startAt": "2012-07-30T17:00:00.000Z", 
                    "endAt": "2012-07-31T01:00:00.000Z"
                }, 
                "location": {
                    "name": "Delivery"
                }, 
                "updatedAt": "2012-08-22T22:02:45.103Z", 
                "processCutoffOffset": -1198800000, 
                "_id": "4ff4c03ea6a96803000000be", 
                "createdAt": "2012-07-04T22:14:22.745Z"
            }
        ], 
        "products": [
            {
                "category": "1. Main Dishes", 
                "name": "Creamy Corn, Potato and Leek Chowder with Braised Smoked Boar", 
                "quantity": 0, 
                "quantities": [], 
                "price": 22, 
                "unit": "quart", 
                "details": "Gluten free, dairy free, grain free, egg free, sugar free. Freezer friendly (1-6M).", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000cb", 
                "createdAt": "2012-07-04T22:14:22.745Z", 
                "description": "This is one of my favorite hearty but summery stews.\n<br><br>\nPrepared with: lots of love, pastured lard, bone broth and smoked boar (shanks, hocks or jowls), sweet corn,  yukon gold or french fingerling potatoes, leeks, sweet onion, coconut milk, celery, bell and pasilla pepper, green onion, sea salt, fresh cracked pepper, dulse flakes, and lots of fresh and dried herbs.\n<br><br>"
            }, 
            {
                "category": "1. Main Dishes", 
                "name": "Summer Beef Stew with Baby Bella Mushrooms, Peas and Summer Squash", 
                "quantity": 0, 
                "quantities": [], 
                "price": 22, 
                "unit": "quart", 
                "details": " Gluten free, dairy free, grain free, egg free, sugar free. Freezer friendly (1-6M).", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000ca", 
                "createdAt": "2012-07-04T22:14:22.745Z", 
                "description": "Let's take advantage of summer's farmer's market bounty and bring so many sun-kissed nutrients to our plate in one dish.\n<br><br>\nMade with: pastured butter, bone broth and beef, celery, carrots, spring and yellow onion, fennel, chard, baby portabella mushrooms, peas, summer squash, sea salt, fresh cracked pepper, dulse flakes, and lots of fresh and dried herbs.\n<br><br>"
            }, 
            {
                "category": "1. Main Dishes", 
                "name": "Sweet Spring Onion and Spinach Bisque", 
                "quantity": 0, 
                "quantities": [], 
                "price": 20, 
                "unit": "quart", 
                "details": "  Gluten free, dairy free, grain free, egg free, sugar free. Freezer friendly (1-6M).", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c9", 
                "createdAt": "2012-07-04T22:14:22.745Z", 
                "description": "I always like to integrate blended soups in to my regular meals. They are so hearty with nutrients but are also very easy for us to digest, maximizing our ability to get the most out of them.\n<br><br>\nMade with: Pastured bone broth and house rendered lard, sweet yellow onion, red spring onions, celery, fennel, spinach, coconut milk, lots of fresh and dried herbs, sea salts, fresh cracked pepper, and dulse flakes. This simple soup is great for a snack or a full meal, try adding any of the following atop to create a different flare to the dish: raw krauts or pickles, herb infused olive oil, a pad of butter, gremolata fresh herbs mix, or sour cream if you eat dairy. Get creative.\n<br><br>"
            }, 
            {
                "category": "2. Sides", 
                "name": "Smashed Chive Roasted Potatoes and Cauliflower", 
                "quantity": 0, 
                "quantities": [], 
                "price": 8, 
                "unit": "two-three serving box", 
                "details": "Gluten free, dairy free, grain free, egg free, sugar free.  Freezer friendly (1-6M).", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c8", 
                "createdAt": "2012-07-04T22:14:22.745Z", 
                "description": "Enjoy these lovely smashed potatoes with any favorite dish. I love these with a lovely piece of roasted chicken, steak or chop and some greens on the side.\n<br><br>\nMade with: herb roasted mixed potatoes and cauliflower, pastured butter, coconut milk, fresh chives, sea salts, fresh cracked pepper, dulse flakes, and lots of fresh and dried herbs.\n<br><br>"
            }, 
            {
                "category": "2. Sides", 
                "name": "Blueberry Fresh Herb Probiotic Vinaigrette", 
                "quantity": 0, 
                "quantities": [], 
                "price": 9, 
                "unit": "pint", 
                "details": "  Gluten free, dairy free, grain free, egg free, sugar free. Freezer friendly (1-6M) or fridge shelf life (14-21 days).", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c7", 
                "createdAt": "2012-07-04T22:14:22.745Z", 
                "description": "Summer sun always beckons eating cooling foods like big bright hearty salads with nutrient-dense dressings. Our dressing includes probiotic brines from our house made fermenty veggies and packs a punch in supporting our immune systems and gut health.\n<br><br>\nMade with: local blueberries, house made probiotic brine, local buttery olive oil, stone ground mustard, apple cider vinegar, sea salt, fresh cracked pepper, dulse flakes, and lots of fresh and dried herbs.\n<br><br>"
            }, 
            {
                "category": "3. Extra Goodies", 
                "name": "Superfood Frozen Smoothies", 
                "quantity": 0, 
                "quantities": [], 
                "price": 10, 
                "unit": "pint", 
                "details": "Gluten free, dairy free, grain free, sugar free.  Freezer friendly (1-6M).", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c6", 
                "createdAt": "2012-07-04T22:14:22.745Z", 
                "description": "We blend a mixture of fruits, veggies and nutrient-dense ingredients to make a truly satiating and delicious smoothie. Pull one from the freezer the night before and thaw for the next day. I love smoothies and I always know that I\u2019m getting lots of great things my body needs in a one stop shop.\n<br><br>\nMade with: Coconut, spiralina or chlorella, gelatin, ashwaganda powder (for adaptogenic stress relieve properties), Vitamineral Green powder, chia seeds, hemp seed powder, fenugreek powder, sprouted almond meal, aloe juice, Max B-ND liquid B Vitamins, black cherry rejuvenate, avocado, citrus, apples, carrots, egg yolk, ginger, brewed chilled tulsi tea, frozen berries, and kale.\n<br><br>"
            }, 
            {
                "category": "3. Extra Goodies", 
                "name": "Nutrient-dense Iced Teancture; Hibiscus Rosehip Tea Concentrate", 
                "quantity": 0, 
                "quantities": [], 
                "price": 12, 
                "unit": "quart", 
                "details": "Gluten free, dairy free, grain free, egg free, sugar free.  Freezer friendly (1-6M) or Fridge shelf life (10-14 days).", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c5", 
                "createdAt": "2012-07-04T22:14:22.745Z", 
                "description": "Since we are primarily made up of water, we need lots of it. And our beverages are great ways to make sure we can maximize our nutrients in a very absorbable way.\n<br><br>\nEach quart of concentrated tea can be diluted by 3-4 times depending on how strong or weak you like it. Add filtered water, maybe with a splash of coconut water over ice on a particularly hot day and you'll be cooling off in no time.\n<br><br>\nMade with: MamaKai's tea blend (milk thistle, licorice root, dried elderberries, dandelion, fennel, ginger), tulsi tea, Reverse Osmosis filtered water, hibiscus flowers, crushed rosehips, fresh squeezed citrus, Premier Research Labs Max B Liquid vitamins and polar minerals, raw honey, and a dash of mineral rich sea salt.\n<br><br>"
            }, 
            {
                "category": "8. Supplements", 
                "name": "Max B-ND, Liquid B Vitamins", 
                "quantity": 0, 
                "quantities": [], 
                "price": 22, 
                "unit": "2 oz", 
                "details": "Premier Research Labs", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c4", 
                "createdAt": "2012-07-04T22:14:22.746Z", 
                "description": "B vitamins are typically only found in animal products and often need supplementation. B12 works hand in hand with Folate/Folic Acid in development, repair and maintenance of our nervous systems. B vitamins also help regulate energy and keep us feeling upbeat even in times of sleep deprivation."
            }, 
            {
                "category": "8. Supplements", 
                "name": "Premier OsteoVen Bone & Joint Complex", 
                "quantity": 0, 
                "quantities": [], 
                "price": 20, 
                "unit": "60 caps", 
                "details": "Premier Research Labs", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c3", 
                "createdAt": "2012-07-04T22:14:22.746Z", 
                "description": "Additional insurance in supporting your infant\u2019s bone development and reducing your risk of osteoporosis."
            }, 
            {
                "category": "8. Supplements", 
                "name": "Premier Colostrum Caps", 
                "quantity": 0, 
                "quantities": [], 
                "price": 15, 
                "unit": "60 caps", 
                "details": "Premier Research Labs", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.102Z", 
                "_id": "4ff4c03ea6a96803000000c2", 
                "createdAt": "2012-07-04T22:14:22.746Z", 
                "description": "All lactating mammals produce colostrum and your baby will receive colostrum from you for a short time. It's full of immune supporting agents such as immunoglobulins, lactoferrin and N-acetylneurominic acid that help protect our bodies from harmful elements and keep us feeling healthy and strong."
            }, 
            {
                "category": "8. Supplements", 
                "name": "Folic Acid-ND", 
                "quantity": 0, 
                "quantities": [], 
                "price": 30, 
                "unit": "2 oz", 
                "details": "Premier Research Labs", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.103Z", 
                "_id": "4ff4c03ea6a96803000000c1", 
                "createdAt": "2012-07-04T22:14:22.746Z", 
                "description": "Highly needed during pregnancy, and for babies' neurological development, yet this is one of the most common nutrient deficiencies."
            }, 
            {
                "category": "8. Supplements", 
                "name": "Digest Premier", 
                "quantity": 0, 
                "quantities": [], 
                "price": 25, 
                "unit": "60 caps", 
                "details": "Premier Research Labs", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.103Z", 
                "_id": "4ff4c03ea6a96803000000c0", 
                "createdAt": "2012-07-04T22:14:22.746Z", 
                "description": "For those who might not chew enough or suspect they might have slow digestion, this formula of natural digestive enzymes aids our liver and pancreatic functions in breaking down the foods that come in to our bodies and making them more available for use."
            }, 
            {
                "category": "8. Supplements", 
                "name": "D3 Serum", 
                "quantity": 0, 
                "quantities": [], 
                "price": 11, 
                "unit": "0.5 oz", 
                "details": "Premier Research Labs", 
                "maxQuantity": 5, 
                "updatedAt": "2012-08-22T22:02:45.103Z", 
                "_id": "4ff4c03ea6a96803000000bf", 
                "createdAt": "2012-07-04T22:14:22.746Z", 
                "description": "Vitamin D is fat-soluble and aids our bodies in calcium absorption for healthy bones and teeth as well as support our immune function to ward off illness. One drop of this serum gives us a minimum 2000IU of the recommended daily allowance. Take at the end of a meal so there is plenty of fat in the digestive tract to help absorb the vitamin D into the body."
            }
        ], 
        "_id": "4ff4b6dd7453abf14f000001", 
        "vendor": {
            "_id": "4f63d4339743770400000092", 
            "name": "MamaKai", 
            "slug": "mamakai"
        }
    }
	]
}
