printjson(db.people.updateMany({"job":"Editor"}, {$unset:{email:""}}));
printjson(db.people.find({"job":"Editor"}, {last_name:1, job:1}).toArray());
