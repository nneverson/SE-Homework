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
     <Reviews review='1,281' />
     <AverageRating avgRate='4.6'/>
     <Analysis num1= '960' num2='122' num3='321'/>
     <Visitors visitors= '821'/>
    </div>
  );
}

export default App;
