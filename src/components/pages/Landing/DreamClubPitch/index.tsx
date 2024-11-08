import React from 'react';
import DreamClubPitch from './DreamClubPitch';

const questions = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/c2ba836676bd741556fc411b79bc7814c08c0ded2a37da9946b8de0b7740ffa4?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Do you want more money and more freedom?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/b6ae80f17d11e093c9b234145a03c684bdfdc760ed77bc1f22ee3665834a5259?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Got killer ideas, but can't always find the time or energy to get them done?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/5710ce647967b799b75553920585a5afa8936ba40b06e4236c6b620d779a93ae?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Wish you had more smart friends and colleagues who 'GET IT' — who can jam on conversion strategies, hotels recs for Rome, hit a dance class together, and share their latest skin care secrets?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/75ff53a41722bbbb911a54d556e880e8389c9781421920d3b9e225646ff3fc17?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Want fresh, proven marketing strategies that are simple to execute?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/b1cd5c4eaad884210fe05d367deec1e9f02882d44a814578fd4afbbc685e2565?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Are important projects consistently getting derailed? Wish someone would help you stay focused and on track?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/c2ba836676bd741556fc411b79bc7814c08c0ded2a37da9946b8de0b7740ffa4?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Were the last few years rough? Are you saddened by the exhausted human in the mirror and want your vibrant, passionate self back?"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/dfa4b584e3bd8fb58c74c9269862afb7774eb90e047f7d1a2721458f6ebf012e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    question: "Do you believe in the mind-body connection to increase creativity, intuition, flow, energy, joy and the general Magic of Life?"
  }
];

const notForYouItems = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/f2f4e0ec969917e8a36b58308443236ea43797d85044a805fd5df5870d6fc44a?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "Wanting a one-on-one business coach."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/f8e83279adea8172931a88f6b766aa500b49b060439499567b92ab6f5f8f9245?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "Looking for a step-by-step curriculum on how to build a business from scratch. (B-School is ideal for that part!)"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/ace865056bea50c01e902f17c6dd4064aa9dce145a2f4f56956ea2a71522dc4f?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "Satisfied with 'just getting by' or have little willingness to test, experiment, and yes… fail forward."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/1fa49021244d0e46068f1e1029acc0d56e2a0a37553e21e9ae7ca0ddbf555c93?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
    content: "Deciding between Dream Club and putting food on the table. This should be the fastest, easiest, no-brainer investment in yourself… ever."
  }
];

const DreamClubApp: React.FC = () => {
  return <DreamClubPitch questions={questions} notForYouItems={notForYouItems} />;
};

export default DreamClubApp;