import React, { useState } from "react";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import SlideBar from "./SliceBar";
import { useDispatch, useSelector } from "react-redux";
import ListPosts from "../../api/ListPosts";
import { CallListPosts } from "../../redux/reducer/ListPostSlice";

const PostAdmin = () => {
    const dispatch = useDispatch();
const listPosts = useSelector((state) => state.listPosts);
console.log(listPosts);

  const handleDeletePostAmin = (id) => {
        ListPosts.deletePost(id).then(()=>
        {
            dispatch(CallListPosts()).unwrap();
        });
  };
    return (
        <>
            <div className="content-user">
                <SlideBar />
                <div className="table-content">
                    <div className="wrapper-title">
                    <i class="fa-solid fa-arrow-right"></i>
                        <h1 className="title-page">ADMIN PAGES</h1>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>IdUser</th>
                                <th>Image</th>
                                <th>Title</th>
                        
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listPosts.map((post,index)=>{
                                return (
                                    <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.userId}</td>
                                    <td>
                                        <div className="content-img">
                                            <img src={post.image} alt="product" className="content-img-file" />
                                        </div>
                                    </td>
                                    <td>{post.content}</td>
                              
                                   
                                    <td>
                                       
                                        <AiFillDelete className="btn-delete" onClick={ () => { handleDeletePostAmin(post.id)}} />
                                    </td>
                                </tr>
                                )
                            })}
                           
                        </tbody>
                    </table>
                   
                   
                </div>
            </div>
        </>
    );
};
export default PostAdmin;
