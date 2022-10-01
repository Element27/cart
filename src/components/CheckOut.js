import React from 'react'

function CheckOut() {
  let texts = `w-[80%] flex justify-between items-center mx-auto mb-3 text-xl`

  return (
    <div className='pt-16 border-t lg:w-3/12 lg:border-0  bg-white lg:ml-2 lg:p-4 h-fit'>
      <div className={texts}>
        <h3 className=''>SubTotal</h3>
        <p className=''>$: <span>16:2</span></p>
      </div>

      <div className={texts}>
        <h3>Deliver</h3>
        <p>$: <span>8:98</span></p>
      </div>

      <div className={texts}>
        <h3 className='font-bold text-xl'>Total</h3>
        <p className='font-bold text-[#E91010] text-xl'>$: <span>25:00</span></p>
      </div>

      <button className='w-full text-white mt-4 py-4 text-lg font-bold rounded-md bg-[#0D8D39] hover:filter hover:brightness-90 border-0 outline-none'>Check Out</button>
    </div>
  )
}

export default CheckOut