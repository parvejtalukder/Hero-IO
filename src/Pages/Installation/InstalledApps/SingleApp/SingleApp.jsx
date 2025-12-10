import Img from '/src/assets/icon-downloads.png';
import AvgRating from '/src/assets/icon-ratings.png';
import reviewsIcon from '/src/assets/icon-review.png';
import React, { useEffect, useState } from 'react';

const SingleApp = ({App, UnstallHandle}) => {

    // const [appFound, setAppFound] = useState([]);
    // useEffect(() => {
    //     const storedIds = JSON.parse(localStorage.getItem("appIds")) || [];
    //     setAppFound(storedIds);
    // }, []);

    // const UnstallHandle = ()  => {
    //         const storedIds = JSON.parse(localStorage.getItem("appIds")) || [];
    //         const updatedIds = storedIds.filter(id => id !== App.id);
    //         localStorage.setItem("appIds", JSON.stringify(updatedIds));
    //         setAppFound(updatedIds);
    // }
    // console.log(App);
    return (
        <div className='bg-white my-3 w-full h-auto px-3 py-2 rounded-xl flex justify-between items-center gap-2'>
            <section className='flex gap-3 items-center'>
                <div>
                    <img className='w-[50px] rounded-xl' src={App.image} alt={App.title}></img>
                </div>
                <div>
                    <h2>{App.title}</h2>
                    <section className='flex w-full justify-start items-center gap-4'>
                            <section className='flex justify-start items-center gap-2'>
                                  <img src={Img} alt="Download" className='w-5 h-5'/>
                                  <p className='text-[15px]'>{App.downloads/10000}M</p>
                                </section>
                                <section className='hidden lg:flex justify-start gap-2'>
                                  <img src={AvgRating} alt="Average Ratings" className='w-5 h-5'/>
                                  <p className='text-[15px]'>{App.ratingAvg}</p>
                                </section>
                                <section className='hidden lg:flex justify-start gap-2'>
                                  <img src={reviewsIcon} alt="Total Reviews" className='w-5 h-5'/>
                                  <p className='text-[15px]'>{App.reviews}</p>
                            </section>
                    </section>
                </div>
            </section>
            <section>
                <button onClick={() => {
                    UnstallHandle(App.id);
                }}
              className='w-auto h-auto flex flex-row justify-center items-center gap-[10px] px-[35px] text-white font-bold py-[10px] rounded-xl bg-[rgba(0,211,144,1)]'
            >Unistall</button>
            </section>
        </div>
    );
};

export default SingleApp;