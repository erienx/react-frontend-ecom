import { FC, SVGProps } from 'react';
type FeatureProps = {
    Icon: FC<SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
}

const Feature = ({ Icon, title, desc }: FeatureProps) => {
    return (
        <div className='flex flex-col justify-center items-center max-w-xs'>
            <Icon className="w-22 h-22 mb-4" />
            <h3>{title}</h3>
            <p className='pt-6 sm:pt-8'>{desc}</p>
        </div>
    )
}

export default Feature