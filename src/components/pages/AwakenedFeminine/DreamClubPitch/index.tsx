import React from 'react';
import DreamClubPitch from './DreamClubPitch';

const questions = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/c2ba836676bd741556fc411b79bc7814c08c0ded2a37da9946b8de0b7740ffa4?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Are you seeking deeper spiritual abundance and halal wealth creation while maintaining your feminine essence?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/b6ae80f17d11e093c9b234145a03c684bdfdc760ed77bc1f22ee3665834a5259?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Do you have divine inspirations for your purpose, but struggle to manifest them while honoring your energy as a Muslimah?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/5710ce647967b799b75553920585a5afa8936ba40b06e4236c6b620d779a93ae?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Yearning for a sisterhood of successful Muslim women who understand both deen and dunya - who can discuss business strategy, modest fashion, spiritual growth, and self-care from an Islamic perspective?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/75ff53a41722bbbb911a54d556e880e8389c9781421920d3b9e225646ff3fc17?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Looking for ethical marketing approaches that align with your Islamic values while still being effective?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/b1cd5c4eaad884210fe05d367deec1e9f02882d44a814578fd4afbbc685e2565?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Finding your spiritual practices and personal growth goals getting overshadowed by daily responsibilities? Seeking guidance to stay aligned with your divine purpose?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/c2ba836676bd741556fc411b79bc7814c08c0ded2a37da9946b8de0b7740ffa4?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Has the modern world's pace left you feeling disconnected from your feminine power and spiritual essence? Ready to reclaim your radiant, authentic self?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/dfa4b584e3bd8fb58c74c9269862afb7774eb90e047f7d1a2721458f6ebf012e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Do you believe in the deep connection between spiritual, emotional, and physical healing as taught in our beautiful deen?"
  }
];

const notForYouItems = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/f2f4e0ec969917e8a36b58308443236ea43797d85044a805fd5df5870d6fc44a?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "Seeking traditional business coaching without the spiritual component."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/f8e83279adea8172931a88f6b766aa500b49b060439499567b92ab6f5f8f9245?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "Looking for basic business fundamentals without the integration of Islamic principles and feminine energy work."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/ace865056bea50c01e902f17c6dd4064aa9dce145a2f4f56956ea2a71522dc4f?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "Content with maintaining spiritual disconnection or unwilling to embrace deep transformation, bi'ithnillah."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/1fa49021244d0e46068f1e1029acc0d56e2a0a37553e21e9ae7ca0ddbf555c93?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "If this investment would create genuine hardship. While we believe in the power of this work, we want it to be a blessed step forward, not a burden."
  }
];

const SomaticHealingApp: React.FC = () => {
  return <DreamClubPitch questions={questions} notForYouItems={notForYouItems} />;
};

export default SomaticHealingApp;