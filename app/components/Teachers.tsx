
const data = [
    {
        img: '/images/Brad.png',
        name: 'Brad Traversy',
        url: 'https://www.youtube.com/@TraversyMedia'
    },
    {
        img: '/images/Jack.png',
        name: 'Jack Herrington',
        url: 'https://www.youtube.com/@jherr'
    },
    {
        img: '/images/Dave.png',
        name: 'Dave Gray',
        url: 'https://www.youtube.com/@DaveGrayTeachesCode'
    },
]

export default function Teachers() {
    return (
        <div className='w-full h-full flex items-center  lg:gap-12 justify-between pt-2 lg:px-4'>
            {data?.map((item, idx) => (
                <a
                    target='_blank'
                    href={item.url}
                    key={idx}
                    className='flex flex-col justify-center text-center items-center hover:cursor-pointer hover:bg-zinc-700 rounded-xl p-2'>
                    <div className='w-20 lg:w-32 h-20 lg:h-32 rounded-full shadow-sm lg:shadow-lg'>
                        <img
                            alt={item.name}
                            width={64}
                            height={64}
                            loading='lazy'
                            src={item.img}
                            className='w-full h-full rounded-full object-cover'
                        />
                    </div>
                    <code className='text-teal-200 font-bold text-center'>{item.name}</code>
                </a>
            ))}
        </div>
    )
}
