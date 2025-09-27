import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

const [method, setMethod] = useState('cod');
const navigate = useNavigate();


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        {/* Left Side */}
        <div className=' flex flex-col gap-4 sm:max-w-[480px]'>

          <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

            <div className='text-xl sm:text-2xl my-3'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
            </div>
            <div className='flex gap-3'>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
            </div>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address'/>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
            <div className='flex gap-3'>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Postal code'/>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
            </div>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number'/>
          </div>
        </div>

        {/* Right Side */}
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* Payment Methods */}
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={() => setMethod('stripe')} className='flex items-center justify-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''} ${method === 'stripe' ? 'bg-green-400' : '' } `}></p>
                <img className='h-5' src={assets.stripe_logo} alt="Stripe" />
              </div>
              <div onClick={() => setMethod('razorpay')} className='flex items-center justify-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''} ${method === 'razorpay' ? 'bg-green-400' : '' } `}></p>
                <img className='h-5' src={assets.razorpay_logo} alt="Razorpay" />
              </div>
              <div onClick={() => setMethod('cod')} className='flex items-center justify-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''} ${method === 'cod' ?  'bg-green-400' : ''} `}></p>
                <p className='text-gray-500 text-sm font-medium'>CASH ON DELIVERY</p>
              </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white py-2 px-6'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder