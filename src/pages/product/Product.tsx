    import React from "react"
    import SideBar from "../../components/SideBar"
    import SearchBar from "../../components/SearchBar"
    import ProductBanner from "../../components/productComponents/productBanner"
    import ProductCard from "../../components/productComponents/ProductCard"

    const Product: React.FC = () => {
        return (
            <div className="flex h-screen">
                <SideBar />
                <div className="flex flex-col  w-full overflow-auto">
                    <SearchBar />
                    <div className=" flex flex-col w-full p-4 gap-4  bg-gray-200">
                        <h1 className='font-bold text-3xl'>Product</h1>
                        <ProductBanner/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        )
    }

    export default Product