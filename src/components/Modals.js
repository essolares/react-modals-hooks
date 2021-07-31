import React from 'react'
import Modal from './Modal'
import { useModal } from '../hooks/useModal'

const Modals = () => {
    const [isOpen1,openModal1,closeModal1] = useModal(false);
    const [isOpen2,openModal2,closeModal2] = useModal(false);

    return (
        <div>
            <h2>Modals</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpen1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Modal 1 content</p>
                <img src="https://placeimg.com/400/400/sports" alt="Sports" />
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpen2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Modal 1 content</p>
                <img src="https://placeimg.com/400/400/music" alt="Music" />
            </Modal>
        </div>
    )
}

export default Modals
