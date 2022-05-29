import React from "react";

const Contact = () => {
  return (
    <div className='bg-black px-10 py-14 '>
      <div className='text-center pb-14  text-orange-500'>
       
        <h1 className='text-5xl '>Contact With Us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5 bg-gradient-to-r from-orange-500 to-orange-500 py-10'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Contact;