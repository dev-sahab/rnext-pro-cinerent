import { useContext, useState } from 'react';
import Moon from '../assets/icons/moon.svg';
import Logo from '../assets/logo.svg';
import Ring from '../assets/ring.svg';
import ShoppingCart from '../assets/shopping-cart.svg';
import { MovieContext } from '../context';
import MiniCart from './MiniCart';

export default function Header() {
  const { cartData } = useContext(MovieContext);

  const [showCartModal, setShowCartModal] = useState(false);
  const handleOpenCartModal = () => {
    setShowCartModal(true);
  };
  return (
    <>
      {/* <!-- Begin header --> */}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={handleOpenCartModal}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <span className="bg-[#00d991] text-white text-[10px] rounded-full w-[16px] h-[16px] flex items-center justify-center p-2 absolute -top-2 -right-2">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
        {showCartModal && (
          <MiniCart onClose={() => setShowCartModal(false)} movie={cartData} />
        )}
      </header>

      {/* <!-- End Header --> */}
    </>
  );
}
