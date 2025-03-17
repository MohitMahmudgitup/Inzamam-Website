import React from 'react'
import "../../App.css"
import "./ContectUs.css"
import { BsChatRightTextFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

function ContectUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2c8f0a6d-4379-42ab-b407-9dc76af6a591");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully🥰");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
  <main className='text-white  castom-contect contectbg'>
    <div className='castom-contect-left  h-[100vh] flex justify-center items-center flex-col  px-5'>
      <h1 className="f1 text-[20vw] fixed">Contact Us</h1>
          
    </div>
    <div className='castom-contect-right gap-6 sm:gap-0  w-[100%] h-[100vh] p-20 flex mt-96 sm:mt-0 sm:flex-row flex-col-reverse mt- items-center justify-between   '>
      <div className=' bg-amber-300 flex flex-col justify-center items-center p-7 w-[100vw] sm:w-[50%] h-96 rounded-3xl z-10'> 
      {
        result ?(
<h2 className='text-[3vw] f2 text-gray-500' >{result}</h2>
        ):(<>
        <p className="   f4 bottom-10 text-4xl text-indigo-600 font-bold ">I'd Love To Hear From You.</p>
        <h2 className="text-xl f4 bottom-20   text-center ">In case of any queries you can send your queries by following the below details!</h2>
        </>
          
        )
      }
      </div>
        <form className='flex  flex-col gap-4 bg-green-400 p-3 sm:p-8 z-10 ' onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value="2c8f0a6d-4379-42ab-b407-9dc76af6a591"/>
        <div className='flex items-center gap-2'>
            {/* <FaAddressCard className='w-3 h-3'/> */}
            {/* <h1 className='f4 text-sm '>Full Name</h1> */}
          </div>
          <input className='w-96 h-16  outline-none bg-blue-100  text-black pl-3 text-xl  ' type="text" name="name" required placeholder='Full Name'/>
          <div className='flex items-center gap-2'>
            {/* <MdEmail className='w-3 h-3'/> */}
            {/* <h1 className='f4 text-sm '>Email</h1> */}
          </div>     
          <input className='w-96 h-16  outline-none bg-blue-100  text-black  pl-3 text-xl  ' type="email" name="email" required placeholder='Email'/>
          <div className='flex items-center gap-2'>
            {/* <BsChatRightTextFill className='w-3 h-3' /> */}
            {/* <h1 className='f4 text-sm '>Message</h1> */}
          </div>
          <textarea className='w-96 h-40 bg-blue-100 text-black  py-2 outline-none     pl-3  text-xl ' name="message" required placeholder='Massage'/>
          <button class="btn-26 z-20" type="submit"><span>Submit Form</span></button>
        </form>
      </div>

  </main>
  )
}

export default ContectUs