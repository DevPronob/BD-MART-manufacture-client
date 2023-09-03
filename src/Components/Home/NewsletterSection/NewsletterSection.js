import React from 'react'

const NewsletterSection = () => {
  return (
    <div className='py-8'>
      <div class="mx-auto my-10 max-w-screen-xl rounded-3xl border border-gray-600 px-4 py-10">
  <h2 class="text-center text-4xl font-bold sm:text-5xl">Get our Offers</h2>
  <p class="mt-8 text-center text-3xl font-light">Available in PDF, ePub & mobi</p>
  <div class="mx-auto mt-8 flex max-w-2xl flex-col border-gray-600 bg-white sm:flex-row sm:rounded-full sm:border">
    <input class="m-2 h-12 rounded-full px-4 text-gray-500 ring ring-red-400 sm:w-full sm:ring-0 focus:outline-none focus:ring" placeholder="Enter your email" type="email" name="email" />
    <button class="shrink-0 m-2 rounded-full bg-red-600 px-8 py-3 font-medium text-white focus:bg-red-700 focus:outline-none hover:bg-red-700">Get Now</button>
  </div>

  <div class="mt-8 flex justify-center">
    <label class="mb-4 flex items-center text-gray-700" for="">
      <input class="accent-blue-700 mr-3 h-5 w-5" type="checkbox" name="" />
      <span>I agree to MixBake's <a class="font-medium text-blue-500" href="">Privacy Policy</a> and <a class="font-medium text-blue-500" href="">Terms of Use</a></span>
    </label>
  </div>
</div>

    </div>
  )
}

export default NewsletterSection
