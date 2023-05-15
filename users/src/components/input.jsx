import React from 'react'

export default function Input({label,type,handleChange,id}) {
  return (
    <div className="md-3">
    <label className='mb-2' htmlFor="phone">{label}:</label>
    <input
    onChange={(e)=>handleChange(e.target.value)}
      id={id}
      className="form-control"
      type={type}
    />
  </div>
  )
}
