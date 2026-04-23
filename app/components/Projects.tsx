

const data = [
    {
        title: 'Reddis Chat App',
        img: 'images/reddisChat.avif',
        desc: 'Real time chat messenger, built with the help of NextJS and Reddis Upstash. You can send text messages as well as images)',
        link: 'https://redis-next-chat.vercel.app/',
        stack: [
            {
                title: 'NextJS'
            },
            {
                title: 'Reddis'
            },
            {
                title: 'Upstash'
            },
            {
                title: 'PusherJS'
            },
            {
                title: 'Cloudinary'
            },
            {
                title: 'Kinde'
            },
            {
                title: 'Zustand'
            },
            {
                title: 'Framer Motion'
            },
            {
                title: 'Tailwind'
            },
            {
                title: 'Vercel'
            }
        ]
    },
    {
        title: 'Hygge Hurghada Real Estate',
        img: 'images/Hygge.avif',
        desc: 'Real estate website, build for private client with Sanity CMS on backend)',
        link: 'https://www.hygge-hurghada.com/',
        stack: [
            {
                title: 'ReactJS'
            },
            {
                title: 'Sanity'
            },
            {
                title: 'Tailwind'
            },
            {
                title: 'i18next'
            },
            {
                title: 'Framer Motion'
            },
            {
                title: 'Vercel'
            },

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
        <section className='pt-12 lg:pt-20 '>
            <p className='text-4xl text-indigo-300 font-bold mb-4 w-5/6 mx-auto'>My Projects</p>
            <div className='grid lg:grid-cols-3 gap-20 lg:gap-4 mt-12 w-5/6 mx-auto'>
                {data?.map((item: any, idx: any) => (
                    <div key={idx}>
                        <a target='_blank' href={item.link} className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl'>{item.title}</p>
                            <img
                                src={item.img}
                                alt={item.decs}
                                width={64}
                                height={64}
                                className='w-full lg:h-[220px] hover:brightness-125 object-cover rounded-xl z-10'
                            />
                            <span className='hover:underline w-5/6 text-zinc-300 text-sm pl-2'>{item.desc}</span>
                        </a>
                        <p className='mb-2 mt-6 text-indigo-300 font-bold'>Stack</p>
                        <div className='grid grid-cols-4 gap-2'>
                            {item.stack.map((stack: any, idx: any) => (
                                <p key={idx} className='text-xs font-bold text-center py-1 px-2 rounded-md bg-white/10 text-zinc-400 whitespace-nowrap overflow-x-hidden'>{stack.title}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
