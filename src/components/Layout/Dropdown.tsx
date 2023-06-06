import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dropdown : React.FC = () => {
  const navigate = useNavigate();
    const handleDrpBtn = (event:React.ChangeEvent) => {
        navigate((event.target as any).value);
    }
  return (
    <select className='dropdown' onChange={handleDrpBtn}>
        <option value={'/'}>About</option>
        <option value={'/skills'}>Skills</option>
        <option value={'/experience'}>Experiance</option>
        <option value={'/projects'}>Projects</option>
        <option value={'/education'}>Education</option>
        <option value={'/achievements'}>Achievements</option>
        <option value={'/contact'}>Contact</option>
    </select>
  )
}

export default Dropdown