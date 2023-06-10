import React, { useState } from 'react'
import './ConfirmDelete.css'
import ListPosts from '../../api/ListPosts'

const ConfirmDelete = (props) => {
    const handleDeletePost = ()=>{
        ListPosts.deletePost(props.idDelete).then(() =>{
        props.handleUpdate();
        props.handelCloseDel();
        } )
    }
    return (
        <div className='modal'>
            <div className='modal-delete'>
                <p>Do you want to delete this post ?</p>
                <div className='modal-delete-button'>
                    <button onClick={()=> handleDeletePost()}>Yes</button>
                    <button onClick={()=>props.handelCloseDel()}>No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete
