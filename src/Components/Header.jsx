import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    BookOpenIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    ArchiveBoxIcon,
    MusicalNoteIcon,
    XMarkIcon,
    ShoppingCartIcon, UserCircleIcon, MagnifyingGlassIcon, ShoppingBagIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'

const products = [
    { name: 'Furniture',  href: '#', icon: ArchiveBoxIcon },
    { name: 'Mobile',   href: '#', icon: DevicePhoneMobileIcon},
    { name: 'Handbag',  href: '#', icon: ShoppingBagIcon },
    { name: 'Headphone',  href: '#', icon: MusicalNoteIcon},
    { name: 'Laptop',  href: '#', icon: ComputerDesktopIcon },
    { name: 'Book',  href: '#', icon: BookOpenIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [search , setSearch]=useState("");

    const handleEnter=(event)=>{
        if(event.key==="Enter")document.getElementById("search").click();
    }
    return (
        <header  className="scroll-smooth bg-white">
            <nav className="mx-auto max-w-7xl items-center justify-between p-4 md:px-8 gap-x-3 flex" aria-label="Global">
                <div className="flex md:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex gap-x-1 items-center">
                        <img className="h-10 w-auto" src="/Images/cart.jpg" alt="Hel" />
                        <span className="font-bold text-xl">Ekart</span>
                    </Link>
                </div>
                <div className="flex md:hidden md-mx:order-1">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden items-center md:flex md:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4 flex flex-wrap">
                                
                                    {products.map((item ) => (
                                        <Link to={`/search/${item.name}`}
                                            key={item.name}
                                            className="group relative  w-1/2 flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">99 Item Available</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    
                    <a  onClick={()=>document.getElementById('deals').scrollIntoView({behavior:"smooth"})} className="cursor-pointer lg-mx:hidden text-sm font-semibold leading-6 text-gray-900">
                        Deals
                    </a>
                    <Link to="/orders" className="lg-mx:hidden text-sm font-semibold leading-6 text-gray-900">
                        Orders
                    </Link>
                </Popover.Group>
                <div className=" md:ml-4 relative  text-gray-600">
                    <input className="xsm-mx:w-[35vw] sm-mx:w-[45vw] border-[1.3px] rounded-full text-sm border-gray-400 bg-white h-8 px-5 pr-10 focus:border-cyan-500  focus:outline-none "
                        type="search" name="search" onKeyDown={handleEnter} value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Product" />
                        <Link to={`/search/${search}`}>
                    <button type="submit" id="search"  className="outline-none absolute right-0 top-0 mt-1.5 mr-4">
                        <MagnifyingGlassIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    </button>
                    </Link>
                </div>
                <div className="sm-mx:hidden flex md:flex-1 md:justify-end ">
                    <Link to="/account" className="text-sm font-semibold leading-6 flex items-center gap-1 mr-8 text-gray-900">
                        <UserCircleIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        Account
                    </Link>
                    <Link to="/cart" className="text-sm font-semibold leading-6 flex items-center gap-1  text-gray-900">
                    <div className='relative'>
                        <ShoppingCartIcon className=" h-5 w-5 flex-none" aria-hidden="true" />
                        <div className=" absolute -top-2 z-10 -right-2 text-[0.65rem] h-4 w-4  font-extrabold text-white bg-blue-500 flex justify-center items-center rounded-full">2</div>
                        <span class="animate-ping absolute -top-2 -right-2 inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-85"></span>
                        </div>
                        Cart
                    </Link>
                </div>

            </nav>
            <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 mt-20 sm-mx:mx-0 sm:mr-2 right-0 z-10 w-full  sm:rounded-3xl shadow-lg ring-1 ring-gray-900/5 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className=" flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-2">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <div className='flex items-center justify-between'>
                                                <Disclosure.Button className="flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Product
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <button
                                                    type="button"
                                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Link  onClick={() => setMobileMenuOpen(false)} to={`/search/${item.name}`}
                                                    key={item.name}>
                                                    <Disclosure.Button
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                {document.getElementById('deals') && <a
                                     onClick={()=>{document.getElementById('deals').scrollIntoView({behavior:"smooth"});setMobileMenuOpen(false)}}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Deals
                                </a>}
                                <Link
                                    to="/orders"  onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Orders
                                </Link>
                                <Link
                                    to="/cart"  onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 sm:hidden block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Cart
                                </Link>
                            </div>
                            <div className="py-4">
                            <Link
                                    to="/account"  onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 sm:hidden block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Account
                                </Link>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
