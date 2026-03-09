"use client";

import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "/Month",
      description: "Perfect for casual use - start translating today",
      color: "bg-[#415479]",
      features: ["1 Language Pair", "Basic Phrases", "No Offline Packs"]
    },
    {
      name: "Pro Monthly",
      price: "€7.99",
      period: "/Month",
      description: "Unlock Unlimited Possibilities with Monthly Flexibility",
      color: "bg-[#AA9BD8]",
      features: ["Unlimited Language Pairs", "All Phrase Library", "Offline Packs"]
    },
    {
      name: "Pro Annual",
      price: "€59.99",
      period: "/Year",
      description: "Save More With The Best Value - Go Annual",
      color: "bg-[#7D778E]",
      features: ["Same As Monthly", "≈37–38% Cheaper Vs Monthly", "Optional 7-Days Trial"]
    }
  ];

  return (
    <div className="relative pb-14">
      <br />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center py-6 space-y-4"
      >
        <motion.h1 
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold font-lato leading-normal text-white"
        >
          Choose The Right Plan For You
        </motion.h1>
        <motion.p 
          animate={{ y: [0, -6, 0] }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
          className="font-roboto text-center text-lg lg:text-2xl text-white"
        >
          Flexible plans to match your needs.
        </motion.p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-12 max-w-[1440px] w-11/12 mx-auto py-12 lg:py-20">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            animate={{ 
              y: [0, -12, 0],
            }}
            whileHover={{ scale: 1.05, y: -20 }}
            style={{
              animationDelay: `${index * 0.3}s`
            }}
            className={`${plan.color} rounded-[20px] text-white py-8 md:py-12 px-5 lg:px-6 md:-mr-4 z-0 w-[350px] md:w-[384px] cursor-pointer`}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 3.5 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            >
              <p className="text-base md:text-lg lg:text-[25px] font-medium tracking-tight mb-4">
                {plan.name}
              </p>
              <div className="flex items-center gap-2.5 relative">
                <h1 className="font-bold text-2xl md:text-4xl lg:text-[50px] font-poppins text-[#FDF6E3]">
                  {plan.price}
                  <span className="text-xs md:text-sm text-white">{plan.period}</span>
                </h1>
              </div>
              <br />
              <br />
              <div>
                <p>{plan.description}</p>
              </div>
              <br />
              <br />
              <ul className="font-poppins space-y-3 px-4">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                    animate={{ x: [0, -5, 0] }}
                    style={{
                      animationDelay: `${idx * 0.2}s`
                    }}
                    className="flex flex-row gap-3 items-center"
                  >
                    <span>
                      <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
                    </span>
                    <span className="text-sm md:text-base tracking-wider">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
