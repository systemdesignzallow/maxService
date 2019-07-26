const mongoose = require('mongoose');
const mockData = require ('./mockData');
const random = require('mongoose-simple-random');

// mongoose.connect('mongodb://localhost/formTEST')
mongoose.connect('mongodb+srv://JenNummerdor:Coffee@cluster0-h7uqd.mongodb.net/test?retryWrites=true')

let agentSchemaTest = mongoose.Schema({ 
  agent_name_TEST: {
    type: String,
    unique: true,
  },
  recent_sales_TEST: Number, 
  phone_TEST: String,
  agent_type_TEST: String,
  average_stars_TEST: Number,
  num_ratings_TEST: Number,
  agent_photo_TEST: String
});
agentSchemaTest.plugin(random);

let AgentTest = mongoose.model('AgentTest', agentSchemaTest);

//////////INSERTION INTO DATABASE MOCK FUNCTION/////////////////
const insertIntoDbTest = (cb) => {
  for(let i = 0; i < 5; i++){
    AgentTest.insertMany(mockData, (err, docs) => {
      if(err){
        console.error(err);
      } else {
        cb(docs);
      };
    });
  };
};


//lowers code coverage but does not query db directly(queries mock)
// //////////RETRIEVAL FROM DATABASE MOCK FUNCTION/////////////////
// const getFourRandomAgentsTest = async (cb) => {
//   let finalResultsArr = []
//   let filterOne = { agent_type: { $in: 'listing' } } 
//   let filterThree = { agent_type: { $in: 'premier' } }
//   let optionsThree = { limit: 3 } 

//   try {
//     await Agent.findRandom(filterOne, {}, {}, (err, one) => {
//     if(err){
//       console.error(err)
//     } else {
//       finalResultsArr.push(one[0])
//     }
//   });
//   await Agent.findRandom(filterThree, {}, optionsThree, (err, three) => {
//     if(err){
//       console.error(err)
//     } else {
//       for(var i = 0; i < three.length; i++){
//         finalResultsArr.push(three[i])
//       }
//     }
//     cb(finalResultsArr)
//   })
//   }
//   catch(e){
//     return e
//   }
// };

module.exports.AgentTest = AgentTest; 
module.exports.agentSchemaTest = agentSchemaTest;
module.exports.insertIntoDbTest = insertIntoDbTest;
// module.exports.getFourRandomAgentsTest = getFourRandomAgentsTest;