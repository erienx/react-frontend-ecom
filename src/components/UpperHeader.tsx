// import ProfileIcon from "../assets/profile-icon.svg?react"
import { Link } from "react-router-dom"
import CartIcon from "../assets/cart-icon.svg?react"
// import SearchIcon from "../assets/search-icon.svg?react"

const UpperHeader = () => {
    return (
        <>
            <header className="flex flex-col sm:flex-row justify-end items-center px-4 sm:px-14 py-3 flex-wrap gap-y-12 sm:gap-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-8 lg:gap-12">
                    <Link to='register' className="regular-text">Register</Link>
                    <Link to='login' className="regular-text">Sign in</Link>
                    {/* <div className="flex items-center gap-2">
                        <ProfileIcon />
                        <span className="regular-text">My Profile</span>
                    </div> */}


                    <div className="flex items-center gap-2">
                        <CartIcon />
                        <span className="regular-text">Items</span>
                    </div>

                    {/* <div className="flex items-center gap-2">
                        <span className="regular-text">$0.00</span>
                        <SearchIcon />
                    </div> */}
                </div>

            </header >
        </>
    )
}

export default UpperHeader