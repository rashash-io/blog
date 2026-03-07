import Image from 'next/image';

import { GiDivert } from "react-icons/gi";
import { GiSparkles } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { Metadata } from "next";

export default function About() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-8 bg-background-pattern bg-cover bg-center">
                <div className="w-full max-w-4xl p-8 bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden">
                                <Image
                                    src="/redLogo.png"
                                    alt="Profile"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                            <h1 className="text-4xl font-bold  mb-4">About Me</h1>
                            <p className=" text-lg mb-4">
                                Hello! I'm RA$HASH, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I'm here to help others on their path to mastering the art of coding.
                            </p>
                            <p className=" text-lg">
                                Whether you're just starting out or looking to sharpen your skills, you'll find a variety of resources and insights here. Let's explore the world of programming together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold ">RA$HASH's Journey as a Coder</h2>
                        <p className="mt-4 text-lg ">
                            From curious beginner to seasoned developer, here's how RA$HASH navigated the world of programming.
                        </p>
                    </div>
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center bg-gray-300 dark:bg-gray-900 p-6 rounded-4xl">
                            <div className="md:w-1/3">
                                < GiSparkles className="text-[80px] md:text-[120px] lg:text-[150px] text-pink-600" />
                            </div>
                            <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold ">The Spark of Curiosity</h3>
                                <p className="mt-4">
                                    RA$HASH’s coding journey began in high school when he stumbled upon my first programming language — PHP. What started as a simple curiosity quickly turned into a passion, as RA$HASH spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col  md:flex-row-reverse items-center bg-gray-300 dark:bg-gray-900 p-6 rounded-4xl">
                            <div className="md:w-1/3 ">
                                <GiDivert className="place-self-end text-[80px] md:text-[120px] lg:text-[150px] text-pink-600" />
                            </div>
                            <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold ">Diving Deeper</h3>
                                <p className="mt-4 ">
                                    After mastering the basics, RA$HASH’s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, RA$HASH quickly expanded my skill set, taking on freelance projects to apply my knowledge in real-world scenarios.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center bg-gray-300 dark:bg-gray-900 p-6 rounded-4xl">
                            <div className="md:w-1/3">

                                <BsPersonWorkspace className="text-[80px] md:text-[120px] lg:text-[150px] text-pink-600" />
                            </div>
                            <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold ">Taking on Challenges</h3>
                                <p className="mt-4 ">
                                    With several years of experience under my belt, RA$HASH began tackling more significant challenges. From contributing to open-source projects to developing my own applications, RA$HASH continued to push my limits, always looking for opportunities to learn and grow. my journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center bg-gray-300 dark:bg-gray-900 p-6 rounded-4xl">
                            <div className="md:w-1/3">
                                <FaPeopleArrows className="place-self-end text-[80px] md:text-[120px] lg:text-[150px] text-pink-600 " />
                            </div>
                            <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold">Giving Back</h3>
                                <p className="mt-4 ">
                                    Today, RA$HASH is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For

                                    , coding is more than just a profession—it’s a lifelong journey of learning and sharing knowledge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export const metadata: Metadata = {
    title: 'RA$HASH | About',
    description: 'A comprehensive blog for coders of all levels, from beginners to advanced. Explore tutorials, tips, and insights on a wide range of programming languages and technologies. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.',
}