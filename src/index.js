require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function main() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 25,
        temperature: 0,
      });

    const completion = response.data.choices[0].text;

    console.log(completion);
}

console.log(process.env.OPENAI_API_KEY);