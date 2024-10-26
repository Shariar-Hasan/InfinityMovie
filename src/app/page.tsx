import Frame from '@/components/shared/Frame';
import { ButtonLink } from '@/components/small-ui/Button';
import { Metadata } from 'next';
import { BsCameraVideo, BsChatDots, BsFilm, BsStar } from 'react-icons/bs';
export const metadata: Metadata = {
    title: 'Home | Infinity Movie',
    description:
        'Infinity Movie is a movie app that allows you to search for movies and view details about them. It is built with Next.js and Tailwind CSS. It is a great example of a modern web application. ',
};
export default function Home() {
    return (
        <Frame>
            <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
                <div className='grid grid-cols-1 gap-8 justify-items-center'>
                    <h1 className='text-4xl font-bold text-center'>Welcome to Infinity Movie</h1>
                    <p className='text-lg text-center'>A place where you can find all the information about your favorite movies.</p>
                    <ButtonLink href='/movies' varient='brand' className='text-white'>
                        Explore Movies
                    </ButtonLink>
                </div>
                <div className='grid grid-cols-1 gap-8 justify-items-center'>
                    <h2 className='text-2xl font-bold text-center'>Our Services</h2>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        {[
                            {
                                title: 'Movies',
                                description: 'Find all the information about your favorite movies.',
                                icon: <BsFilm className='text-4xl text-brand' />,
                            },
                            {
                                title: 'Actors',
                                description: 'Get to know more about your favorite actors.',
                                icon: <BsStar className='text-4xl text-brand' />,
                            },
                            {
                                title: 'Trailers',
                                description: 'Watch the trailers of the latest movies.',
                                icon: <BsCameraVideo className='text-4xl text-brand' />,
                            },
                            {
                                title: 'Reviews',
                                description: 'Read the reviews of the latest movies.',
                                icon: <BsChatDots className='text-4xl text-brand' />,
                            },
                        ].map((service, index) => (
                            <div key={index} className='flex flex-col items-center justify-center px-4 py-10 hover:bg-primary rounded-md animate-fade delay'>
                                {service.icon}
                                <h3 className='text-xl font-bold'>{service.title}</h3>
                                <p className='text-center'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Frame>
    );
}
