import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Img from '/src/assets/icon-downloads.png';
import AvgRating from '/src/assets/icon-ratings.png';
import reviewsIcon from '/src/assets/icon-review.png';
import Charts from './Charts/Charts';

const AppDetails = () => {
  const app = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;
    const storedIds = JSON.parse(localStorage.getItem("appIds")) || [];
    setIsInstalled(storedIds.includes(app.id));
  }, [app]);

  const InstallHandle = () => {
    if (!app?.id) return;
    const storedIds = JSON.parse(localStorage.getItem("appIds")) || [];
    if (!storedIds.includes(app.id)) {
      storedIds.push(app.id);
      localStorage.setItem("appIds", JSON.stringify(storedIds));
      setIsInstalled(true);
    }
  };

  if (!app) return <div>Loading...</div>;

  return (
    <div className='bg-gray-100 min-h-screen py-10 px-8 lg:py-20 lg:px-40 flex flex-col gap-5'>
      <section className='flex flex-col lg:flex-row justify-start items-start gap-10'>
        <div>
          <img src={app.image} alt={app.title} className='w-72 rounded-3xl' />
        </div>
        <div className='flex flex-col justify-center items-start gap-3'>
          <h2 className='font-bold text-2xl lg:text-6xl'>{app.title}</h2>
          <h2>
            Developed By{' '}
            <span className='text-transparent bg-clip-text bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] font-bold'>
              {app.companyName}
            </span>
          </h2>
          <div className='flex lg:flex-row flex-col gap-8'>
            <section className='flex flex-col justify-start gap-2'>
              <img src={Img} alt="Download" className='w-[40px]'/>
              <h2>Downloads</h2>
              <p className='font-bold text-4xl'>{app.downloads/10000}M</p>
            </section>
            <section className='flex flex-col justify-start gap-2'>
              <img src={AvgRating} alt="Average Ratings" className='w-[40px]'/>
              <h2>Average Ratings</h2>
              <p className='font-bold text-4xl'>{app.ratingAvg}</p>
            </section>
            <section className='flex flex-col justify-start gap-2'>
              <img src={reviewsIcon} alt="Total Reviews" className='w-[40px]'/>
              <h2>Total Reviews</h2>
              <p className='font-bold text-4xl'>{app.reviews}</p>
            </section>
          </div>
          {!isInstalled && (
            <button
              onClick={InstallHandle}
              className='w-auto h-auto flex flex-row justify-center items-center gap-[10px] px-[35px] text-white font-bold py-[14px] rounded-[4px] bg-[rgba(0,211,144,1)]'
            >
              Install Now ({app.size} MB)
            </button>
          )}
          {isInstalled && (
            <button
              disabled
              className='w-auto h-auto flex flex-row justify-center items-center gap-[10px] px-[35px] text-white font-bold py-[14px] rounded-[4px] bg-[rgba(0,211,144,1)]'
            >
              Installed ({app.size} MB)
            </button>
          )}
        </div>
      </section>
      <section>
        <h2 className='text-[rgba(0,25,49,1)] font-inter text-[24px] font-semibold leading-[32px] tracking-[0%] text-left'>
          Ratings
        </h2>
        <Charts ratings={app.ratings} />
      </section>
      <section>
        <h2 className='text-[rgba(0,25,49,1)] font-inter text-[24px] font-semibold leading-[32px] tracking-[0%] text-left'>
          Descriptions
        </h2>
        <p className='text-[rgba(0,25,49,1)] font-inter leading-[32px] tracking-[0%] text-justify'>
          {app.description}
        </p>
      </section>
    </div>
  );
};

export default AppDetails;
