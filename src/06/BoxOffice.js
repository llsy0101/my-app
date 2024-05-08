import box from "./BoxOffice.json";
export default function BoxOffice() {

  const dailyList = box.boxOfficeResult.dailyBoxOfficeList ;
  const tags = dailyList.map(item => 
                             <li key={item.movieCd}>
                              🎬 {item.rank} : {item.movieNm}
                              </li>);
  
  return (
    <div>
      <ul>
      {tags}
      </ul>
    </div>
  )
}
