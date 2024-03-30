import { cieLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <div className="flex gap-2 justify-center items-center">
          <a href='/'>
            <img
              src={cieLogo}
              alt='logo'
              width={40}
              height={40}
              className='m-0 w-[40px] h-[40px]'
            />
          </a>
          <h1 className="text-[20px] font-semibold font-montserrat justify-center items-center">U-GMO</h1>
        </div>
      </nav>
    </header>
  );
};

export default Nav;