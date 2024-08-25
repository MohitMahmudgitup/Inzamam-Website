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
      setResult("Form Submitted Successfully:)");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
  <main className='text-white flex flex-wrap'>
    <div className='w-[50%] h-[100vh] flex justify-center items-center flex-col px-5'>
      <h1 className="f1 text-[5vw] castom-font">Contact Us</h1>
      <h1 className="text-[3vw] castom-font">I'd Love To Hear From You.</h1>
      <h1 className="f2 text-[1.2vw] castom-font text-center">In case of any queries you can send your queries by following the below details!</h1>
          <h1 className='text-[3vw] castom-font' >{result}</h1>
    </div>
    <div className='w-[50%] flex justify-center items-center '>
        <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value="2c8f0a6d-4379-42ab-b407-9dc76af6a591"/>
        <div className='flex items-center gap-2'>
            <FaAddressCard className='w-3 h-3'/>
            <h1 className='f2 text-sm '>Full Name</h1>
          </div>
          <input className='w-80 outline-none border border-b-1 bg-black h-9 rounded-xl pl-3  ' type="text" name="name" required/>
          <div className='flex items-center gap-2'>
            <MdEmail className='w-3 h-3'/>
            <h1 className='f2 text-sm '>Email</h1>
          </div>     
          <input className='w-80 outline-none border border-b-1 bg-black h-9 rounded-xl pl-3  ' type="email" name="email" required/>
          <div className='flex items-center gap-2'>
            <BsChatRightTextFill className='w-3 h-3' />
            <h1 className='f2 text-sm '>Message</h1>
          </div>
          <textarea className='w-80 py-2 outline-none border border-b-1 bg-black h-28 rounded-xl pl-3  ' name="message" required />
          {/* <button className="border border-1 border-white rounded-lg py-2 hover:bg-zinc-800" >Submit Form</button> */}
          <button class="btn-26" type="submit"><span>Submit Form</span></button>
        </form>
      </div>

  </main>
  )
}

export default ContectUs