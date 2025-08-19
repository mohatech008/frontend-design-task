'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const NotificationsPanel = () => {
    const [active, setActive] = useState(0)
    const [activebtn, setActivebtn] = useState(1)
    const notifications =[
        {
            title: "Courses Completed",
            number: "11"
        },
        {
            title: "Total Enrolled",
            number: "25"
        },
        {
            title: "Certificates Earned",
            number: "09"
        },
        {
            title: "Active Subs",
            number: "33"
        }
    ] 
  return (
    <div className='bg-[#FFFFFF66] w-full pt-8'>

      <div className='flex ml-66'>
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_73_1613)"><path d="M9.99956 25.8532C10.4195 25.8436 10.8225 25.6857 11.1373 25.4075C11.4521 25.1294 11.6583 24.7488 11.7196 24.3333H8.21289C8.27587 24.7601 8.49177 25.1496 8.82043 25.4292C9.14908 25.7088 9.56811 25.8595 9.99956 25.8532Z" fill="#909090"/><path d="M19.6732 21.5534C19.0303 20.9802 18.4675 20.3232 17.9999 19.6C17.4894 18.6017 17.1834 17.5115 17.0999 16.3934V13.1C17.0972 12.7 17.0615 12.3009 16.9932 11.9067C16.4685 11.8018 15.9642 11.6127 15.4999 11.3467C15.6769 11.9166 15.7668 12.5099 15.7665 13.1067V16.4C15.8482 17.764 16.2235 19.0943 16.8665 20.3C17.3268 21.0294 17.8729 21.7008 18.4932 22.3H1.41987C2.04014 21.7008 2.58627 21.0294 3.04654 20.3C3.68961 19.0943 4.06482 17.764 4.14654 16.4V13.1C4.14303 12.3285 4.29174 11.5638 4.58416 10.8498C4.87659 10.1358 5.30697 9.48655 5.85068 8.93913C6.39439 8.3917 7.04074 7.9569 7.75272 7.65963C8.4647 7.36235 9.22832 7.20843 9.99987 7.20668C11.129 7.20759 12.2329 7.54152 13.1732 8.16668C13.0695 7.78601 13.0114 7.39439 12.9999 7.00002V6.58002C12.3038 6.23759 11.556 6.01234 10.7865 5.91335V5.07335C10.7865 4.83731 10.6928 4.61093 10.5259 4.44402C10.359 4.27712 10.1326 4.18335 9.89654 4.18335C9.66049 4.18335 9.43412 4.27712 9.26721 4.44402C9.1003 4.61093 9.00654 4.83731 9.00654 5.07335V5.94668C7.28368 6.18972 5.70692 7.04785 4.56735 8.36264C3.42778 9.67743 2.80236 11.3601 2.80654 13.1V16.3934C2.72304 17.5115 2.41705 18.6017 1.90654 19.6C1.44712 20.3216 0.893333 20.9785 0.25987 21.5534C0.188757 21.6158 0.131764 21.6927 0.0926814 21.7789C0.0535988 21.8652 0.033323 21.9587 0.0332031 22.0534V22.96C0.0332031 23.1368 0.103441 23.3064 0.228465 23.4314C0.353489 23.5564 0.523059 23.6267 0.69987 23.6267H19.2332C19.41 23.6267 19.5796 23.5564 19.7046 23.4314C19.8296 23.3064 19.8999 23.1368 19.8999 22.96V22.0534C19.8997 21.9587 19.8795 21.8652 19.8404 21.7789C19.8013 21.6927 19.7443 21.6158 19.6732 21.5534Z" fill="#909090"/>
            <path d="M20 10C22.7614 10 25 7.76142 25 5C25 2.23858 22.7614 0 20 0C17.2386 0 15 2.23858 15 5C15 7.76142 17.2386 10 20 10Z" fill="#EB5757"/></g><defs><clipPath id="clip0_73_1613"><rect width="25" height="26" fill="white"/> </clipPath></defs>
        </svg>
      </div>
      {/* -- cards -- */}
      <div className='grid grid-cols-2 mt-2 gap-5 px-5'>
        {notifications.map((notification, index) => (
            <div key={index} className='bg-[#e4eef8] px-5 py-3 rounded-2xl w-[150px] h-[24vh]'>
                <h1 className='text-[21px] font-medium text-[#8EA3B7]'>{notification.title}</h1>
                <div className='flex items-center mt-5'>
                    <span className='bg-[#369FFF] w-1 h-7 rounded-xl '></span>
                    <p className='font-bold text-lg ml-auto text-[#006ED3]'>{notification.number}</p>
                </div>
            </div>
        ))}
      </div>

      {/* -- notifications -- */}
      <div className='bg-[#F2F2F2] mx-5 mt-10 rounded-xl py-1 px-4'>
        <button onClick={() => setActive(0)} className={`px-5 py-2 ${active == 0 ? 'bg-black text-white rounded-xl' : 'text-[#0A0A1F]'}`}>Notification</button>
        <button onClick={() => setActive(1)} className={`px-5 py-2 ${active == 1 ? 'bg-black text-white rounded-xl' : 'text-[#0A0A1F]'}`}>Team Community</button>
      </div>
      {/*community invitation*/}
      <div className='flex px-5 mt-7'>
     {/*community invitation first column*/}
     <div className='mt-2'>
         <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1123 11.4569C6.29098 9.98809 7.506 7.05054 10.9366 7.05054C14.3673 7.05054 15.5823 9.98809 15.761 11.4569" stroke="#C248AD" stroke-width="1.3" stroke-linecap="round"/><ellipse cx="10.9366" cy="2.77018" rx="1.92974" ry="2.01432" stroke="#C248AD" stroke-width="1.3"/><path d="M1.28809 7.89201C1.4058 6.92434 2.20629 4.98901 4.46648 4.98901C6.11243 4.98901 7.07729 6.38124 7.07729 6.38124" stroke="#C248AD" stroke-width="1.2" stroke-linecap="round"/><path d="M4.52344 0.883057C5.10498 0.883057 5.61328 1.38179 5.61328 2.04224C5.61311 2.70252 5.10489 3.20044 4.52344 3.20044C3.94212 3.20025 3.43474 2.7024 3.43457 2.04224C3.43457 1.38191 3.94203 0.883244 4.52344 0.883057Z" stroke="#C248AD"/></svg>
     </div>
  {/*community invitation second column*/}
    <div className='flex flex-col ml-5'>
        <div className='flex items-center gap-6' >
            <h1 className='text-[#0A0A1F] text-lg'>Community Invitation</h1>
            <p className='text-[#00000080] text-sm'>1 Hour Ago</p>
        </div>
        <p className='text-gray-400 text-[15px] mt-1'><span className='font-medium text-[#0A0A1F]'>Kinsi Ali</span> Invited you to join her community</p>
        <div className='bg-[#ebebec] rounded-lg mt-3'>
         <button onClick={() => setActivebtn(0)} className={`px-11 py-2 ${activebtn == 0 ? 'bg-[#172B85] text-white rounded-xl' : 'text-[#0A0A1F]'}`}>Decline</button>
        <button onClick={() => setActivebtn(1)} className={`px-11 py-2 ${activebtn == 1 ? 'bg-[#172B85] text-white rounded-xl' : 'text-[#0A0A1F]'}`}>Accept</button>
        </div>
        </div>

    </div>

    {/* --- Second community option --- */}
    <div className='flex mt-10 px-5'>
        <div className='mt-2'>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.1" width="38" height="38" rx="8" fill="#559BED"/><rect x="12.333" y="11.5" width="12.5" height="15" rx="2" stroke="#559BED" stroke-width="1.2"/><line x1="15.433" y1="15.0667" x2="18.3997" y2="15.0667" stroke="#559BED" stroke-width="1.2" stroke-linecap="round"/><line x1="15.433" y1="18.4" x2="20.0663" y2="18.4" stroke="#559BED" stroke-width="1.2" stroke-linecap="round"/><line x1="15.433" y1="21.7333" x2="21.733" y2="21.7333" stroke="#559BED" stroke-width="1.2" stroke-linecap="round"/></svg>
        </div>
    {/*community invitation second column*/}
        <div className='flex flex-col ml-2'>
            <div className='flex items-center gap-6' >
                <h1 className='text-[#0A0A1F] text-lg'>Community Invitation</h1>
                <p className='text-[#00000080] text-sm'>1 Hour Ago</p>
            </div>
            <p className='text-gray-400 text-[15px] mt-1'><span className='font-medium text-[#0A0A1F]'>Kinsi Ali </span>Invited you to join her community</p>
        </div>
    </div>    

    {/* --- Third community option --- */}
    <div className='flex mt-5 px-5'>
        <div className='mt-2 '>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.1" width="38" height="38" rx="8" fill="#ADC9ED"/><rect x="12.333" y="11.5" width="12.5" height="15" rx="2" stroke="#ADC9ED" stroke-width="1.2"/><line x1="15.433" y1="15.0667" x2="18.3997" y2="15.0667" stroke="#ADC9ED" stroke-width="1.2" stroke-linecap="round"/><line x1="15.433" y1="18.4" x2="20.0663" y2="18.4" stroke="#ADC9ED" stroke-width="1.2" stroke-linecap="round"/><line x1="15.433" y1="21.7333" x2="21.733" y2="21.7333" stroke="#ADC9ED" stroke-width="1.2" stroke-linecap="round"/></svg>
        </div>
    {/*community invitation second column*/}
        <div className='flex flex-col ml-2'>
            <div className='flex items-center gap-6' >
                <h1 className='text-[#0A0A1F] text-lg'>Community Invitation</h1>
                <p className='text-[#00000080] text-sm'>1 Hour Ago</p>
            </div>
            <p className='text-gray-400 text-[15px] mt-1'><span className='font-medium text-[#0A0A1F]'>Kinsi Ali </span>Invited you to join her community</p>
        </div>
    </div>
    <div className=' mt-4 ml-10 py-5'>
    <Image src="/notification-illustration.png" alt="notification-illustration" width={300} height={180}/> 
    </div> 

    </div>
  )
}

export default NotificationsPanel
