import React from 'react';
import Tittle from '../components/Tittle';
import allBlogs from '../components/allBlogs';

function BlogsPage() {
    return (
        <div >
            <div className="b-title">
                <Tittle title={'Blog'} span={'Blog'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <h2>{blog.title}</h2>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogsPage;
