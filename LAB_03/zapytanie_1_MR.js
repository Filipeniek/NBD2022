var mapFunc = function(){
emit(this.sex, {count:1, height:parseFloat(this.height), weight:parseFloat(this.weight)});
};

var reduceFunc = function(sex, values){
var value = {count:0, height:0, weight:0};
for(i=0; i < values.length; i++){
value.count += values[i].count;
value.height += values[i].height;
value.weight += values[i].weight;
}
return value;
};

var finalizeFunc = function(sex, value){
var avg_values = {avgHeight:0, avgWeight:0}
avg_values.avgHeight = (value.height / value.count);
avg_values.avgWeight = (value.weight / value.count);
return avg_values;
};

db.people.mapReduce(
mapFunc, reduceFunc, {out:"map_reduce_ex_1", finalize: finalizeFunc});

printjson(db.map_reduce_ex_1.find().pretty().toArray())
