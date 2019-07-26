const mongoose = require('mongoose')
const nameArr = require ('./nameArr')
const random = require('mongoose-simple-random');

// mongoose.connect('mongodb://localhost/form')
mongoose.connect('mongodb+srv://JenNummerdor:Coffee@cluster0-h7uqd.mongodb.net/test?retryWrites=true')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongo!')
});

let agentSchema = mongoose.Schema({ 
  agent_name: {
    type: String,
    unique: true,
  },
  recent_sales: Number, 
  phone: String,
  agent_type: String,
  average_stars: Number,
  num_ratings: Number,
  agent_photo: String
});

agentSchema.plugin(random)

let Agent = mongoose.model('Agent', agentSchema)

//////////FUNCTIONS TO RANDOMLY GENERATE DATA FOR THE DATABASE/////////////////

//GENERATES RANDOM NUMBER
const randomNumberGen = (max, options) => {
  if(options === 'stars'){
    var min = Math.ceil(2);
    var str = ((Math.random() * (max - min + 1)) + min).toString();
    return eval(str.slice(0, 4))
  } else if (typeof options === 'number'){
    if(options % 10 === 0) { 
      return 1
    } 
  }
  return Math.floor(Math.random() * Math.floor(max))
}

//GENERATES RANDOM PHONE NUMBER
const generatePhoneNumber = () => {
  let phoneNum = "("
  for (var i = 0; i < 3; i++){ 
    phoneNum+= randomNumberGen(9) 
  }
  phoneNum+=") "
  for(var j = 0; j < 3; j++){ 
    phoneNum+= randomNumberGen(9)
  }
  phoneNum+= "-"
  for(var k = 0; k < 4; k++){
    phoneNum+= randomNumberGen(9)
  }
  return phoneNum
}

//ASSIGNS AGENT TYPE//
const agentAssign = (num) => {
  if(num < 25){
    return 'listing'
  } else {
    return 'premier'
  }
}

//////////INSERTION///////////////// MUST BE RUN ON DB STARTUP TO AVERT ERRORS //////////////////
function insertIntoDb(){
  let agentCount = 1
  for(let i = 0; i < nameArr.length && i <= 100; i++){
    Agent.insertMany([
      {
        agent_name: nameArr[i], 
        recent_sales: randomNumberGen(100), 
        phone: generatePhoneNumber(), 
        agent_type: agentAssign(agentCount), 
        average_stars: randomNumberGen(5, "stars"), 
        num_ratings: randomNumberGen(500, agentCount), 
        agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`
      }
    ], (err, docs) => {
      if(err){
        console.error("THERE IS AN ERROR") 
      } else {
        return docs 
      }
    })
  }
}

//////////FUNCTION TO RANDOMLY RETRIEVE DATA FROM THE DATABASE/////////////////
const getFourRandomAgents = async (cb) => {
  let finalResultsArr = []
  let filterOne = { agent_type: { $in: 'listing' } } 
  let filterThree = { agent_type: { $in: 'premier' } }
  let optionsThree = { limit: 3 } 

  try {
    await Agent.findRandom(filterOne, {}, {}, (err, one) => {
    if(err){
      console.error(err)
    } else {
      finalResultsArr.push(one[0])
    }
  });
  await Agent.findRandom(filterThree, {}, optionsThree, (err, three) => {
    if(err){
      console.error(err)
    } else {
      for(var i = 0; i < three.length; i++){
        finalResultsArr.push(three[i])
      }
    }
    cb(finalResultsArr)
  })
  }
  catch(e){
    return e
  }
};

module.exports.Agent = Agent; 
module.exports.getFourRandomAgents = getFourRandomAgents; 
module.exports.agentSchema = agentSchema;
module.exports.randomNumberGen = randomNumberGen;
module.exports.generatePhoneNumber = generatePhoneNumber;
module.exports.agentAssign = agentAssign; 