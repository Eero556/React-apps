import React from 'react'
import Modal from 'react-modal';
import {useState} from "react"
import MovieListItem from './MovieListItem';
function Modalmodel(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () =>{
        setIsOpen(true)
    }
    const closeModal = () =>{
        setIsOpen(false)
    }
  return (
    <div>
    <button onClick={openModal}>Open Modal</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      <div>
        <p>{props.jotai}</p>
      </div>
      </Modal >
  </div>
  )
}

export default Modalmodel