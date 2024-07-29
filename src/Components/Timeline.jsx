// ./src/components/Timeline.jsx
import React from 'react';

const Timeline = () => {
  const events = [
    {
      year: "2021",
      title: "Comic Haven Launch",
      description: "Comic Haven was launched to bring the latest comic news and reviews to fans worldwide.",
    },
    {
      year: "2022",
      title: "First Major Interview",
      description: "We conducted our first major interview with a renowned comic book artist, bringing exclusive insights to our readers.",
    },
    {
      year: "2023",
      title: "100th Comic Review Published",
      description: "We reached a milestone of 100 comic reviews, covering a wide range of genres and styles.",
    },
    {
      year: "2024",
      title: "Launch of Indie Comics Section",
      description: "We launched a dedicated section for indie comics, supporting and showcasing emerging talent.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Our Journey</h1>
        <div className="relative">
          <div className="border-r-4 border-gray-300 absolute h-full top-0 left-8"></div>
          <ul className="list-none m-0 p-0">
            {events.map((event, index) => (
              <li key={index} className="mb-8">
                <div className="flex items-center mb-1">
                  <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h2 className="text-2xl font-semibold ml-4">{event.title}</h2>
                </div>
                <div className="ml-12 pl-4">
                  <span className="text-gray-500">{event.year}</span>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
