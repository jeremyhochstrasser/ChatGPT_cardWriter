require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
var fs = require('fs');

var clientName = "name"
var clientNotes = "mention notes"
const Author = (process.env.AUTHOR);


// Send call to GPT using prompt
async function main(Cli_Name,Cli_Note) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Write a thank you letter from " + Author + " to " + Cli_Name + " that mentions the " + Cli_Note,
        max_tokens: 200,
        temperature: 0.3,
      });``

    const completion = response.data.choices[0].text;

    console.log(completion);
}
// function to split file.txt on newlines -- seperated by a comma for each line
function processFileLines(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const lines = data.split('\n');
      lines.forEach(callback);
    });
  }
//

// read in the file.txt and split it and store it into var "array"
function readAndSplit(line) {
    var array = line.split(',');
    clientName = array[0];
    clientNotes = array[1];
    
    //console.log(clientName); 
    //console.log(clientNotes);

}

processFileLines('file.txt', (line) => {
    //console.log("\n__________________ New Entry")
    readAndSplit(line);
    main(clientName,clientNotes);
  });