import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminDashboardClient from './client';

export default async function AdminDashboard() {
    const cookieStore = await cookies();
    const auth = cookieStore.get('auth');
    
    if (!auth) {
        redirect('/admin');
    }
    
    return <AdminDashboardClient />;
}