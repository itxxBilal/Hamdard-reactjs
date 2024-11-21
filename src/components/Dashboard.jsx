import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({ addImage, editImage, deleteImage }) => {
  const [formData, setFormData] = useState({
    url: "",
    caption: "",
    tag: "",
    category: "",
    description: "",
    imageFile: null, // For image file upload
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addImage({
          id: Date.now(),
          url: reader.result,
          caption: formData.caption,
          tag: formData.tag,
          category: formData.category,
          description: formData.description,
        });
      };
      reader.readAsDataURL(formData.imageFile);
    } else if (formData.url) {
      addImage({
        id: Date.now(),
        url: formData.url,
        caption: formData.caption,
        tag: formData.tag,
        category: formData.category,
        description: formData.description,
      });
    }

    setFormData({
      url: "",
      caption: "",
      tag: "",
      category: "",
      description: "",
      imageFile: null,
    });
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            placeholder="Enter image URL"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Caption</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter caption"
            value={formData.caption}
            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tag</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter tag"
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select category</option>
            <option value="Recent">Recent</option>
            <option value="Medical">Medical</option>
            <option value="Filter Plant">Filter Plant</option>
            <option value="Qabarstan">Qabarstan</option>
            <option value="Ambulance">Ambulance</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
