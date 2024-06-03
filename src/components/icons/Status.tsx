import React from 'react'

const Status = ({ etat, size }: { size: string, etat: boolean }) => {
  const statusClass = etat ? 'bg-success-500' : 'bg-tertiary-900';
  return (
    <div className={`rounded-full ${statusClass} ${size}`}>
    </div>
  )
}

export default Status
