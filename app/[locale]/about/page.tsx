import { Metadata } from 'next';
import React from 'react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'About',
    description:`Discover the talented team behind UX MOCA's website. Meet our skilled members and explore their expertise.`
  };
};
export default function About() {
  return (
    <div>About</div>
  )
}
