/*---- PRODUTO MAIS CARO ----*/
// const database = 'bd3_atv2'
// const collection = 'bd3_atv2_produtos'
// use(database)
// db[collection].find().sort({valor: -1}).limit(1)


/*---- PRODUTO MAIS BARATO ----*/
// const database = 'bd3_atv2'
// const collection = 'bd3_atv2_produtos'
// use(database)
// db[collection].find().sort({valor: 1}).limit(1)


/*---- PRODUTOS EM UMA FAIXA DE VALOR QUE NEM TODOS APAREÇAM ----*/
// const database = "bd3_atv2";
// const collection = "bd3_atv2_produtos";
// use(database);
// db[collection].find({
//   valor: { $gte: 199.9, $lte: 249.9 },
// }).limit(6);


/*---- PRODUTOS DE UMA CATEGORIA MAS NEM TODOS APARECEM ----*/
// const database = "bd3_atv2";
// const collection = "bd3_atv2_produtos";
// use(database);
// db[collection].find({
//   categoria: {$eq: "Eletrodomésticos"}
// }).limit(5);


/*---- PRODUTOS DE MAIS DE UMA CATEGORIA MAS NEM TODOS APARECEM ----*/
// const database = "bd3_atv2";
// const collection = "bd3_atv2_produtos";
// use(database);
// db[collection].find({
//   categoria: { $in: ["Eletrodomésticos", "Games"] },
// }).limit(5);


/*---- EXCLUSÃO DE PRODUTOS DE DUAS CATEGORIAS, MOSTRANDO OS DE OUTRAS CATEGORIAS MAS NÃO TODOS ----*/
// const database = "bd3_atv2";
// const collection = "bd3_atv2_produtos";
// use(database);
// db[collection].find({
//     categoria: {$nin: ["Eletrodomésticos", "Eletrônicos"]}
// }).limit(5)


/*---- PRODUTOS DOS MAIS BARATOS PARA OS MAIS CAROS----*/ //Não sei o porque mas não aparecem todos
// const database = 'bd3_atv2'
// const collection = 'bd3_atv2_produtos'
// use(database)
// db[collection].find({}).sort({valor: 1})


/*---- PRODUTOS DOS MAIS CAROS PARA OS MAIS BARATOS----*/ //Não sei o porque mas não aparecem todos
// const database = 'bd3_atv2'
// const collection = 'bd3_atv2_produtos'
// use(database)
// db[collection].find({}).sort({valor: -1})


/*---- PRODUTOS DOS MAIS BARATOS PARA OS MAIS CAROS DE UMA CATEGORIA ----*/
// const database = 'bd3_atv2'
// const collection = 'bd3_atv2_produtos'
// use(database)
// db[collection].find({categoria: "Games"}).sort({valor: 1})


/*---- PRODUTOS DOS MAIS CAROS PARA OS MAIS BARATOS DE UMA CATEGORIA ----*/
// const database = 'bd3_atv2'
// const collection = 'bd3_atv2_produtos'
// use(database)
// db[collection].find({categoria: "Eletrônicos"}).sort({valor: -1})