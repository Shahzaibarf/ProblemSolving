db.resturants.find();
db.resturants.find({},{resturant_id: 1, name: 1, boroghn : 1});
db.resturants.find({},{resturant_id: 1, name: 1, boroghn : 1, _id : 0 });
db.resturant.find({ boroghn: BronX });
db.resturant.find({ boroghn: BronX }).limit(5);
db.resturant.find({ boroghn: BronX }).Skip(5).limit(5);
db.resturant.find({grades : { $elemMatch: { "score" : { $gt : 90 } } }})
db.resturant.find({grades: { $elemMatch : { "Score" : { $gt : 80, $lt: 90}}})
db.resturant.find({ "address.coord":{ $lt : -75.444 }});
db.resturant.find({$and:[{"cuisine": {$ne: "american"}},{"grades.score": {$gt: 90}},{"address.coord": { $lt: -75 }} ]})
db.resturant.find({"cuisine":{$ne:"American","grades.grade": A, "Broghn": {$ne: "brookly"}}}).sort({"cuisine": -1});
db.resturant.find({name:'/^wil/'},{resturant_id:1, name: 1, boroghn: 1});
db.resturant.find({name : "/ces$/"},{name: 1, resturant_id: 1, boroghn: 1});
db.resturant.find({name: /.*Reg.*/},{ name: 1, resturant_id: 1, boroghn: 1});
db.resturant.find({boroghn: brookly, $or:[{cuisine:"amercian"},{cuisine:"chinese"}]})
db.resturant.find({boroghn:"brookly", $or:[{cuisine:"american"},{cuisine: chenese}]})
db.resturant.find({"broghn":{$in:["brookly","iceland","bronex"]}},{"name":1,"cusine":1})
db.resturant.find({"boroghn":{$nin:["brookly","iceland","bronex"]}},{"name":1,"cuisine":1})
db.resturant.find({"grade.score": { $not : { $gt : 10 } } },{ "cuisine" : 1, "name" : 1 })
db.resturant.find({$or: [ { "name" : "/^will/"}, {$and: [ {"cuisine":{$ne:"American"}}, {"Cuisine":{$ne:"Chinese"}} ]} ]},{name:1,cuisine:1});
db.resturant.find({$and: [{"grades.grade": "A"},{"grades.score": 10},{"grades.date":ISODate("2014-08-11T00:00:00Z")}]},{name:1, cuisine:1});
db.resturant.find({'grades.1.grade': 'A', 'grades.1.score': 10, 'grade.1.date': ISODate("2014-08-11T00:00:00Z")},{name: 1, cuisine: 1});
db.resturant.find({'address.1.coord': {$and:[{$gt: 43},{$lt:53}]}},{cuisine:1,name:1});
db.resturant.find().sort({"name":1});
db.resturant.find().sort({"name":-1});
db.resturant.find().sort({'cuisine': 1,'boroghn': -1});
db.resturant.find({"address.street":{ $exists : true }});
db.resturant.find({"address.coord":{$type:1}})
db.resturant.find({"grades.score":{$mod: [7,0]}},{name:1, cuisine:1, grade:1})
db.resturant.find({name:{$regex:'/mon*/',$options: "i"}},{"address.coor": 1, "name":1});
db.resturant.find({name:{$regex:'/^mon/i'}},{cuisine:1,name:1});
db.resturant.find({"grades.score":{$lt:5}});
db.resturant.find({$and:[{"grade.score":{$lt:5}},{$or:[{"boroghn":"brookly"},{"boroghn":"icland"}]}]});
db.resturant.find({$and:[{"grade.score":{$lt:5}},{$nor:[{"cuisine":"American"},{"cuisine":"Chinses"}]}]})
db.resturant.aggregate([{$unwind:"$grades"}])
db.resturant.aggregate([{$unwind:"$grades"},{$group:{_id: "$name",avgScore:{ $avg : "$grades.score" }}}]);
db.resturant.aggregate([{$unwind:"$grades"},{$group:{_id:"$name",maxScore:{$max : "$grades.score"}}}]);
db.resturant.aggregate([{$unwind:"$grades"},{$group:{_id:"$name",avgMin:{$min : "$grades.score"}}}]);
db.resturant.aggregate({$group:{_id:"$boroghn",count:{$sum: 1}}});
db.resturant.aggregate({$group:{_id:"$cuisine", count:{$sum:1 } } } );
db.resturant.aggregate({$group:{_id: { boroghn:"$boroghn", cuisine: "$cuisine" },count:{$sum:1}}})
db.resturant.aggregate([{$unwind:"$grades"},{$match :{"$grades.score": A}},{$group : {_id:"$cuisine",count:{$sum:1 } } } ]);
db.resturant.aggregate([{$unwind:"$grades"},{$match: {"$grades.score": A}},{$group:{ _id: "$boroghn", count:{$sum:1  }}}]);
db.resturant.aggregate([{$unwind:"$grades"},{$match:{"$grade.score": A}},{$group:{_id:{boroghn:"$boroghn",cuisine:"$cuisine"},count:{$sum:1}}}]);
db.resturant.aggregate([{$unwind: "$grades"},{$project: {month:{$month:{$toDate:"$grades.date"}}, year:{$year:{$toDate:"$grades.date"}} }},{$group:{ _id:{ month:"$month",year:"$year" } }},{$sort:{"_id.year":1, "_id.month":1}}]);
db.resturant.aggregate([{$unwind:"$grades"},{$group:{ _id:{cusinie:"$cusine"}, avgScore:{$avg:"$grades.score"} } }])
db.resturant.aggregate([{$unwind:"$grades"},{$group:{ _id:"$cuisine", avgScore:{ $max:"$grades.score" } }}])
db.resturant.find({"grades":{$elemMatch:{"date":ISO('2010-01-10'),"grade":{$in:['A',B]}}}},{name:1, cuisine:1});
db.resturant.find({$and:[{"gardes.garde": 'A'},{"grades.grade": {$not :{$eq: 'B'}}}]},{name:1,cuisine:1})
db.resturant.find({name:{$regex: /coffee/i}},{name:1, address: 1});
db.resturant.aggregate([{$unwind: "$address"},{$match:{"address.zip":"/^10/"}},{$project:{name:0,"address.street":1, "address.zip":1 }}])
db.resturant.aggregate([{$unwind:"$grades"},{$group:{_id:"$resturant_id",avgScore:{$avg: "$grade.score" }}},{$sort: {avgScore :-1}},{$limt :-1},{$project:{_id:1,name:1}}]);
db.resturant.aggregate([{$unwind: "$grades"},{$match:{"grades.grade":"A"}},{$group:{_id :resturant_id,count:{$sum :1}}},{$sort:{count:-1}},{$group:{_id:'$count',resturants:{$push: '$_id'}}])