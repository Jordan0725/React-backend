import React from 'react'

function EditDepoimento() {
  return (
    <div>
        <div className='EditC-header'>
            <h4>Editar depoimentos :</h4>
        </div>
        <div className='EditC'>
            <div className='EditC-containers'>
                <p>Depoimentos 1:</p>
                <div className='EditC-ID'>
                    <h1>ID</h1>
                    <span>Atual:</span>
                </div>
                <div className='Input-depoimentos'>
                    <input placeholder='Ex: 123456'></input>
                </div>
            </div>
            <div className='EditC-containers'>
                <p>Depoimentos 2:</p>
                <div className='EditC-ID'>
                    <h1>ID</h1>
                    <span>Atual:</span>
                </div>
                <div className='Input-depoimentos'>
                    <input placeholder='Ex: 123456'></input>
                </div>
            </div>
            <div className='EditC-containers'>
                <p>Depoimentos 3:</p>
                <div className='EditC-ID'>
                    <h1>ID</h1>
                    <span>Atual:</span>
                </div>
                <div className='Input-depoimentos'>
                    <input placeholder='Ex: 123456'></input>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default EditDepoimento
