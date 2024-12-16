import Image from "next/image";

interface ClothesCard {
    image: string;
    name: string;
    ratingImage: string; 
    price: string;
    orignalPrice?: string;
    discountCopen?: string;
};

export default function ClothesCard({ image, name, ratingImage, price, orignalPrice, discountCopen }: ClothesCard) {
    return (
        <div className="flex flex-col gap-7">
            <Image src={image} alt={'showimage'} width={295} height={298} className="rounded-2xl" />
            <div>
                <span className="justify-center w-full">
                    <h4 className="font-bold ml-1">{name}</h4>
                    <Image src={ratingImage} alt={'showimage'} width={126} height={19} />
                    <span className="flex gap-4">
                        <p className="font-bold ml-1">{price}</p>
                        <p className="text-gray-400 line-through">{orignalPrice}</p>
                        {discountCopen && (
                            <span>
                                <p className="flex justify-center items-center rounded-xl bg-red-200 h-[28px] w-[58px] text-red-500">
                                    {discountCopen}
                                </p>
                            </span>
                        )}
                    </span>
                </span>
            </div>
        </div>
    );
}