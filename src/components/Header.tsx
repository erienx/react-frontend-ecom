import UpperHeader from './UpperHeader'
import LowerHeader from './LowerHeader'


const Header = () => {
    return (
        <>
            <UpperHeader />
            <div className="border-gray-200 border-[1px]"></div>
            <LowerHeader />
        </>
    )
}

export default Header