printjson(db.people.aggregate({$group:{_id:"$sex", "avg_weight":{$avg:"$weight"}, "avg_height":{$avg:"$height"}}}).toArray());
