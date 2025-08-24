"use client";
import { useState } from "react";
import Image from "next/image";
import { CometCard } from "@/app/components/ui/comet-card";

const certificates = [
  {
    id: 1,
    name: "Cloud Practitioner",
    company: "AWS",
    image: "/certify/html.jpeg",
  },
  {
    id: 2,
    name: "TCS iON Career Edge-Young Professional",
    company: "TCS",
    image: "/certify/tcs.jpeg",
  },
  {
    id: 3,
    name: "Build a Full Stack Website using WordPress",
    company: "Coursera",
    image: "/certify/wordpress.jpeg",
  },
  {
    id: 4,
    name: "Prompt Engineering for Everyone",
    company: "Cognitive Class.ai and IBMSkillsNetwork",
    image: "/certify/promptEngg.jpeg",
  },
  {
    id: 5,
    name: "Intermediate R programming",
    company: "DataCamp",
    image: "/certify/R.png",
  },
  {
    id: 6,
    name: "CSS (Basic)",
    company: "HackerRank",
    image: "/certify/css.jpeg",
  },
  {
    id: 7,
    name: "Data Structure & Algorithms in Java for Intermediate Level",
    company: "Great Learning Academy",
    image: "/certify/DSA.jpeg",
  },
  {
    id: 8,
    name: "Postman API Fundamentals Student Expert",
    company: "Postman",
    image: "/certify/API.jpeg",
  },
  {
    id: 9,
    name: "Software Engg Lite Job Simulation",
    company: "JPMorgan Chase & Co.",
    image: "/certify/jobStimul.jpeg",
  },
  {
    id: 10,
    name: "HTML & CSS thingQbator Program",
    company: "Nasscom Foundation",
    image: "/certify/html.jpeg",
  },
  {
    id: 11,
    name: "Web Development Internship",
    company: "Zidio development",
    image: "/certify/zidio.jpeg",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="px-6 py-12 md:px-12 lg:px-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-10">
        My Certificates
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <CometCard
            key={cert.id}
            className="w-full cursor-pointer"
          >
            <div
              className="flex w-full flex-col items-stretch rounded-[16px] bg-[#1F2121] p-2 md:p-4"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Certificate Image */}
              <div className="mx-2 flex-1">
                <div className="mt-2 aspect-[4/3] w-full relative">
                  <Image
                    width={800}
                    height={600}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-fill contrast-90"
                    alt={cert.name}
                    src={cert.image}
                    onClick={() => {
                      console.log("Clicked:", cert.name);
                      setSelectedCert(cert)
                    }}
                  />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="mt-2 flex flex-col items-start justify-between p-4 font-mono text-white">
                <div className="text-sm md:text-base font-semibold">
                  {cert.name}
                </div>
                <div className="text-xs md:text-sm text-gray-300 opacity-75">
                  {cert.company}
                </div>
              </div>
            </div>
          </CometCard>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
          >
            ✕
          </button>
          <Image
            src={selectedCert.image}
            alt={selectedCert.name}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
