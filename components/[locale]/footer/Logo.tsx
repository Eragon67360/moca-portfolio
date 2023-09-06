import React from 'react'
import Image from 'next/image'
import curefab_logo from'@/public/footer_curefab.png'

export const Logo = () => {
  return (
    <Image src={curefab_logo} alt='Curefab logo' width={304} height={130}/>
  )
}
