import React from 'react'
import Table from '../Table'
import Adduser from '../Adduser'
import Updateuser from '../Updateuser'
import Deleteuser from '../Deletuser'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Usertable = () => {
  const [value, setValue] = useState({
    name: '',
    fathername: '',
    email: '',
    phone: ""
  });

  const [updateid,setUpdateid]=useState();
  const [deleteid,setDeleteid]=useState();

  const handleOnchange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
        const UpdatedUser = await axios.put(`/api/update/${updateid}`,value)
        const response = UpdatedUser.data

        if (response.success) {
            toast.success(response.message)
        }
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    // console.log(value)
}

  const Updateduser = (id) => {
    console.log(id)
    setUpdateid(id);
  }

  //Delete logic
  const  Deleteduser = (userid) => {
    setDeleteid(userid);
}
const handleDelete = async () => {
    try {
        const DeletUser = await axios.delete(`/api/delete/${deleteid}`)
        const response = DeletUser.data
        if (response.success) {
            toast.success(response.message)
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <Table UpdatedUser={Updateduser}  Deletuser={Deleteduser}/>
      <Adduser />
      <Updateuser value={value} handleOnchange={handleOnchange} handleSubmit={handleOnSubmit} />
      <Deleteuser handleDelete={handleDelete}/>
    </div>
  )
}

export default Usertable
