import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import LoadingSpinner from '../../../LoadingSpinner';
import { FaEdit, FaEye, FaToggleOff, FaToggleOn, FaTrashAlt, FaTrash,FaTag } from "react-icons/fa";
import { toast } from 'react-toastify';
import PostService from '../../../services/post/PostService';
import { Link } from "react-router-dom";


const PostIndex = () => {
    const [load, setLoad] = useState(0);
    const [posts, setposts] = useState([]);
    const [countall, setCountAll] = useState(0);
    const [counttrash, setCountTrash] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    //getListpost
    useEffect(function () {
        setIsLoading(true);
        (async function () {
            const result = await PostService.index();
            setposts(result.posts);
            setCountAll(result.count_all);
            setCountTrash(result.count_trash);
            setIsLoading(false);
        })();
    }, [load])
    //deletepost
    const handleDelete = (id) => {
        (async function () {
            const result = await PostService.destroy(id);
            if (result.status === true) {
                setLoad(Date.now());
                toast.success(result.message);
            }
        })();
    }
    //status
    const handleStatus = (id) => {
        (async function () {
            const result = await PostService.status(id);
            if (result.status === true) {
                setLoad(Date.now());
                toast.success(result.message);
            }
        })();
    }

    return (
        <>
            <section className="hdl-content">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-12">
                            {/* <!--CONTENT  --> */}
                            <div className="content">
                                <section className="content-header my-2">
                                    <h1 className="d-inline">Quản lý bài viết</h1>
                                    <a href="/admin/post/create" className="btn-add">Thêm mới</a>
                                    <div className="row mt-3 align-items-center">
                                        <div className="col-6">
                                            <ul className="manager">
                                                <li><a href="post_index.html">Tất cả (123)</a></li>
                                                <li><a href="#">Xuất bản (12)</a></li>
                                                <li><a href="/admin/post/trash">Rác (12)</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 text-end">
                                            <input type="text" className="search d-inline" />
                                            <button className="d-inline btnsearch">Tìm kiếm</button>
                                        </div>
                                    </div>
                                    <div className="row mt-1 align-items-center">
                                        <div className="col-md-8">
                                            <select name="" className="d-inline me-1">
                                                <option value="">Hành động</option>
                                                <option value="">Bỏ vào thùng rác</option>
                                            </select>
                                            <button className="btnapply">Áp dụng</button>
                                            <select name="" className="d-inline me-1">
                                                <option value="">Chủ đề</option>
                                            </select>
                                            <button className="btnfilter">Lọc</button>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination pagination-sm justify-content-end">
                                                    <li className="page-item disabled">
                                                        <a className="page-link">&laquo;</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">&raquo;</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </section>
                                <section className="content-body my-2">

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="text-center" style={{ width: 30 }}>
                                                    <input type="checkbox" id="checkboxAll" />
                                                </th>
                                                <th className="text-center" style={{ width: 130 }}>Hình ảnh</th>
                                                <th>Tiêu đề bài viết</th>
                                                <th>Tên danh mục</th>
                                                <th className="text-center" style={{ width: 30 }}>ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {posts && posts.map(function (post, index) {
                                                return (
                                                    <tr key={index} className="dataitem">
                                                        <td className="text-center align-middle">
                                                            <input type="checkbox" name="id[]" />
                                                        </td>
                                                        <td>
                                                            <img src={urlImage + "post/" + post.image} className="img-fluid" alt="Hinh" />
                                                        </td>
                                                        <td>
                                                            <div className="name">
                                                                <Link to={'/admin/post/edit/' + post.id}>
                                                                    {post.title}
                                                                </Link>
                                                            </div>
                                                            <div className="function_style">
                                                                <button
                                                                    onClick={() => handleStatus(post.id)}
                                                                    className={post.status === 1 ? "border-0 px-1 text-success" : "border-0 px-1 text-danger"}>
                                                                    {post.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                                                </button>
                                                                <Link to="#" className="px-1 text-success">
                                                                </Link>
                                                                <Link to={'/admin/post/edit/' + post.id} className="px-1 text-primary">
                                                                    <FaEdit />
                                                                </Link>
                                                                <Link to={'/admin/post/show/' + post.id} className="px-1 text-info">
                                                                    <FaEye />
                                                                </Link>
                                                                <button onClick={() => handleDelete(post.id)} className="border-0 px-1 text-danger"><FaTrashAlt /></button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                {post.price}
                                                            </div>
                                                            <div className="function_style">

                                                                <Link to={'/admin/post/storesale/' + post.id} className="px-1 text-info">
                                                                    <FaTag />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>{post.category ? post.category.name : 'N/A'}</td>
                                                        <td>{post.brand ? post.brand.name : 'N/A'}</td>

                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>

                                </section>
                            </div>
                            {/* <!--END CONTENT--> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PostIndex;