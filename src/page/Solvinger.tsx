import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TypingAnimation } from "@/components/magicui/terminal";

const Solvinger = () => {
  return (
    <div className=''>
     <div className="flex min-h-30 items-center justify-center">
      <div
        className={
          'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in  hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        }
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Solvinger <TypingAnimation>2.O</TypingAnimation></span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>
    </div>
    
    <div className='flex justify-center content-center '>
        <div className='' >
            <span className='text-3xl font-black text-gray-600'>What on you mind?</span>
        <div><span className='font-medium'>Now Solvinger can do for you 😊</span></div>
        </div>
    </div>

<div className='hidden lg:block'>

    <div className='flex flex-col lg:flex-row justify-center mt-4'>
      <div className='bg-gray-600 px-4 py-2 m-1 rounded-md border-2 border-gray-800 text-white '>Review Your code</div>
      <div className='bg-gray-600 px-4 py-2 m-1 rounded-md border-2 border-gray-800 text-white '>Solve your bug & error from any language </div>
      <div className='bg-gray-600 px-4 py-2 m-1 rounded-md border-2 border-gray-800 text-white '>Ganreate an Email/Application/Contect</div>
    </div>
    <div className='flex flex-col lg:flex-row  justify-center '>
      <div className='bg-gray-600 px-4 py-2 m-1 rounded-md border-2 border-gray-800 text-white '>Ask Scientific Problems</div>
      <div className='bg-gray-600 px-4 py-2 m-1 rounded-md border-2 border-gray-800 text-white '>Solve Numeric and mathmetical problems</div>
      <div className='bg-gray-600 px-4 py-2 m-1 rounded-md border-2 border-gray-800 text-white '> much more....</div>
    </div>
</div>
{/* <div className='mb-0'>
  <marquee>
    <div className='flex'>

    <div  className='bg-gray-600 px-4 py-2 m-4 rounded-lg'>
      Hello
    </div>
    <div className='bg-gray-600 px-4 py-2 m-4 rounded-lg'>
      Hello
    </div>
    </div>
  </marquee>
</div> */}
    </div>
  )
}

export default Solvinger
