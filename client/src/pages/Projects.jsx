import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold border-b border-gray-500 p-3'>Projects</h1>
      <p className='text-md text-gray-500'>Embark on a journey of innovation and collaboration with Kologic. Dive into a realm where ideas flourish and projects come to life. Connect with us to explore a multitude of captivating ventures that transcend boundaries and redefine possibilities. From groundbreaking technological marvels to awe-inspiring creative endeavors, Kologic offers a platform where imagination knows no limits. Join hands with our team of visionaries and let's embark on a voyage of discovery together. With Kologic, every project is an opportunity to shape the future. Let's create magic, one project at a time</p>
      <CallToAction />
    </div>
  )
}