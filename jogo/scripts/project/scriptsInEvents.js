

const scriptsInEvents = {

	async Sistemajogo_Event2_Act4(runtime, localVars)
	{
		var objpistasdogato = runtime.objects.pistasDoGato.getFirstInstance();
		
		objpistasdogato.text = "pistasDoGato: " + runtime.globalVars.pistasDoGato;
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
