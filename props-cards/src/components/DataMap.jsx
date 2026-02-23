import { memo } from 'react';
import Card from './card.jsx';
export const cardData = [
  {
    id: "2400032662",
    domain: "Web Development",
    title: "AI Portfolio Builder",
    name: "Jaya Sai",
    description: "An AI-powered portfolio generator using React and Tailwind.",
    votes: 128,
    likes: 342
  },
  {
    id: "2400032663",
    domain: "Machine Learning",
    title: "Student Performance Predictor",
    name: "Rahul Kumar",
    description: "Predicts academic results using regression models.",
    votes: 95,
    likes: 210
  },
  {
    id: "2400032664",
    domain: "Cyber Security",
    title: "Phishing Detection System",
    name: "Ananya Reddy",
    description: "Detects phishing URLs using NLP and classification.",
    votes: 176,
    likes: 489
  },
  {
    id: "2400032665",
    domain: "Cloud Computing",
    title: "Serverless Blog Platform",
    name: "Vikram Singh",
    description: "Built using AWS Lambda, S3, and API Gateway.",
    votes: 82,
    likes: 150
  }
];

const DataMap = () => {
  return (
    <div>
      {
        cardData.map(
            function(elem){
                return <Card key={elem.id} id={elem.id} domain={elem.domain} title={elem.title} name={elem.name} description={elem.description} votes={elem.votes} likes={elem.likes} />
            }
        )
      }
    </div>
  );
};

export default memo(DataMap);