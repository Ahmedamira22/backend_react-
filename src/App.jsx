
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import UserTable from './Table/UserTable';
import { Toaster } from 'react-hot-toast';
import './App.css'

export default function App() {
  return (
    <>
    <UserTable></UserTable>
    <Toaster></Toaster>
    </>
  )
}
