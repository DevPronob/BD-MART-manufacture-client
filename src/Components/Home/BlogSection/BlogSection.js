import React from 'react'
import img1 from '../../../images/blog_post1.jpg'
import img2 from '../../../images/blog_post5.jpg'
import img3 from '../../../images/zante-in-pictures-1170x650.jpg'
const BlogSection = () => {
  return (
    <div className=''>
      <section class="py-10">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">Recent Posts</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src={img1} />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Nature</p>
          <p class="mb-2 text-xl font-medium text-gray-800">A Visit to Mount Abignale</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src={img2} />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Gardening</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Sunflowers are my favorite</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>
    
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <a href="#" class="block h-full w-full">
        <img class="max-h-40 w-full object-cover" alt="featured image" src={img3} />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">Coding</p>
          <p class="mb-2 text-xl font-medium text-gray-800">Getting to know the Ice Factory Pattern</p>
          <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#icefactory</div>
          </div>
        </div>
      </a>
    </article>
  </div>
</section>

    </div>
  )
}

export default BlogSection
