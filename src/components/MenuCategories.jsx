import { subMenuData } from "@/constants/data";
import Link from "next/link";


const MenuCategories = () => {

  return (
    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
      {
        subMenuData?.map(
          ({ attributes: c, id }) => {
            return (
              <Link
                key={id}
                href={`/category/${c?.slug}`}
                onClick={() => setShowCatMenu(false)}
              >
                <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                  {c?.name}
                  <span className="opacity-50 text-sm">
                    {`(${c?.products.data.length})`}
                  </span>
                </li>
              </Link>
            );
          }
        )
      }
    </ul>
  )
}

export default MenuCategories