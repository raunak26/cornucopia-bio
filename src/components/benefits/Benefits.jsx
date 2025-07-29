import React from "react";
import { motion } from "framer-motion";
import { Bot, Clock, TestTube } from "lucide-react"


const Benefits = () => {
  return (
    <div className="py-20 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl font-bold text-primary mb-4">Faster Drug Discovery</h1>
        <p className="text-gray-700 text-lg">
          Traditional drug discovery is long and complex. You start with ideation, then computational validation, then in vitro, then finally in vivo.
          <br /> What if you could skip the busywork?
        </p>
      </div>
      {/* Timeline: Traditional + Cornucopia */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-xl font-semibold text-center text-primary mb-8">
          Traditional Drug Discovery Takes 10+ Years
        </h3>

        {/* Timeline with Cornucopia */}
        <div className="relative">
          {/* Bar */}
          <div className="w-full h-2 bg-gray-300 rounded-full relative overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "100%" }}
              whileInView={{ width: "6%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <div className="text-left">
              <div className="text-primary font-bold">Cornucopia Workflow</div>
              <div className="mt-1 text-primary text-[11px]">~2 months</div>
            </div>
            <div>Ideation</div>
            <div>In Vitro</div>
            <div>In Vivo</div>
            <div>Clinical Trials</div>
          </div>
        </div>
      </div>




      {/* Why Cornucopia: Bridge Statement */}
      <div className="max-w-3xl mx-auto text-center mt-24 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Why Researchers Choose Cornucopia</h2>
        <p className="text-gray-600 text-md">
          Once you’ve seen the time savings, here’s what actually makes teams switch.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
          <Clock className="w-5 h-5 text-primary mb-2" />
          <h3 className="text-primary font-semibold text-lg mb-2">24/7 Automation</h3>
          <p className="text-sm text-gray-700">
            Run assays on your schedule. Our robotics infrastructure never sleeps — reducing turnaround by 70%.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
          <TestTube className="w-5 h-5 text-primary mb-2" />
          <h3 className="text-primary font-semibold text-lg mb-2">Zero Pipetting Errors</h3>
          <p className="text-sm text-gray-700">
            Manual pipetting is out. We eliminate human fatigue and inconsistency with fully integrated liquid handlers.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
          <Bot className="w-5 h-5 text-primary mb-2" />
          <h3 className="text-primary font-semibold text-lg mb-2">AI-First Experiment Design</h3>
          <p className="text-sm text-gray-700">
            Our agents handle protocol planning, reagent selection, and QC checks — letting you focus on the science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
