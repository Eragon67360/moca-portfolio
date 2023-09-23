import { Metadata } from 'next';
import React from 'react'
export const generateMetadata = (): Metadata => {
  return {
    title: 'About',
  };
};
export default function About() {
  return (
    <div>About</div>
  )
}
