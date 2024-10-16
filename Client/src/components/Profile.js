import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/screens/Profile.css';
import { MdModeEdit } from "react-icons/md";
import AvatarBlank from '../assets/avt-blank.jpg';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);  // State để lưu dữ liệu profile
  const [loading, setLoading] = useState(true);  // State để hiển thị trạng thái loading
  const [error, setError] = useState(null);  // State để xử lý lỗi
  const [isEditing, setIsEditing] = useState(false);  
  const [updatedProfile, setUpdatedProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Giả sử bạn lưu token trong localStorage
        const token = localStorage.getItem('token');  

        if (!token) {
          setError('Token không hợp lệ, vui lòng đăng nhập lại');
          navigate('/login');  // Điều hướng về trang login nếu không có token
          return;
        }

        const response = await fetch('https://bepickleball.vercel.app/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // Thêm token vào headers
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfileData(data.profile);  // Cập nhật dữ liệu profile
          setLoading(false);
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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://bepickleball.vercel.app/api/auth/profile/update', {
        method: 'PUT',  // Sử dụng PUT để cập nhật
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),  // Gửi dữ liệu cập nhật
      });

      if (response.ok) {
        const data = await response.json();
        alert('Cập nhật hồ sơ thành công!');
        setProfileData(data.profile);  // Cập nhật dữ liệu profile mới
        setIsEditing(false);  // Đóng form chỉnh sửa
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
            src={profileData.profile.avatar || AvatarBlank}
            alt="Avatar"
            className="profile-avatar"
          />
          <h2>{profileData.profile.name || 'Tên chưa cập nhật'}</h2>
          <p className="profile-role">{profileData.role.toUpperCase()}</p>
        </div>

        <div className="profile-body">
          <div className="profile-info">
            <label>Tài khoản:</label>
            <p>{profileData.username} &nbsp; <span><MdModeEdit /></span></p>
            
          </div>
          <div className="profile-info">
            <label>Email:</label>
            <p>{profileData.email}</p>
          </div>
          <div className="profile-info">
            <label>Số điện thoại:</label>
            <p>{profileData.phone}</p>
          </div>
          <div className="profile-info">
            <label>Cấp độ kỹ năng:</label>
            <p>{profileData.profile.skill_level || 'Chưa cập nhật'} &nbsp; <span><MdModeEdit /></span></p>
          </div>
          <div className="profile-info">
            <label>Tiểu sử:</label>
            <p>{profileData.profile.bio || 'Chưa cập nhật tiểu sử'} &nbsp; <span><MdModeEdit /></span></p>
          </div>
          <div className="profile-info">
            <label>Liên hệ khác:</label>
            <p>{profileData.profile.phone_number || 'Chưa có số liên hệ'} &nbsp; <span><MdModeEdit /></span></p>
          </div>
          <div className="profile-info">
            <label>Facebook:</label>
            <p>
              {profileData.profile.facebook_link ? (
                <a href={profileData.profile.facebook_link} target="_blank" rel="noopener noreferrer">
                  Facebook cá nhân
                </a> 
              ) : (
                'Chưa cập nhật'
              )}
               &nbsp; <span><MdModeEdit /></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
