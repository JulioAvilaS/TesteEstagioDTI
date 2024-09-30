import './App.css';
import Header from './contents/Header';
import ArticleEnterData from './contents/ArticleEnterData';
import AboveAvgStudents from './contents/showData/AboveAvgStudents';
import LowAttSudents from './contents/showData/LowAttSudents';
import AllStudents from './contents/showData/AllStudents';
import AvgClass from './contents/showData/AvgClass';
import ArticleDeleteData from './contents/ArticleDeleteData';

function App() {
  return (
    <div className='App'>
      <div className='superior'>
      <Header />
      <ArticleEnterData />
      <ArticleDeleteData/>
      </div>
      
      <article className='article'>
          <AllStudents />
    
          <AboveAvgStudents />

          <LowAttSudents />

          <AvgClass/>
      </article>
      

    </div>
  );
}

export default App;

