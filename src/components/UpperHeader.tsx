import ProfileIcon from "../assets/profile-icon.svg?react"
import CartIcon from "../assets/cart-icon.svg?react"
import SearchIcon from "../assets/search-icon.svg?react"

const UpperHeader = () => {
    return (
        <>
            <header>
                <div>{/* can add something on the left*/}</div>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex items-center gap-2">
                        <ProfileIcon />
                        <span className="regular-text">My Profile</span>
                    </div>


                    <div className="flex items-center gap-2">
                        <CartIcon />
                        <span className="regular-text">Items</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="regular-text">$0.00</span>
                        <SearchIcon />
                    </div>
                </div>

            </header >
        </>
    )
}

export default UpperHeader