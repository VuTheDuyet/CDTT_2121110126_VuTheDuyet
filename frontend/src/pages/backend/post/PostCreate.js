import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import TopicService from "../../../services/topic/TopicService";
import PostService from "../../../services/post/PostService";

const PostCreate = () => {
    const navigate = useNavigate();

    // State variables
    const [topics, setTopics] = useState([]);
    const [toppic_id, setToppic_id] = useState('');
    const [title, setTitle] = useState(null);
    const [slug, setSlug] = useState(null);
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState(2);
    const [description, setDescription] = useState('');

    // Fetch topics on component mount
    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const result_topic = await TopicService.index('index');
                setTopics(result_topic.topics);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };

        fetchTopics();
    }, []);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const image = document.querySelector("#image");
        const post = new FormData();
        
        post.append('topic_id', toppic_id);
        post.append('detail', detail);
        post.append("title", title);
        post.append("description", description);
        post.append('status', status);
        post.append("image", (image.files.length === 0) ? "" : image.files[0]);

        (async () => {
            try {
                const result = await PostService.store(post);
                if (result.status === true) {
                    toast.success(result.message);
                    navigate('/admin/post/index', { replace: true });
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        })();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="content">
                <section className="content-header my-2">
                    <h1 className="d-inline">Thêm bài viết</h1>
                    <div className="text-end">
                        <a href="/admin/post/Index" className="btn btn-sm btn-success">
                            <i className="fa fa-arrow-left"></i> Về danh sách
                        </a>
                    </div>
                </section>
                <section className="content-body my-2">

                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label><strong>Tiêu đề bài viết (*)</strong></label>
                                <input type="text" value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control" placeholder="Nhập tiêu đề" />
                            </div>
                            <div className="mb-3">
                                <label><strong>Chi tiết (*)</strong></label>
                                <textarea name="detail" rows="7" value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control"
                                    placeholder="Nhập chi tiết"></textarea>
                            </div>
                            <div className="mb-3">
                                <label><strong>Mô tả (*)</strong></label>
                                <textarea name="description" rows="4" value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="form-control" placeholder="Mô tả"></textarea>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box-container mt-4 bg-white">
                                <div className="box-header py-1 px-2 border-bottom">
                                    <strong>Đăng</strong>
                                </div>
                                <div className="box-body p-2 border-bottom">
                                    <p>Chọn trạng thái đăng</p>
                                    <select
                                        value={status}
                                        className="form-select">
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Chưa xuất bản</option>
                                    </select>
                                </div>
                                <div className="box-footer text-end px-2 py-3">
                                    <button type="submit" class="btn btn-success" name="THEM">
                                        <i class="fa fa-save"></i> Lưu[Thêm]
                                    </button>
                                </div>
                            </div>
                            <div className="box-container mt-2 bg-white">
                                <div className="box-header py-1 px-2 border-bottom">
                                    <strong>Chủ đề (*)</strong>
                                </div>
                                <div className="box-body p-2 border-bottom">
                                    <select
                                        value={toppic_id}  
                                        onChange={(e) => setToppic_id(e.target.value)} 
                                        className="form-select">
                                        <option value="">Chọn chủ đề</option>
                                        {topics && topics.map((pos, index) => {
                                            return (<option key={index} value={pos.id}>{pos.name}</option>);
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="box-container mt-2 bg-white">
                                <div className="box-header py-1 px-2 border-bottom">
                                    <strong>Hình đại diện</strong>
                                </div>
                                <div className="box-body p-2 border-bottom">
                                    <input type="file" id="image" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </form>
    );
}
export default PostCreate;