
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
        <section className='py-24 w-[96%] lg:w-5/6 mx-auto teachersBg'>
            <p className='text-4xl text-indigo-300 font-bold mb-4 text-center'>My Teachers</p>
            <div className='w-full h-full flex items-center lg:gap-24 justify-around lg:justify-center py-8'>
                {data?.map((item, idx) => (
                    <a
                        target='_blank'
                        href={item.url}
                        key={idx}
                        className='flex flex-col justify-center text-center items-center hover:cursor-pointer hover:brightness-125'>
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
                        <div>
                            <p className='text-teal-200 font-bold text-center'>{item.name}</p>
                            <p className='text-teal-200 font-bold text-center'>{item.surename}</p>
                        </div>

                    </a>
                ))}
            </div>
        </section>

    )
}
