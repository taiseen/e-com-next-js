import { BsChevronDown } from "react-icons/bs";
import { menuData } from "@/constants/data"
import { MenuCategories } from ".";
import { Fragment } from "react";
import Link from "next/link";


const Menu = ({ showCatMenu, setShowCatMenu, categories, mobileMenu, setMobileMenu }) => {

    const inMobile = "flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black";
    const noMobile = "hidden md:flex items-center gap-8 font-medium text-black";

    return (
        <ul className={"hidden md:flex items-center gap-8 font-medium text-black"}>
            {
                menuData.map((item) =>
                (
                    <Fragment key={item.id}>
                        {
                            !!item?.subMenu // !!undefined false
                                ? (
                                    <li
                                        className="cursor-pointer flex items-center gap-2 relative"
                                        onMouseEnter={() => setShowCatMenu(true)}
                                        onMouseLeave={() => setShowCatMenu(false)}
                                    >
                                        {item.name}
                                        <BsChevronDown size={14} />

                                        {showCatMenu && <MenuCategories categories={categories} />}
                                    </li>
                                ) : (
                                    <li className="cursor-pointer">
                                        <Link href={item?.url}>{item.name}</Link>
                                    </li>
                                )
                        }
                    </Fragment>
                ))
            }
        </ul>
    );
};

export default Menu;