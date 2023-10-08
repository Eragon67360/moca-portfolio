import { Metadata } from 'next';
import React from 'react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'About',
    description:'This page presents the member of our team'
  };
};
export default function About() {
  return (
    <div>About</div>
  )
}
