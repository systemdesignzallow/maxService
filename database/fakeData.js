var faker = require('faker');
var fs = require('fs');

var randomName = faker.name.findName();
var randomNumber = faker.random.number();
var randomPhone = faker.phone.phoneNumber();
var randomWord = faker.random.word();
var randomPhoto = faker.image.avatar();

var data = [];

for (var i = 0; i <= 10000000; i++) {
  fs.appendFileSync('mock.json', JSON.stringify({
    'agent_name': randomName,
    'recent_sales': randomNumber,
    'phone': randomPhone,
    'agent_type': randomWord,
    'average_stars': randomNumber,
    'num_ratings': randomNumber,
    'agent_photo': randomPhoto
  }));
}

// let mock = JSON.stringify(data.toString());

// fs.writeFileSync('mock.json', mock);