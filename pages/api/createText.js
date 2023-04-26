//const { Configuration, OpenAIApi } = require("openai");

import {Configuration}from "openai";
import {OpenAIApi} from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAPIKEY,
});
const openai = new OpenAIApi(configuration);

export default async function(req, res)
{
  if(!configuration.apiKey){
    res.status(500).json({
      error:{
        message:"Open AI is not configured correctly!"
      }
    });
    return;
  }

  const chat = req.body.p || '';
  if(chat.trim().length === 0){
    res.status(400).json({
      error:{
        message:"Please enter some text",
      }
    });
    return;
  }
  try{
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(chat),
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty:0.5,
      presence_penalty: 0,
      stop: ["You:"],
    });
    res.status(200).json({result: completion.data.choices[0].text});
  }catch(error){
    if(error.response){
      console.error(`here ${error.response.status},${error.response.data}`);

    } else{
      console.error(`error with openapi request ${error.message}`);
      res.status(500).json({
        error:{
          message:'An error occured during your req'
        }
      });
    }
  }
  }

  function generatePrompt(chat){
    const capitilizedCHAT = chat[0].toUpperCase() + chat.slice(1).toLowerCase();

    return `
    Friend: ${capitilizedCHAT} 
    You: `;
  }