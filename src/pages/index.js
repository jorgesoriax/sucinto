import CrystalBox from "@/components/CrystalBox";
import Navbar from "@/components/Navbar";
import PriceCard from "@/components/PriceCard";
import SectionHeader from "@/components/SectionHeader";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Pricing />
    </>
  );
}