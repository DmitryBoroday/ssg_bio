

const data = [
    {
        title: 'Canary Chat',
        img: 'images/reddisChat.avif',
        desc: 'A real-time messaging application optimized for low latency using Next.js and Redis(Upstash) for session state. Implement instant event broadcasting via Pusher JS and secured asset delivery via Cloudinary',
        link: 'https://redis-next-chat.vercel.app/',
        stack: [
            {
                title: 'TypeScript'
            },
            {
                title: 'NextJS'
            },
            {
                title: 'Redis'
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
        title: 'Hygge Hurghada Real Estate | React / Sanity',
        img: 'images/Hygge.avif',
        desc: 'Real estate website, built for private client with Sanity CMS on backend)',
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
        title: 'Canary Chat | ReactJS / MongoDB Atlas',
        img: 'images/linked_poster.avif',
        desc: 'Real-time chat app, created as a testing platform for chat apps',
        link: 'https://react-chat-jywk.onrender.com/',
        stack: [
            {
                title: 'React'
            },
            {
                title: 'Express'
            },
            {
                title: 'Node'
            },
            {
                title: 'Socket'
            },
            {
                title: 'JWT'
            },
            {
                title: 'Cloudinary'
            },
            {
                title: 'Render'
            },
        ]
    }
]

export default function Projects() {
    return (
        <section className='py-12 lg:py-20 teachersBg'>
            <p className='text-4xl text-indigo-300 font-bold mb-4 w-5/6 mx-auto'>My Projects</p>
            <div className='grid lg:grid-cols-3 gap-20 lg:gap-4 mt-12 w-5/6 mx-auto'>
                {data?.map((item: any, idx: any) => (
                    <div key={idx}>
                        <a target='_blank' href={item.link} className='flex flex-col gap-2'>

                            <img
                                src={item.img}
                                alt={item.decs}
                                width={64}
                                height={64}
                                className='w-full h-full lg:h-[260px] hover:brightness-125 object-fit rounded-xl z-10'
                            />
                            <p className='font-bold text-2xl'>{item.title}</p>
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
