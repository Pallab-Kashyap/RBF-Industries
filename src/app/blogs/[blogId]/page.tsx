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

const page = async ({ params }: { params: { blogId: string } }) => {
  const blogId = params.blogId;

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
      content: `<h1 >Introduction</h1>
        <p>
            In the quest for sustainable energy solutions, biomass briquettes have emerged as a promising alternative to traditional fossil fuels. These compacted blocks of organic waste material offer a renewable and environmentally friendly fuel source, making them a key player in the transition towards a greener future<sup>1</sup>.
        </p>

        <h2>The Process</h2>
        <p>
            Biomass briquettes are produced by compacting various loose biomass sources, such as rice husk, groundnut shell, sawdust, cashew shells, coffee husk, coir pith, cotton stalks, wood waste, peanut husk, bagasse, and municipal wastes. The specific composition of biomass briquettes varies depending on the raw material availability in a particular geographical area<sup>2</sup>.
        </p>

        <h2>Environmental Benefits</h2>
        <p>
            The utilization of bio briquettes offers several environmental advantages over traditional fuels. They are considered a carbon-neutral fuel since they utilize organic waste materials that would otherwise decompose and emit greenhouse gases (GHGs) like methane<sup>1</sup>. By converting this waste into a usable fuel source, bio briquettes help mitigate GHG emissions and combat climate change. Additionally, they help preserve valuable forest ecosystems and biodiversity by minimizing the impact on deforestation<sup>1</sup>.
        </p>

        <h2>Applications</h2>
        <p>
            Biomass briquettes can be used for heating, cooking, and energy production. They provide an effective solution for managing agricultural waste and other organic residues, preventing their burning which causes further pollution<sup>1</sup>. By converting these materials into a valuable energy resource, bio briquettes address the challenge of waste disposal while simultaneously reducing reliance on non-renewable energy sources.
        </p>

        <h2>Conclusion</h2>
        <p>
            Bio briquettes represent a sustainable and eco-friendly alternative to conventional fossil fuels. Their production and utilization not only contribute to environmental conservation but also support the global effort towards a greener future<sup>1</sup>.
        </p>

        <h2>References</h2>
        <ul>
            <li><a href="#">"From Trash to Treasure: The Journey of Biomass Briquettes from Bio-waste to Biofuel." My Waste Solution Blog.</a></li>
            <li><a href="#">"Insight into the Biomass-Based Briquette Generation from Agro-Residues: Challenges, Perspectives, and Innovations." BioEnergy Research.</a></li>
            <li><a href="#">"Potential of Bio Briquettes: A Sustainable Fuel for a Greener Future." EKI Energy Services Limited.</a></li>
            <li><a href="#">"Biomass Briquettes as an Alternative Fuel: A Comprehensive Review." Manipal Researcher.</a></li>
        </ul>`,
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
          <div
            dangerouslySetInnerHTML={{
              __html: blogList[blogNumber].content || "",
            }}
          />
          {/* {blogList[blogNumber].content} */}
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
