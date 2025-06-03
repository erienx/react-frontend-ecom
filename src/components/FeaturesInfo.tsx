import ShippingIcon from "../assets/shipping-icon.svg?react"
import RefundIcon from "../assets/refund-icon.svg?react"
import SupportIcon from "../assets/support-icon.svg?react"
import Feature from "./ui/Feature"

const featureData = [
    {
        Icon: ShippingIcon,
        title: "FREE SHIPPING",
        desc: "Enjoy fast and free delivery on all orders with no minimum purchase required."
    },
    {
        Icon: RefundIcon,
        title: "100% REFUND",
        desc: "Shop with confidence—get a full refund if you're not completely satisfied."
    },
    {
        Icon: SupportIcon,
        title: "SUPPORT 24/7",
        desc: "Our dedicated team is available around the clock to assist you with any inquiries."
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