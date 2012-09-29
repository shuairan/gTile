const Gio = imports.gi.Gio;

const Extension = imports.ui.extensionSystem.extensions['gTile@shuairan']
const GTILE_SCHEMA = 'org.cinnamon.extensions.gtile';

// End of imports.

function getSettings() {
/*
    let dir = Extension.dir.get_child('schemas').get_path();
	global.log(dir);
    let source = Gio.SettingsSchemaSource.new_from_directory(dir,
			Gio.SettingsSchemaSource.get_default(),
			false);

	if(!source) {
		throw new Error('Error Initializing the thingy.');
	}

	let schema = source.lookup(GTILE_SCHEMA, false);

	if(!schema) {
		throw new Error('Schema missing.');
	}
*/
    global.log(GTILE_SCHEMA);    
    return new Gio.Settings({
		schema: GTILE_SCHEMA
	});
}
