'use client';

import React, { useState } from "react";

const data = {
  news: [
    { title: "Uusi liikkuvuusohjelma käynnistyi", content: "Uusi liikkuvuusohjelma on nyt saatavilla opiskelijoille." },
    { title: "Globaali koulutusseminaari 2024", content: "Liity tulevaan seminaariin globaalin koulutuksen innovaatioista." },
    { title: "Kansainväliset yhteistyöapurahat", content: "Lue, kuinka hakea yhteistyöapurahoja vuodelle 2024." },
  ],
  mobility: [
    { title: "Erasmus+ ohjelma", content: "Opiskele ulkomailla Erasmus+ ohjelman avulla ja laajenna oppimiskokemustasi." },
    { title: "Globaalit harjoittelupaikat", content: "Hae harjoittelupaikkoja maailmanlaajuisista verkostoistamme." },
  ]
};



export default function Kansainvalinen() {
  return (
    <div className="flex flex-col ">
      {/* Header Section */}
      <section className="py-10 bg-gray-50 text-center bg-gradient-to-b from-blue-50 to-white py-20">
        <h1 className="text-3xl font-bold">Kansainvälinen</h1>
        <p className="text-gray-600">Tutustu kansainvälisiin uutisiin, liikkuvuusohjelmiin ja resursseihin!</p>
      </section>

      {/* News Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Uutiset</h2>
          <div>
            {data.news.map((item, index) => (
              <div key={index} className="mb-4 p-4 border rounded-md shadow-sm">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobility Section */}
      <section className="py-8 ">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Liikkuvuusohjelmat</h2>
          <div>
            {data.mobility.map((item, index) => (
              <div key={index} className="mb-4 p-4 border rounded-md shadow-sm">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
