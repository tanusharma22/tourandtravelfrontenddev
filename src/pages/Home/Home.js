import { Fragment,useEffect,useState } from "react";
import {Navbar,HotelCard,Categories,SearchStayWithDate} from "../../components";
import "./Home.css"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {useCategory,useDate} from "../../context";
export const Home = () => {
    const [hotels,setHotels]=useState([]);
    const [testData,setTestData]=useState([])
    const [hasMore,setHasMore]=useState(true);
    const [currentIndex,setCurrenntIndex]=useState(16);
    const {hotelCategory} =useCategory();
    const {isSearchModalOpen}=useDate();
    useEffect(()=>{
       (async()=>{
        try{
            const {data} =await axios.get(
                `https://tourandtravel.cyclic.app/api/hotels?category=${hotelCategory}`);
            setTestData(data);
            setHotels(data ? data.slice(0,16):[]);
            
        }
        catch(err)
        {
            console.log(err);
        }
       })() 
    },[hotelCategory]);
    const fetchMoreData=()=>{
    if(hotels.length>=testData.length){
        setHasMore(false)
        return
    }setTimeout(()=>{
        if(hotels && hotels.length>0){
            setHotels(hotels.concat(testData.slice(currentIndex,currentIndex+16)))
            setCurrenntIndex(prev=>prev+16)
        }else{
            setHotels([])
        }
    },1000)
    };

    
    return(
        <div className="relative">
            <Navbar/>
            <Categories/>
            
                {
                    hotels &&hotels.length>0 ?(
                        <InfiniteScroll
                            dataLength={hotels.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={hotels.length >0&& <h3 className="alert-text">Loading....</h3>}
                            endMessage={<p className="alert-text">You have seen it all!</p>}
                        >
                            <main className="main d-flex align-center wrap gap-larger">
                                {hotels&& hotels.map((hotel)=>(<HotelCard key={hotel._id} hotel={hotel}/>))}
                            </main>
                        </InfiniteScroll>
                    ):(<></>)
                }
                {isSearchModalOpen &&<SearchStayWithDate/>}
           
            
        </div>
        


    );
}