import React, { useState, useEffect } from 'react';
import TopicService from '../../../services/topic/TopicService';
import { toast } from 'react-toastify';

const TopicIndex = () => {
    const [topics, setTopics] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        status: 1,
    });

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        try {
            const result = await TopicService.index();
            if (result.status) {
                setTopics(result.topics);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error fetching topics:', error);
            toast.error('Failed to fetch topics');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

   

    const clearForm = () => {
        setFormData({
            name: '',
            description: '',
            status: 1,
        });
    };

    return (
        <>
            <section className="hdl-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <section className="content-header my-2">
                                    <h1 className="d-inline">Chủ đề bài viết</h1>
                                    <hr style={{ border: 'none' }} />
                                </section>
                                <section className="content-body my-2">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form >
                                                <div className="mb-3">
                                                    <label><strong>Tên chủ đề (*)</strong></label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder="Tên chủ đề"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label><strong>Mô tả</strong></label>
                                                    <textarea
                                                        name="description"
                                                        rows="6"
                                                        value={formData.description}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder="Mô tả"
                                                    ></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <label><strong>Trạng thái</strong></label>
                                                    <select
                                                        name="status"
                                                        value={formData.status}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    >
                                                        <option value="1">Xuất bản</option>
                                                        <option value="2">Chưa xuất bản</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3 text-end">
                                                    <button type="submit" class="btn btn-success" name="THEM">
                                                        <i class="fa fa-save"></i> Lưu[Thêm]
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row mt-3 align-items-center">
                                                <div className="col-12">
                                                    <ul className="manager">
                                                        <li><a href="brand_index.html">Tất cả (123)</a></li>
                                                        <li><a href="#">Xuất bản (12)</a></li>
                                                        <li><a href="brand_trash.html">Rác (12)</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row my-2 align-items-center">
                                                <div className="col-md-6">
                                                    <select name="" className="d-inline me-1">
                                                        <option value="">Hành động</option>
                                                        <option value="">Bỏ vào thùng rác</option>
                                                    </select>
                                                    <button className="btnapply">Áp dụng</button>
                                                </div>
                                                <div className="col-md-6 text-end">
                                                    <input type="text" className="search d-inline" />
                                                    <button className="d-inline">Tìm kiếm</button>
                                                </div>
                                            </div>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" style={{ width: 30 }}>
                                                            <input type="checkbox" id="checkboxAll" />
                                                        </th>
                                                        <th>Tên chủ đề</th>
                                                        <th>Mô tả</th>
                                                        <th>Trạng thái</th>
                                                        <th className="text-center" style={{ width: 30 }}>ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {topics.map((topic) => (
                                                        <tr key={topic.id} className="datarow">
                                                            <td>
                                                                <input type="checkbox" id={`checkId-${topic.id}`} />
                                                            </td>
                                                            <td>
                                                                <div className="name">
                                                                    <a href={`topic_edit.html?id=${topic.id}`}>
                                                                        {topic.name}
                                                                    </a>
                                                                </div>
                                                                <div className="function_style">
                                                                    <a href="#" className="text-success mx-1">
                                                                        <i className="fa fa-toggle-on"></i>
                                                                    </a>
                                                                    <a href={`topic_edit.html?id=${topic.id}`} className="text-primary mx-1">
                                                                        <i className="fa fa-edit"></i>
                                                                    </a>
                                                                    <a href={`topic_show.html?id=${topic.id}`} className="text-info mx-1">
                                                                        <i className="fa fa-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="text-danger mx-1">
                                                                        <i className="fa fa-trash"></i>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>{topic.description}</td>
                                                            <td>{topic.status === 1 ? 'Xuất bản' : 'Chưa xuất bản'}</td>
                                                            <td className="text-center">{topic.id}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopicIndex;
