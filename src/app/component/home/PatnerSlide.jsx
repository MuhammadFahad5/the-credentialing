
'use client'
import React from 'react'
import { Carousel, Button } from 'antd';
import Image from 'next/image'

const items = [
    {
        key: '1',
        title: 'Our Patner',
        image: '/home/patner_home_1.png',
    },
    {
        key: '2',
        title: 'Our Patner',
        image: '/home/patner_home_2.png',
    },
    {
        key: '3',
        title: 'Our Patner',
        image: '/home/patner_home_3.png',
    },
    {
        key: '4',
        title: 'Our Patner',
        image: '/home/patner_home_1.png',
    },
    {
        key: '5',
        title: 'Our Patner',
        image: '/home/patner_home_2.png',
    },
    {
        key: '6',
        title: 'Our Patner',
        image: '/home/patner_home_3.png',
    },
]

export default function slide() {
    const state = window.innerWidth < 560 ? 3 : window.innerWidth < 768 ? 4 : window.innerWidth < 1024 ? 5 : 7
    return (
        <>
            <section className='py-8'>
                <div >
                    <Carousel
                        autoplay
                        slidesToShow={state}
                        dots={null}
                    >
                        {items.map((item, index) => {
                            console.log(index)
                            return (
                                <div key={item.key}>
                                    <Image src={item.image} width={130} height={22} alt={item.title} className='w-full max-w-[130px]'/>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </section>
        </>
    )
}
