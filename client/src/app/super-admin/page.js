'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Users, Package, DollarSign, TrendingUp } from 'lucide-react'
import StatsCard from '../../components/StatsCard'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalRevenue: 0,
    growthRate: 0
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isSuperAdmin, setIsSuperAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkSuperAdminStatus()
  }, [])

  useEffect(() => {
    if (isSuperAdmin) {
      fetchStats()
    }
  }, [isSuperAdmin])

  const checkSuperAdminStatus = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/check-super-admin`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })
      
      if (response.data.success) {
        setIsSuperAdmin(true)
      } else {
        toast.error('You are not authorized to access this page')
        router.push('/') // Redirect to home page or previous page
      }
    } catch (error) {
      console.error('Error checking super admin status:', error)
      toast.error('An error occurred. Please try again.')
      router.push('/') // Redirect to home page or previous page
    }
  }

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      
      // Fetch users and products in parallel
      const [usersResponse, productsResponse] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/admin/get-all-users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getall-products`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        })
      ])

      setStats({
        totalUsers: usersResponse.data.users.length,
        totalProducts: productsResponse.data.ads.length,
        totalRevenue: 0, // Maintained from original
        growthRate: 0    // Maintained from original
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
      toast.error('Error fetching dashboard data')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isSuperAdmin) {
    return null // Or a loading indicator if you prefer
  }

  if (isLoading) {
    return (
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatsCard title="Total Users" value="Loading..." icon={Users} />
          <StatsCard title="Total Products" value="Loading..." icon={Package} />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Recent Activity</h2>
          <p className="text-gray-600">Loading activity...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatsCard title="Total Users" value={stats.totalUsers} icon={Users} />
        <StatsCard title="Total Products" value={stats.totalProducts} icon={Package} />
        {/* <StatsCard title="Total Revenue" value={`$${stats.totalRevenue.toLocaleString()}`} icon={DollarSign} />
        <StatsCard title="Growth Rate" value={`${stats.growthRate}%`} icon={TrendingUp} /> */}
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Recent Activity</h2>
        <p className="text-gray-600">No recent activity to display.</p>
      </div>
    </div>
  )
}

export default DashboardPage

