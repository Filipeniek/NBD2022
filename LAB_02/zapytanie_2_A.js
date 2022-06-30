printjson(db.people.aggregate([
{$unwind: "$credit"},
{$group:{
_id:"$credit.currency",
"sum":{$sum: "$credit.balance"}}
},{$project:{
_id:0,
waluta: "$_id",
 "sum" :1}}]).toArray());
