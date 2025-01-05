import { AlertTriangle } from 'lucide-react'

const DeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-6 h-6 text-[#FF9EAA] mr-2" />
          <h2 className="text-xl md:text-2xl font-bold text-[#9DD5E3]">Confirm Deletion</h2>
        </div>
        <p className="mb-6 text-gray-600">Are you sure you want to delete this {itemName}? This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#FF9EAA] text-white rounded-md hover:bg-[#ff8c9a] transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal

