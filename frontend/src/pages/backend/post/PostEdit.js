import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../LoadingSpinner';
import { toast } from 'react-toastify';
import PostService from '../../../services/post/PostService';

const PostEdit = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [loading, setLoading] = useState(true);


   // State variables
   const [topics, setTopics] = useState([]);
   const [toppic_id, setToppic_id] = useState('');
   const [title, setTitle] = useState('');
   const [slug, setSlug] = useState('');
   const [detail, setDetail] = useState('');
   const [type, setType] = useState('');
   const [status, setStatus] = useState(2);
   const [description, setDescription] = useState('');

   useEffect(() => {
      (async () => {
         try {
            const result = await PostService.show(id);
            setTitle(result.topic.title);
            setSlug(result.topic.slug);
            setDescription(result.topic.description);
            setDetail(result.topic.detail);
            setStatus(result.topic.status);
            setToppic_id(result.topic.topic_id);
         } catch (error) {
            console.error('Error fetching category data:', error);
         } finally {
            // Đã load dữ liệu xong, ẩn biểu tượng loading
            setLoading(false);
            console.log(1,title);
            console.log(2,slug);
            console.log(3,description);
            console.log(4,detail);
            console.log(5,status);

         }
      })();
   }, [id]);

   const handleFormSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const post = new FormData();
      post.append('topic_id', toppic_id);
      post.append('detail', detail);
      post.append('title', title);
      post.append("description", description);
      post.append('status', status);
      post.append("image", (image.files.length === 0) ? "" : image.files[0]);

      (async () => {
         const result = await PostService.update(post, id);
         toast.success(result.message);
         navigate("/admin/post/index", { replace: true });
      })();
   };
   return (
      <form onSubmit={handleFormSubmit}>
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Cập nhật bài viết</h1>
               <div className="text-end">
                  <a href="/admin/post/Index" className="btn btn-sm btn-success">
                     <i className="fa fa-arrow-left"></i> Về danh sách
                  </a>
               </div>
            </section>
            <section className="content-body my-2">
               {loading && <LoadingSpinner />}
               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label><strong>Tiêu đề bài viết (*)</strong></label>
                        <input
                           type="text"
                           name="title"
                           onChange={(e) => { setTitle(e.target.value) }}
                           value={title}
                           className="form-control"
                           required
                        />
                     </div>
                     <div className="mb-3">
                        <label><strong>Slug (*)</strong></label>
                        <input
                           type="text"
                           name="slug"
                           value={slug}
                           onChange={(e) => { setSlug(e.target.value) }}
                           className="form-control"
                           placeholder="Slug"
                        />
                     </div>
                     <div className="mb-3">
                        <label><strong>Chi tiết (*)</strong></label>
                        <textarea
                           name="detail"
                           type="text"
                           value={detail}
                           onChange={(e) => { setDetail(e.target.value) }}
                           className="form-control"
                           placeholder="Nhập chi tiết"
                        ></textarea>
                     </div>
                     <div className="mb-3">
                        <label><strong>Mô tả (*)</strong></label>
                        <textarea
                           name="description"
                           type="text"
                           value={description}
                           onChange={(e) => { setDescription(e.target.value) }}
                           placeholder="Mô tả"
                        ></textarea>
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
                              name="status"
                              type="text"
                              value={status}
                              onChange={(e) => { setStatus(e.target.value) }}
                              className="form-select"
                           >
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                           <button type="submit" className="btn btn-success btn-sm text-end">
                              <i className="fa fa-save" aria-hidden="true"></i> Lưu cập nhật
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Chủ đề (*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select
                              name="topic_id"
                              value={toppic_id}
                              onChange={(e) => { setTitle(e.target.value) }}
                              className="form-select"
                           >
                              <option value="">Chọn chủ đề</option>
                              {/* Đổ danh sách chủ đề từ API hoặc state */}
                           </select>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Hình đại diện</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <input
                              type="file"
                              name="image"
                              className="form-control"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </form>
   );
};

export default PostEdit;
