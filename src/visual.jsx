import React from 'react'
import first from './data/first.png'
import second from './data/second.png'
import third from './data/third.png'
import fourth from './data/fourth.png'
import fith from './data/5.png'
import sixth from './data/6.png'

function Visual() {
  return (
    <div className="container mx-auto p-5 bg-[#F0F8FF]">
     
      <h1 className="text-xl  text-center mb-4 text-blue-500 font-bold">FINDINGS FROM FETAL HEALTH DATASET</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex justify-center">
          <img src={first} alt="Chart 1" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center">
          <img src={second} alt="Chart 2" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center">
          <img src={third} alt="Chart 3" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center">
          <img src={fourth} alt="Chart 4" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center">
          <img src={fith} alt="Chart 5" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center">
          <img src={sixth} alt="Chart 6" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default Visual
