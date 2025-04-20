import LogoIcon from '../assets/logo-icon.svg?react';

const LowerHeader = () => {
  return (
    <>
      <header>
        <div className="flex gap-3 items-center mr-12">

          <LogoIcon />
          <h4 className="font-bold text-dark ">E-Comm</h4>

        </div>

        <div className="flex gap-8 sm:gap-12 lg:gap-16 items-center">
          <h3>HOME</h3>
          <h3>ABOUT</h3>
          <h3>CONTACT</h3>
        </div>
      </header>
    </>
  )
}

export default LowerHeader