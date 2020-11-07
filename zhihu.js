let body = $response.body;
let url = $request.url;
body = JSON.parse(body);

if (url.indexOf('moments') != -1 || url.indexOf('recommend') != -1) {
	// feed recommend
	body['data'].forEach((element, index)=> {
		if (element.hasOwnProperty('ad') || element['card_type'] == 'slot_event_card') {
			body['data'].splice(index,1);
		}
	});
}

if (url.indexOf('questions') != -1) {
	// answer
	delete body['ad_info'];
	body['data'].forEach((element, index)=> {
		if (element['author']['name'] == "盐选推荐") {
			body['data'].splice(index,1);
		}
	});
}
if (url.indexOf('people') != -1) {
	// people
	delete body['mcn_user_info'];
}

if (url.indexOf('market') != -1) {
	// market
	body['sub_webs'].splice(0,1);
	body['sub_webs'].splice(1,1);
}

body = JSON.stringify(body);
$done({body});
