'use client'

const StatsCard = ({ title, value, icon: Icon }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-slate-100 p-3 rounded-full">
            <Icon className="w-8 h-8 text-[black]" />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-[#FF9EAA]">{value}</p>
        </div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
      </div>
    )
  }
  
  export default StatsCard
  
  