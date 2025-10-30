import { useState } from 'react';

function AddItem() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'lost',
    category: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Item Submitted');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4">Report Lost or Found Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Item Title</label>
          <input type="text" name="title" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea name="description" className="form-control" onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label>Type</label>
          <select name="type" className="form-select" onChange={handleChange}>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Category</label>
          <input type="text" name="category" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Location</label>
          <input type="text" name="location" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Upload Image</label>
          <input type="file" name="image" className="form-control" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Item</button>
      </form>
    </div>
  );
}

export default AddItem;
