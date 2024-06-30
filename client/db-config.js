sqlite3 = require('sqlite3') 
sqlite = require('sqlite') 

async function setup() {
    const db = await sqlite.open(
        {filename: './user-db.sqlite',
        driver: sqlite3.Database});
    await db.migrate({force: 'last'});
    console.log('db migrated')
}

setup();