import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import axios from "axios";
import "./postNew.css";

const StyledEditorContainer = styled.div`
  .ck-editor__editable {
    height: 300px;
  }
`;
export default function PostNews({ onClose }) {
  const [formBody, setFormBody] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    tags: "",
    user: "",
    thumbnail: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormBody({
      ...formBody,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormBody({
      ...formBody,
      thumbnail: file,
    });
  };

  const hanldePost = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", formBody.title);
    formData.append("content", formBody.content);
    formData.append("author", formBody.user);
    formData.append("category", formBody.category);
    formData.append("tags", formBody.tags);
    formData.append("description", formBody.description);
    formData.append("thumbnail", formBody.thumbnail);
    console.log(formData);

    const response = await axios.post(
      "http://localhost:8088/articles",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!response.ok) {
      return alert("Failed to submit form" + response);
    }

    const data = response;
    alert("Success:", data);
  };

  const handleEditorChange = (event, editor) => {
    try {
      const data = editor.getData();
      setFormBody({
        ...formBody,
        content: data, // Update content state with CKEditor data
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="popup ">
      <div className="popup-content w-3/4 h-4/5  flex flex-col items-center overflow-auto">
        <h2>Tạo bài đăng mới</h2>
        <div className="flex justify-center w-full font-sans text-sm">
          <form action="" className="w-4/5" id="form">
            <div className="flex flex-col   ">
              <label htmlFor="title" className=" mb-2 ">
                Tiêu đề
              </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleInputChange}
                placeholder="Vui lòng nhập tiêu đề"
                className="w-full h-10 border rounded px-4  bg-slate-100  focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>

            <div className="flex flex-col   ">
              <label htmlFor="description" className=" mb-2 ">
                Mô tả
              </label>
              <input
                type="text"
                name="description"
                id="description"
                onChange={handleInputChange}
                placeholder="Vui lòng nhập mô tả"
                className="w-full h-10 border rounded px-4  bg-slate-100  focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>

            <div className="mt-2 flex flex-col min-h-max ">
              {/* <MyCkeditor /> */}
              <h2>CKEditor</h2>
              <StyledEditorContainer>
                <CKEditor
                  editor={Editor}
                  data={formBody.content}
                  onChange={handleEditorChange}
                />
              </StyledEditorContainer>
              <div className="flex flex-row justify-between items-center  mt-4">
                <div className="basic-1/3">
                  <label htmlFor="title" className=" mb-2 ">
                    Tác giả
                  </label>
                  <input
                    type="text"
                    name="user"
                    id="user"
                    value={formBody.user}
                    onChange={handleInputChange}
                    placeholder="Vui lòng nhập tên tác giả"
                    className="w-full h-10 border rounded px-4  bg-slate-100  focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="basis-1/3">
                  <label
                    for="categoty"
                    className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Thể loại
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={formBody.category}
                    onChange={handleInputChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Chọn thể loại tại đây</option>
                    <option value="67089f497e844af26ec9d1e7">Tin tức</option>
                    <option value="67089f557e844af26ec9d1e9">Sự kiện</option>
                    <option value="6708a04b76e5cfba9f4b6dc3">
                      Hoạt động đoàn
                    </option>
                  </select>
                </div>
                <div className="basis-1/3">
                  <label htmlFor="tags" className=" mb-2 ">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    value={formBody.tags}
                    onChange={handleInputChange}
                    placeholder="Ví dụ tag1, tag2, ..."
                    className="w-full h-10 border rounded px-4  bg-slate-100  focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      name="thumbnail"
                      onChange={handleFileChange}
                      type="file"
                      class=" text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "
                    />{" "}
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-4 mb-8 flex flex-auto justify-end  w-4/5 ">
          <button
            className="font-medium text-slate-500 rounded-xl flex justify-center items-center h-10 min-w-max px-12 py-4 bg-white border border-1 border-slate-500"
            onClick={onClose}
          >
            Dong
          </button>
          <button
            className="ml-4 font-medium  text-white rounded-xl flex justify-center items-center h-10 min-w-max px-12 py-4 bg-slate-500"
            onClick={hanldePost}
          >
            Tao bai
          </button>
        </div>
      </div>
    </div>
  );
}
