

const data = [
    {
        title: 'Project 1',
        img: 'images/jam.jpg',
        desc: 'short desc',
        link: ''
    },
    {
        title: 'Project 1',
        img: 'images/mux.jpg',
        desc: 'short desc',
        link: ''
    },
    {
        title: 'Project 1',
        img: 'images/vercel.jpg',
        desc: 'short desc',
        link: ''
    },
]

export default function Projects() {
    return (
        <section className='pt-12 lg:pt-20 w-5/6 mx-auto'>
            <p className='text-4xl text-indigo-300 font-bold mb-4 text-center'>My Projects</p>
            <div className='flex lg:flex-row flex-col items-end justify-end gap-12 mt-8'>
                {data?.map((item: any, idx: any) => (
                    <a target='_blank' href={item.link} key={idx} className='flex flex-col gap-2 w-full'>
                        <p>{item.title}</p>
                        <img
                            src={item.img}
                            alt={item.decs}
                            width={64}
                            height={64}
                            className='w-full h-[220px] lg:h-56 hover:brightness-125 object-cover rounded-xl'
                        />
                        <span>{item.desc}</span>
                    </a>
                ))}
            </div>

        </section>
    )
}
