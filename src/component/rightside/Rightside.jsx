import { useState } from 'react';

const Recommendations = () => {
  // Define state to store stage recommendations
  const [recommendations] = useState([
    {
      id: 1,
      company: 'Fake Company_1',
      description: 'Recommendation 1: Exceptional skills in web development.'
    },
    {
      id: 2,
      company: 'Fake Company_2',
      description: 'Recommendation 2: Proficient in building responsive web applications.'
    },
    {
      id: 3,
      company: 'Fake Company_3',
      description: 'Recommendation 3: Strong expertise in backend development with Node.js.'
    }
  ]);

  return (
    <div className='rightside'>
      <h2 className='rightSideRecommendations'>Recommendations:</h2>
      <ul>
        {recommendations.map(recommendation => (
          <li key={recommendation.id} className='rightSideRecommendationBox'>
            <h3 className='rightSideCompanyName'>{recommendation.company}</h3>
            <p className='rightSideRecommendationContenent'>{recommendation.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
