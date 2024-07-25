import headerLogo from '../assets/images/headerLogo.svg'
import hamBurger from '../assets/icons/hambBurger.svg'
import { navLinks } from '../constants/indexx'

function Nav() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src= {headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((items)=>(    
                    <li key={items.label}>
                        <a href={items.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{items.label}</a>
                    </li>
                
                ))}
            </ul> 
            <div>
                <img src='hamburger.svg' alt="Hamburger" width={23} height={25} className='hidden max-lg:block' />
            </div>
            <div className='hidden max-lg:block text-left'>
                <img src= {hamBurger} alt="Hambur" width={23} height={25} />
            </div>

           
        </nav>

    </header>
  )
}

export default Nav