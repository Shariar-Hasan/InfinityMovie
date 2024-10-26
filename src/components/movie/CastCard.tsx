import { getProfilePictureUrl } from '@/lib/getUrl';
import { Cast } from '@/types/Cast';
import Image from 'next/image';
import React from 'react';
import noUserSrc from '@/assets/placeholder-user.jpg';
const CastCard = ({ member }: { member: Cast }) => {
    return (
        <div key={member.id} className='min-w-[150px] max-w-[150px] p-3 rounded-lg text-center shadow-md hover:bg-primary delay'>
            <Image src={member.profile_path ? getProfilePictureUrl(member.profile_path) : noUserSrc} alt={member.name} width={150} height={150} className='w-20 mb-2 mx-auto  rounded-md' />
            <h3 className='text-sm font-semibold'>{member.name}</h3>
            <p className='text-xs text-gray-400'>{member.character}</p>
        </div>
    );
};

export default CastCard;
