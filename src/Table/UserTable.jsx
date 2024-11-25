import { useState } from 'react'
import Table from '../Component/Table'
import AddUser from '../Component/AddUser'
import UpdatedUser from '../Component/UpdatedUser'
import DeletUser from '../Component/DeletUser'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function UserTable() {
    const [userId, setUserId] = useState()
    const [updatedUserId, setUpdatedUserId] = useState();
    const[loadData,setLoadData]=useState(false);
    const [value, setValue] = useState({
        name: "",
        fathername: "",
        email: "",
        phone: "",
        id:''
    })
    const deletuser = (userid) => {
        setUserId(userid)
    }
    const handleUserDelet = async () => {
        try {
            const DeletUser = await axios.delete(`http://localhost:4000/api/delete/${userId}`)
            const response = DeletUser.data
            if (response.success) {
              setLoadData(true);
                toast.success(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

    }


    const UpadteUserData = (data) => {
      setValue(data);
        setUpdatedUserId(data._id)

    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const UpdatedUser = await axios.put(`http://localhost:4000/api/update/${updatedUserId}`,value)
            const response = UpdatedUser.data

            if (response.success) {
                setLoadData(true);
                toast.success(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Table Deletuser={deletuser} loadData={loadData} setLoadData={setLoadData} UpdatedUser={UpadteUserData}></Table>

            <AddUser setLoadData={setLoadData}></AddUser>
            <UpdatedUser handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange}></UpdatedUser>
            <DeletUser handleUserDelet={handleUserDelet} ></DeletUser>




        </>
    )
}