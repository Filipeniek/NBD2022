printjson(
db.people.aggregate([
{
	$match:{"sex":"Female", "nationality":"Poland"}
},
{
	$unwind:"$credit"
},
{
	$group:{
		_id:"$credit.currency",
		"sum":{$sum: "$credit.balance"},
		"avg":{$avg: "$credit.balance"},
		count:{$sum:1}
}},
{
$project:{_id:0,waluta: "$_id","sum":1, "avg":1, count:1}}
]).toArray());
