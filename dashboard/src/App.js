import React from 'react'
import Sidebar from './Components/Sidebar'
import Reviews from './Components/Reviews'
import AverageRating from './Components/AverageRating';
import Analysis from './Components/SentimentAnalysis';
import Visitors from './Components/WebsiteVisitors'
import './Css/Sidebar.css'
import './Css/Rewiews.css'



function App() {
  return (
    <div className="App">
     <Sidebar />
     <Reviews />
     <AverageRating/>
     <Analysis/>
     <Visitors/>
    </div>
  );
}

export default App;
