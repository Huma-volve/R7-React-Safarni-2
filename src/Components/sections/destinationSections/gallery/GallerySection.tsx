import React, { useState } from 'react';

interface GalleryType {
    id: number;
    image: string;
    title: string;
}

const GalleryList: GalleryType[] = [
    {
        id: 1,
        image: '/image/gallery-1.png',
        title: 'gallery'
    },
    {
        id: 2,
        image: '/image/gallery-2.png',
        title: 'gallery'
    },
    {
        id: 3,
        image: '/image/gallery-3.png',
        title: 'gallery'
    },
    {
        id: 4,
        image: '/image/gallery-4.png',
        title: 'gallery'
    },
    {
        id: 5,
        image: '/image/gallery-5.png',
        title: 'gallery'
    },
    {
        id: 6,
        image: '/image/gallery-6.png',
        title: 'gallery'
    },
    {
        id: 7,
        image: '/image/gallery-7.png',
        title: 'gallery'
    },
    {
        id: 8,
        image: '/image/gallery-8.png',
        title: 'gallery'
    },
    {
        id: 9,
        image: '/image/gallery-9.png',
        title: 'gallery'
    },
    {
        id: 10,
        image: '/image/gallery-10.png',
        title: 'gallery'
    },
    {
        id: 11,
        image: '/image/gallery-11.png',
        title: 'gallery'
    },
    {
        id: 12,
        image: '/image/gallery-12.png',
        title: 'gallery'
    }
];

const GallerySection: React.FC = () => {
    const [gallery, setGallery] = useState<GalleryType[]>(() => {
        const saved = localStorage.getItem('gallery');
        return saved ? JSON.parse(saved) : GalleryList;
    });

    const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const newPhoto = {
                id: gallery.length + 1,
                image: reader.result as string,
                title: `gallery-${gallery.length + 1}`
            }
            const updatedGallery = [...gallery, newPhoto];
            setGallery(updatedGallery);
            localStorage.setItem('gallery', JSON.stringify(updatedGallery));
        }
        reader.readAsDataURL(file);
    };

    return (
        <div className="relative md:mb-10 mb-7">
            <h4 className="text-[25px] font-medium text-(--main-text) mb-6">
                Gallery<span className="text-[#1E429F]">(200)</span>
            </h4>
            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
                {gallery.map((item) => (
                    <div key={item.id} className="group flex justify-center">
                        <div className="image overflow-hidden rounded-lg w-[187px] h-[187px] shadow-sm">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="add-photo flex justify-center">
                <button className="mt-6 relative px-4 py-2 text-(--color-main) cursor-pointer flex items-center gap-2 rounded-lg text-[16px] font-medium hover:bg-(--primary-color-hover) duration-300">
                    <img src="/icons/add-photo.svg" alt="" />
                    Add Photo
                    <input
                        type="file"
                        name="add-photo"
                        id="add-photo"
                        className="absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer"
                        onChange={handleAddPhoto}
                    />
                </button>
            </div>
        </div>
    );
};

export default GallerySection;
