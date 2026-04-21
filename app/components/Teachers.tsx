
const data = [
    {
        img: '/images/Brad.png',
        name: 'Brad',
        surename: 'Traversy',
        url: 'https://www.youtube.com/@TraversyMedia'
    },
    {
        img: '/images/Jack.png',
        name: 'Jack',
        surename: 'Herrington',
        url: 'https://www.youtube.com/@jherr'
    },
    {
        img: '/images/Dave.png',
        name: 'Dave',
        surename: 'Gray',
        url: 'https://www.youtube.com/@DaveGrayTeachesCode'
    },
]

export default function Teachers() {
    return (
        <section className='py-24 teachersBg'>
            <p className='text-3xl lg:text-4xl text-indigo-300 font-bold mb-4 w-5/6 mx-auto'>My Teachers</p>
            <div className='h-full flex flex-col lg:flex-row items-start  gap-8 lg:gap-24 justify-start py-8 w-5/6 mx-auto'>
                {data?.map((item, idx) => (
                    <a
                        target='_blank'
                        href={item.url}
                        key={idx}
                        className='flex lg:flex-col justify-center gap-6 items-center hover:cursor-pointer hover:brightness-125'>
                        <div className='w-28 lg:w-56 h-28 lg:h-56 rounded-full'>
                            <img
                                alt={item.name}
                                width={64}
                                height={64}
                                loading='lazy'
                                src={item.img}
                                className='w-full h-full rounded-full object-cover'
                            />
                        </div>
                        <div className='text-teal-200 font-bold lg:text-center text-xl'>
                            <p>{item.name}</p>
                            <p>{item.surename}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>

    )
}
