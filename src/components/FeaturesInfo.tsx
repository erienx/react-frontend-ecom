import ShippingIcon from "../assets/shipping-icon.svg?react"
import RefundIcon from "../assets/refund-icon.svg?react"
import SupportIcon from "../assets/support-icon.svg?react"
import Feature from "./ui/Feature"

const featureData = [
    {
        Icon: ShippingIcon,
        title: "FREE SHIPPING",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        Icon: RefundIcon,
        title: "100% REFUND",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        Icon: SupportIcon,
        title: "SUPPORT 24/7",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    }
];

const FeaturesInfo = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-center gap-15 mx-10 my-16'>
            {featureData.map((data, index) => (
                <Feature
                    key={index}
                    Icon={data.Icon}
                    title={data.title}
                    desc={data.desc}
                />
            ))}
        </div>
    )
}

export default FeaturesInfo