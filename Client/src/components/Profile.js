import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/screens/Profile.css';
import { MdModeEdit } from "react-icons/md";
import AvatarBlank from '../assets/avt-blank.jpg';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState({});  // Để theo dõi trường nào đang được chỉnh sửa
  const [updatedProfile, setUpdatedProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          setError('Token không hợp lệ, vui lòng đăng nhập lại');
          navigate('/login');
          return;
        }

        const response = await fetch('https://bepickleball.vercel.app/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfileData(data.profile);
          setLoading(false);
          // Khởi tạo updatedProfile với dữ liệu hiện có
          setUpdatedProfile(data.profile);
        } else {
          const errorData = await response.json();
          setError(errorData.message || 'Có lỗi xảy ra khi tải thông tin hồ sơ');
        }
      } catch (error) {
        setError('Lỗi kết nối tới máy chủ');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));  // Chuyển trạng thái chỉnh sửa cho trường tương ứng
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://bepickleball.vercel.app/api/auth/profile/update', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Cập nhật hồ sơ thành công!');
        setProfileData(data.profile);
        setIsEditing({});  // Đóng tất cả các trường chỉnh sửa
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Có lỗi xảy ra khi cập nhật hồ sơ');
      }
    } catch (error) {
      alert('Lỗi kết nối tới máy chủ');
    }
  };

  if (loading) {
    return <p>Đang tải...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!profileData) {
    return <p>Không có dữ liệu hồ sơ</p>;
  }

  return (
    <div className="profile-container">
      <h1>Thông tin cá nhân</h1>
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={profileData.avatar || AvatarBlank}
            alt="Avatar"
            className="profile-avatar"
          />
          <h2>{profileData.name || 'Tên chưa cập nhật'}</h2>
          <p className="profile-role">{profileData.role}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="profile-body">
            <div className="profile-info">
              <label>Tài khoản:</label>
              {isEditing.username ? (
                <input
                  type="text"
                  name="username"
                  value={updatedProfile.username || ''}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{profileData.username || 'Chưa cập nhật'} &nbsp; <span onClick={() => handleEditToggle('username')}><MdModeEdit /></span></p>
              )}
            </div>
            <div className="profile-info">
              <label>Email:</label>
              {isEditing.email ? (
                <input
                  type="email"
                  name="email"
                  value={updatedProfile.email || ''}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{profileData.email || 'Chưa cập nhật'} &nbsp; <span onClick={() => handleEditToggle('email')}><MdModeEdit /></span></p>
              )}
            </div>
            <div className="profile-info">
              <label>Số điện thoại:</label>
              {isEditing.phone ? (
                <input
                  type="tel"
                  name="phone"
                  value={updatedProfile.phone || ''}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{profileData.phone || 'Chưa cập nhật'} &nbsp; <span onClick={() => handleEditToggle('phone')}><MdModeEdit /></span></p>
              )}
            </div>
            <div className="profile-info">
              <label>Cấp độ kỹ năng:</label>
              {isEditing.skill_level ? (
                <input
                  type="text"
                  name="skill_level"
                  value={updatedProfile.skill_level || ''}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.skill_level || 'Chưa cập nhật'} &nbsp; <span onClick={() => handleEditToggle('skill_level')}><MdModeEdit /></span></p>
              )}
            </div>
            <div className="profile-info">
              <label>Tiểu sử:</label>
              {isEditing.bio ? (
                <textarea
                  name="bio"
                  value={updatedProfile.bio || ''}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.bio || 'Chưa cập nhật tiểu sử'} &nbsp; <span onClick={() => handleEditToggle('bio')}><MdModeEdit /></span></p>
              )}
            </div>
            <div className="profile-info">
              <label>Liên hệ khác:</label>
              {isEditing.phone_number ? (
                <input
                  type="text"
                  name="phone_number"
                  value={updatedProfile.phone_number || ''}
                  onChange={handleChange}
                />
              ) : (
                <p>{profileData.phone_number || 'Chưa có số liên hệ'} &nbsp; <span onClick={() => handleEditToggle('phone_number')}><MdModeEdit /></span></p>
              )}
            </div>
            <div className="profile-info">
              <label>Facebook:</label>
              {isEditing.facebook_link ? (
                <input
                  type="url"
                  name="facebook_link"
                  value={updatedProfile.facebook_link || ''}
                  onChange={handleChange}
                />
              ) : (
                <p>
                  {profileData.facebook_link ? (
                    <a href={profileData.facebook_link} target="_blank" rel="noopener noreferrer">
                      Facebook cá nhân
                    </a>
                  ) : (
                    'Chưa cập nhật'
                  )} &nbsp; <span onClick={() => handleEditToggle('facebook_link')}><MdModeEdit /></span>
                </p>
              )}
            </div>
          </div>

          {/* Nút lưu thay đổi chỉ hiển thị khi có ít nhất một trường đang chỉnh sửa */}
          {Object.values(isEditing).some(edit => edit) && (
            <button type="submit" className="button-save">Lưu thay đổi</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
