'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Users, Trash2 } from 'lucide-react'
import SearchBar from '../../../components/SearchBar'
import DeleteModal from '../../../components/DeleteModal'
import StatsCard from '../../../components/StatsCard'

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/admin/get-all-users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })
      const usersData = response.data.users
      setUsers(usersData)
      setFilteredUsers(usersData)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (query) => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredUsers(filtered)
  }

  const handleDelete = (user) => {
    setUserToDelete(user)
    setDeleteModalOpen(true)
  }

  const confirmDelete = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/user/admin/delete-user/${userToDelete._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })
      
      setUsers(users.filter(u => u._id !== userToDelete._id))
      setFilteredUsers(filteredUsers.filter(u => u._id !== userToDelete._id))
      setDeleteModalOpen(false)
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  // Function to get a consistent background color based on name
  const getAvatarBackground = (name) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'
    ]
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[index % colors.length]
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading users...</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Users Management</h1>
      <div className="mb-6 md:mb-8">
        <StatsCard title="Total Users" value={users.length} icon={Users} />
      </div>
      <div className="mb-6">
        <SearchBar placeholder="Search users..." onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredUsers.map(user => (
          <div key={user._id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="p-4 md:p-6">
              {user.avatar?.url ? (
                <Image 
                  src={user.avatar.url} 
                  alt={user.name} 
                  width={100} 
                  height={100} 
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" 
                />
              ) : (
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white ${getAvatarBackground(user.name)}`}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <h2 className="text-lg md:text-xl font-semibold text-center mb-2">{user.name}</h2>
              <p className="text-gray-600 text-center mb-4">{user.email}</p>
              <button
                onClick={() => handleDelete(user)}
                className="w-full px-4 py-2 bg-[#FF9EAA] text-white rounded-md hover:bg-[#ff8c9a] transition-colors flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        itemName="user"
      />
    </div>
  )
}

export default UsersPage

