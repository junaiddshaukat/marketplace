import Image from 'next/image'
import Link from 'next/link'

export default function CategorySection() {
  const categories = [
    { name: "Kinderwagen", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-6-1.jpg" },
    { name: "Unterwegs", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-8-1.jpg" },
    { name: "Kindersitze", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-7-1.jpg" },
    { name: "Spielzeug", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-9-1.jpg" },
    { name: "Ernährung", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-10-1.jpg" },
    { name: "Wohnen", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-11-1.jpg" },
    { name: "Bekleidung", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-12-1.jpg" },
  ]

  return (
    <div className="mb-12">
      <div className="flex justify-between gap-4 overflow-x-auto px-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex min-w-[100px] cursor-pointer flex-col items-center gap-2 transition hover:opacity-80"
          >
              <span className="text-lg font-bold text-gray-600">{category.name}</span>
            <Link  href={`/all-products?category=${encodeURIComponent(category.name)}`}   className="rounded-full p-4 ">
              <Image
                src={category.image}
                alt={category.name}
                width={70}
                height={70}
                className=" bg-transparent object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

