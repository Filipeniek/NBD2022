var mapFunc2 = function(){
var credit = this.credit;
for(i in credit){
emit(credit[i].currency, parseFloat(credit[i].balance));
}
};

var reduceFunc2 = function(currency, balance){
return Array.sum(balance);
};


db.people.mapReduce(mapFunc2, reduceFunc2, {out:"map_reduce_ex_2"});

printjson(db.map_reduce_ex_2.find().pretty().toArray())
