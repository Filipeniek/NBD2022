var mapFunc = function(){
emit(this.job, "");
};

var reduceFunc = function(key, values){
return ""};

db.people.mapReduce(mapFunc, reduceFunc, {out:"map_reduce_ex_3"});

printjson(db.map_reduce_ex_3.find().pretty().toArray())
