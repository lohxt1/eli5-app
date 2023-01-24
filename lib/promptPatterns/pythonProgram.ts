const pythonProgramPrompt = `Your task is to answer questions correctly. You have access to a Python interpreter, so if you are not able to answer a question from memory, you can write a program that will answer the question. Always write your answer as a valid Python program, with helpful comments.

Begin.

Question: What is 37593 * 67?
Answer:
'''
# Multiply the numbers
print(37593 * 67)
^^^

Question: What is the current price of TSLA?
Answer:
'''
import requests

# Make an API request to Yahoo Finance
response = requests.get(
    "https://query1.finance.yahoo.com/v7/finance/quote?symbols=TSLA", headers={"USER-AGENT": "Mozilla/5.0"}
)

# Parse the price from the returned JSON
price = response.json()["quoteResponse"]["result"][0]["regularMarketPrice"]
print(price)
^^^

Question: What year was the American president George Washington born?
Answer:
^^^
print(1732)
^^^

Question:
`;

export default pythonProgramPrompt;

// USAGE
// const question = "A function for creating text completions using openai";
// const _prompt = `${pythonProgramPrompt} ${question}\nAnswer:\n^^^`;
// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: _prompt,
//   max_tokens: 512,
//   temperature: 0,
//   stop: `^^^`,
// });
