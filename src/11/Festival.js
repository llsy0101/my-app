import { useEffect, useState, useRef } from "react";
import TailSelect from "../ui/TailSelect";
import GalleryCard from "../10/GalleryCard";

export default function Festival() {
  const [tdata, setTdata] = useState();       //부산 축제 정보
  const [ops, setOps] = useState();           //축제 구정보
  const [cards, setCards] =useState();
  const selRef = useRef() ;                   //옵션 선택

  // data fetch
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log("fetch", data)
        setTdata(data.getFestivalKr.item)
      })
      ;

    console.log("getFetchData", url)
  }

  //구선택
  const handleGuSelect = () => {
    console.log(selRef.current.value)
    let tm = tdata.filter(item => item.GUGUN_NM === selRef.current.vlaue)
                  .map(item => <GalleryCard key = {item.UC_SEQ}
                                            imgUrl = {item.MAIN_IMG_NOMAL}
                                            title = {item.MAIN_TITLE}
                                            content = {item.USAGE_DAY_WEEK_AND_TIME}
                                            spTag = {item.SUBTITLE}
                        />);
    console.log(tm)
    setCards(tm);

  }


  //컴포넌트 생성 
  useEffect(() => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=37&resultType=json`;

    getFetchData(url);
  }, []);

  //데이터가 fetch 되었을때
  useEffect(() => {
    if (!tdata) return;
    console.log(tdata);
    let tm = tdata.map(item => item.GUGUN_NM

 
      );
    tm = [...new Set(tm)].sort();
    setOps(tm);
  }, [tdata]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      <form className="w-full flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
          <label htmlFor="op" 
                 className="block text-xl font-bold
                            inline-flex justify-center items-center mr-5
                           text-gray-900 dark:text-white">
                 🌊부산축제정보🎉
          </label>
          {ops && <TailSelect id = "op"
                      selRef = {selRef}
                      ops = {ops}
                      initText = "--- 부산 지역 구 선택 ---" 
                      handleChange = {handleGuSelect} /> }
        </div>
      </form>
      <div className="w-full grid grid-cols-1 
                  md:grid-cols-2 lg:grid-cols-3 
                  gap-2">
                   

      </div>
    </div>
  )
}
