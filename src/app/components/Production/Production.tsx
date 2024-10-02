
import React from 'react'
import ProductoinCards from './ProductoinCards';

interface Step {
  title: string,
  description: string,
  image: string,
  stepNo: number,
}
function Production() {


  const steps: Step[] = [
    {
      title: "Obtaining Raw Material",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 4,
    },
    {
      title: "Production",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 3,
    },
    {
      title: "Production",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 2,
    },
    {
      title: "Production",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 1,
    },
  ]

  return (
    <div className="flex flex-col px-4 sm:px-12 min-h-screen relative">

      <div className="blogs-heading py-6">
        <h2 className="text-3xl font-medium">Production Process</h2>
      </div>

      <div className="w-full max-w-6xl relative py-6">
        {steps.map((step) => (
          <ProductoinCards key={step.stepNo} prop={step}/>
        ))}
      </div>
    
    </div>
  )
}

export default Production