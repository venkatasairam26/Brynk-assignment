import './index.css'
import { useState,useEffect} from 'react'

const Admin = () => {
    const [heading, setHeading] = useState('')
    const [data, setData] = useState([])
    const [isEdit, setIsEdit] = useState(false)

    const handleUpdateData = async () => {
        try {
            const response = await fetch('https://brynk-assignment-tq58.onrender.com/data', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ heading }),
            })
            if (!response.ok) {
                throw new Error('Failed to update data')
            }
            const result = await response.json()
            setData([...data, result])
            setIsEdit(false)
        } catch (error) {
            console.error('Error updating data:', error)
        }
    }

useEffect(() => {
    const fetchUsers = async () => {
        const response = await fetch('https://brynk-assignment-tq58.onrender.com/data')
        const data = await response.json()
        setHeading(data[0].heading)
    }
    fetchUsers()
},[])
    return (
        <div className='admin'>
            <h1>Admin</h1>
            {isEdit ? <textarea type="text" value={heading} onChange={(e) => setHeading(e.target.value)} /> : <p dangerouslySetInnerHTML={{__html:heading}}/>}
            <div>
                <button onClick={() => setIsEdit(true)} >Edit</button>
                <button onClick={handleUpdateData}>Save</button>
            </div>
        </div>
    )
}

export default Admin
