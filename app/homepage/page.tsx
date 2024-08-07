import Image from 'next/image'



export default function Home() {
  return (
    <>
      <div className="flex items-center min-h-screen pb-40 px-20" >
        <Image src='/logos.png' alt='Logo' width={445} height={161} className='fixed' />
        <div className="ml-auto flex flex-col items-end space-y-4 px-10 fixed right-20">
          <h1 className=' font-bold text-6xl'>Music for</h1>
          <h1 className="font-normal text-7xl text-custom-green font-hurricane text-stroke" data-text="EVERYONE"></h1>
        </div>
      </div>
    </>
  )
}

