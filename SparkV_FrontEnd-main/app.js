// const express = require('express');
// const bodyParser = require('body-parser');
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const path = require('path');

// const app = express();
// const genAI = new GoogleGenerativeAI("AIzaSyCPH3jjW9oIAqX4dn-2qLWpi_b66IIbMzM"); // Replace with your actual API key

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// async function run(name, problem) {
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const prompt = ` You are an assistant for a Roadmap Website named SparkV. I am a user named ${name} and I want you to write a roadmap for me if ${problem}`;
//     console.log("Question: "+prompt);
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = await response.text();
//     console.log("Answer: "+text);
//     return text;
// }

// app.post('/ai/ans', async (req, res) => {
//     const { name, problem } = req.body;
//     try {
//         const letter = await run(name, problem);
//         res.json({ letter });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred');
//     }
// });

// const port = process.env.PORT || 8081;
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });