var mapFunc = function(){
var credit = this.credit;
for(i in credit){
emit(credit[i].currency, {balance: credit[i].balance, count:1});
}
};

var reduceFunc = function(key, values){
var reducedValue = {count:0, balance:0}

values.forEach(function (value) {
reducedValue.count += value.count
reducedValue.balance += value.balance});

return reducedValue;
}

var finalizeFunc = function(key, reducedValue){
reducedValue.avg = (reducedValue.balance/reducedValue.count);
reducedValue.sum = reducedValue.balance;
return reducedValue
}

db.people.mapReduce(mapFunc, reduceFunc, {query:{sex : "Male",nationality : "Poland" }, out:"map_reduce_ex_5", finalize:finalizeFunc});

printjson(db.map_reduce_ex_5.find().pretty().toArray())
