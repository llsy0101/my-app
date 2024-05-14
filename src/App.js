import './App.css';
// import logo from './logo.svg' ;
// import MyClock from './02/MyClock'; 
import { RiHomeHeartFill } from "react-icons/ri";
// import MyDiv from './03/MyDiv'; 
//import MyList from './04/MyList';
//import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import FoodMain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';


function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-rose-200'>
        <p>리액트 실습</p> 
        <p><RiHomeHeartFill className='text-4xl text-red-500'/></p>
      </header>
      <main className='grow flex justify-center items-center'>
        {/* <div className='flex justify-center items-center w-1/3 h-1/2'>
          <img src={logo} alt="logo" />
        </div> */}

        {/* <MyDiv /> */}
        {/* <MyList /> */}
        {/*<Lotto /> */}
        {/* <BoxOffice /> */}
        {/* <FoodMain /> */}
        <TrafficMain />
      </main>
      <footer className='flex justify-center items-center h-20 bg-rose-200 text-black font-bold'>
      ⓒ Se Yeong Lee , K-digital-7
      </footer>
    </div>
  );
}

export default App;
