import { Toaster } from 'react-hot-toast'
import DashboardLayout from '../../components/Sidebar'

export default function Layout({ children }) {
  return <DashboardLayout>
    <Toaster />
    {children}
    </DashboardLayout>
}

