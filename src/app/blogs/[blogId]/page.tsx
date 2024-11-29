import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  blogImg1,
  blogImg2,
  blogImg3,
  blogImg4,
  blogImg5,
  blogImg6,
} from "../../../../public/assets/blogImg";

import { Blog } from "../../components/Blogs/Blogs";

const page = ({ params }: { params: { blogId: string } }) => {

  const blogId = params.blogId

  const blogNumber = blogId ? Number(blogId) : NaN;

  const blogList: Blog[] = [
    {
      img: blogImg1,
      title: "What Are Biomass Briquettes",
      description:
        "Biomass briquettes are cylindrical blocks made from organic materials like agricultural residue, forestry waste, or organic industrial by-products.",
      content: `Biomass briquettes are cylindrical blocks made from organic materials like agricultural residue, forestry waste, or organic industrial by-products. They are manufactured by compressing these materials at high pressure to create a dense, compact fuel source. Unlike coal, petroleum, and natural gas, biomass briquettes are renewable and produce fewer greenhouse gases, making them a sustainable alternative for heating and energy generation.
    
    These briquettes can be created using a variety of organic waste materials, including:
    
    - **Agricultural Residues:** Rice husk, coffee husk, groundnut shells, corn cobs, wheat straw, sugarcane bagasse, cotton husk etc.
    - **Forestry Waste:** Sawdust, bark, leaves, twigs, etc.
    - **Industrial Organic Waste:** Paper sludge, certain types of biomass from pulp mills, and organic industrial by-products.
    
    **The Briquetting Process**
    
    The production of biomass briquettes involves several stages:
    
    1. **Collection of Biomass Material:** The raw materials for briquetting, such as agricultural waste or forestry waste, are collected. These materials are generally dry but may undergo further drying if needed.
    2. **Drying:** Moisture content in the raw materials is reduced to an optimum level, usually below 10%, as excess moisture can impede combustion and reduce briquette quality.
    3. **Compression:** The prepared biomass is fed into a briquetting machine where it is compressed under high pressure. This compression generates heat, which helps to bind the particles without the need for additional binding agents. The result is a compact briquette that retains its shape.
    4. **Cooling and Packaging:** The briquettes are allowed to cool, then they are packaged for storage and transportation. Cooling prevents them from deforming during handling.
    
    ---
    
    **Benefits of Biomass Briquettes**
    
    Biomass briquettes offer several advantages over conventional fossil fuels and even other renewable energy sources:
    
    1. **Environmental Benefits**
    - **Reduced Carbon Emissions:** Biomass briquettes are carbon-neutral, meaning they emit only the amount of carbon dioxide that the plants absorbed during their growth, which drastically reduces net greenhouse gas emissions.
    - **Reduced Deforestation:** By using agricultural residue and forestry waste, biomass briquettes reduce the need for logging and other deforestation activities.
    - **Waste Utilization:** Briquettes help repurpose agricultural and industrial waste, reducing landfill use and pollution. They provide an avenue for waste material, which would otherwise contribute to environmental degradation, to be put to productive use.
    1. **Economic Benefits**
    - **Cost-Effective Fuel Source:** The raw materials for briquetting, such as agricultural and forestry waste, are often low-cost , making briquettes an economically viable fuel alternative.
    - **Job Creation:** The biomass briquette industry offers employment opportunities at various stages of the supply chain, from raw material collection and transportation to processing and distribution.
    1. **Energy Efficiency**
    - **High Energy Density:** Biomass briquettes offer higher energy density than raw biomass, making them more efficient as a fuel source.
    - **Longer Burning Time:** The compressed nature of briquettes results in a slower and more controlled burn, providing a consistent energy output.
    1. **Ease of Use and Transportation**
    - **Uniform Shape and Size:** The compact and consistent form of briquettes makes them easy to store and transport compared to loose biomass.
    - **Reduced Transportation Costs:** The dense nature of briquettes allows for more energy to be transported per load, decreasing the cost of transportation.`,
    },
    {
      img: blogImg2,
      title: `Fueling India's Green Future`,
      description: `India, a nation grappling with energy security and environmental concerns, is increasingly turning towards sustainable alternatives. One such promising solution is biomass briquettes, a clean and efficient fuel source derived from agricultural residues. The Indian government has recognized the potential of biomass briquettes and has implemented several policies to promote their adoption.`,
      content: `India, a nation grappling with energy security and environmental concerns, is increasingly turning towards sustainable alternatives. One such promising solution is biomass briquettes, a clean and efficient fuel source derived from agricultural residues. The Indian government has recognized the potential of biomass briquettes and has implemented several policies to promote their adoption.
    
    **Understanding Biomass Briquettes**
    
    Biomass briquettes are compressed blocks of agricultural waste, such as rice husks, sugarcane bagasse, and wood shavings. They offer several advantages over traditional fuels like firewood and coal:
    
    - **Cleaner Combustion:** Biomass briquettes burn more cleanly, reducing harmful emissions like particulate matter and carbon monoxide.
    - **Higher Energy Density:** They have a higher energy density compared to traditional fuels, making them more efficient.
    - **Sustainable Fuel Source:** By utilizing agricultural waste, biomass briquettes promote sustainable waste management and reduce deforestation.
    - **Affordable Alternative:** They are often more affordable than conventional fuels, making them accessible to rural households.
    
    **Government Initiatives Supporting Biomass Briquette Adoption**
    
    The Indian government has taken significant steps to promote the production and utilization of biomass briquettes:
    
    1. **Ministry of New and Renewable Energy (MNRE) Programs:**
        - **National Bioenergy Programme:** This program aims to promote the use of biomass for energy generation, including biomass briquettes. It provides financial incentives and technical support to businesses and individuals involved in biomass production and utilization.
        - **Biomass Programme:** This program specifically targets the production of briquettes and pellets, offering financial assistance for setting up manufacturing plants.
    2. **State-Level Policies:**
        - Many Indian states, particularly those with significant agricultural production, have implemented their own policies to encourage the use of biomass briquettes. These policies may include subsidies, tax breaks, and awareness campaigns.
    3. **Clean Cooking Initiatives:**
        - Programs like the Pradhan Mantri Ujjwala Yojana aim to provide clean cooking fuel to rural households. Biomass briquettes can be a viable option for these households, reducing their reliance on polluting fuels like firewood and kerosene.
    
    **Challenges and Future Prospects**
    
    Despite these government initiatives, the widespread adoption of biomass briquettes still faces several challenges:
    
    - **Lack of Awareness:** Many people, especially in rural areas, are unaware of the benefits of biomass briquettes.
    - **Technical Challenges:** The quality and efficiency of briquette production and utilization need to be improved.
    - **Supply Chain Issues:** A reliable and efficient supply chain for biomass feedstock is crucial.
    
    To address these challenges, further government support, technological advancements, and public awareness campaigns are essential. By overcoming these hurdles, India can unlock the full potential of biomass briquettes and contribute to a cleaner and more sustainable future.
    
    **References:**
    
    - Ministry of New and Renewable Energy, Government of India: https://mnre.gov.in/
    - National Bioenergy Programme: https://mnre.gov.in/bio-mass/
    - Biomass Programme: https://mnre.gov.in/bio-mass/
    
    By promoting the use of biomass briquettes, India can reduce its dependence on fossil fuels, improve air quality, and empower rural communities. This sustainable solution offers a promising pathway towards a greener and more prosperous future`,
    },
    {
      img: blogImg3,
      title: "",
      description: "",
      content: "",
    },
    {
      img: blogImg4,
      title: "",
      description: "",
      content: "",
    },
    {
      img: blogImg5,
      title: "",
      description: "",
      content: "",
    },
    {
      img: blogImg6,
      title: "",
      description: "",
      content: "",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-24">
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center ">
          {blogList[blogNumber].title}
        </h1>

        <div className="relative w-full h-64 md:h-96 mb-8">
          <Image
            src={blogList[blogNumber].img}
            alt="Technology landscape"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            {blogList[blogNumber].content}
          </p>
        </div>
      </article>

      <p className="mt-10 text-center text-lg font-semibold">
        For more blogs{" "}
        <Link href="/#blogs" className="text-blue-600">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default page;
