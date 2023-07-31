import React from 'react'

const Card = ({ glass }) => {
  return (
    <div className='modelCard row justify-content-around'>
      <div className='mt-5 col-6'>
        <div className="card position-relative w-50 m-auto" style={{overflow: 'hidden'}}>
          <img src="/images/jpg/model.jpg" className="card-img-top" alt="..." />
          <img className="imgCustom position-absolute" src={glass.url} alt="..." style={{opacity: .8}} />
          <div className="position-absolute bottom-0 text-center card-body">
            <h5 className="card-title d-inline-block">{glass.name}</h5>
            <span className='ms-5 fs-4 rounded-pill badge text-bg-info'>{glass.price} $</span>
            <p className="card-text">{glass.desc}</p>
          </div>
        </div>
      </div>
      <div className='mt-5 col-6'>
        <div className="card w-50 m-auto">
        <img src="/images/jpg/model.jpg" alt="..." />
        </div>
      </div>
    </div>
  )
}

export default Card