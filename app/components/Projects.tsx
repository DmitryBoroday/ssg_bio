

const data = [
    {
        title: 'Reddis Chat App',
        img: 'images/reddisChat.avif',
        desc: 'Real time chat messenger, built with the help of NextJS and Reddis Upstash. You can send text messages as well as images)',
        link: 'https://redis-next-chat.vercel.app/',
        stack: [
            {
                ava: '/images/nextjs.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/reddis.png',
                title: 'Reddis'
            },
            {
                ava: '/images/upstash.png',
                title: 'Upstash'
            },
            {
                ava: '/images/pusherjs.png',
                title: 'PusherJS'
            },
            {
                ava: '/images/cloudinary.png',
                title: 'Cloudinary'
            },
            {
                ava: '/images/kinde.png',
                title: 'Kinde'
            },
            {
                ava: '/images/zustand.png',
                title: 'Zustand'
            },
            {
                ava: '/images/motion.png',
                title: 'Framer Motion'
            },
            {
                ava: '/images/tailwind.png',
                title: 'Tailwind CSS'
            }
        ]
    },
    {
        title: 'Project 1',
        img: 'images/mux.jpg',
        desc: 'short desc',
        link: '',
        stack: [
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            }
        ]
    },
    {
        title: 'Project 1',
        img: 'images/vercel.jpg',
        desc: 'short desc',
        link: '',
        stack: [
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            },
            {
                ava: '/images/next.jpg',
                title: 'NextJS'
            }
        ]
    },
]

export default function Projects() {
    return (
        <section className='pt-12 lg:pt-20 w-5/6 mx-auto'>
            <p className='text-4xl text-indigo-300 font-bold mb-4 text-center'>My Projects</p>
            <div className='grid lg:grid-cols-3 gap-20 lg:gap-4 mt-8'>
                {data?.map((item: any, idx: any) => (
                    <div key={idx}>
                        <a target='_blank' href={item.link} className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl'>{item.title}</p>
                            <img
                                src={item.img}
                                alt={item.decs}
                                width={64}
                                height={64}
                                className='w-full lg:h-[220px] hover:brightness-125 object-cover rounded-xl'
                            />
                            <span className='hover:underline w-5/6 text-zinc-300 text-sm pl-2'>{item.desc}</span>
                        </a>
                        <p className='mb-2 mt-6 text-indigo-300 font-bold'>Stack</p>
                        <div className='grid grid-cols-4 lg:grid-cols-6 gap-3'>
                            {item.stack.map((stack: any, idx: any) => (
                                <div
                                    key={idx}
                                    className='flex flex-col justify-center items-center gap-2'>
                                    <img
                                        src={stack.ava || 'placeholder'}
                                        className='rounded-md object-cover h-10 w-full'
                                    />
                                    <p className='text-xs font-bold text-center'>{stack.title}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
