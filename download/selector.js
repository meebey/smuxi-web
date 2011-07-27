var allDistros;
var currentMode = "stable";

function setDistros (distros)
{
	allDistros = distros.split (' ');
}

function dget (id) { return document.getElementById (id); }
function dshow (id) { dget(id).style.display='block'; }
function dhide (id) { dget(id).style.display='none'; }

function selectOption (op1,distros)
{
	currentMode = op1;
	var op2 = op1 == "stable" ? "unstable" : "stable";
	var b1 = dget ("button-" + op1);
	var b2 = dget ("button-" + op2);
	b1.className = "button button-chosen";
	b2.className = "button button-selection";
        dshow ("select-message");
	dshow ("sources-" + op1);
	dhide ("sources-" + op2);
	dshow ("intro-" + op1);
	dhide ("intro-" + op2);
	for (var n=0; n<allDistros.length;n++) {
		var dis = allDistros[n];
		dhide ("button-" + dis);
                dget ("button-" + dis).className="button button-select";
		dhide ("download.download-" + dis + "-stable");
		dhide ("download.download-" + dis + "-unstable");
	}
	distros = distros.split (' ');
        for (var n=0; n<distros.length; n++) {
		var dis = distros[n];
                dshow ("button-" + dis);
        }
	dshow ("distro-selector");
        dhide ("select-message-sources");
}

function selectDistro (seldis)
{
    for (var n=0; n<allDistros.length;n++) {
        var dis = allDistros[n];
        dget ("button-" + dis).className="button button-select";
        dhide ("download.download-" + dis + "-" + currentMode);
    }
	dshow ("download.download-" + seldis + "-" + currentMode);
    dget ("button-" + seldis).className="button button-chosen";
    //dhide ("select-message");
}

