import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';

const RelatedPostsComponent = () => {
  const posts = [
    { title: "Review sân Pickleball tại đường 286 Nguyễn Xiển", date: "03/08/2024", link: "#" },
    { title: "Thử sức với môn thể thao Pickleball", date: "05/08/2024", link: "#" },
  ];

  return (
    <div className="related-posts">
      <h2>Bài viết liên quan</h2>
      {posts.map((post, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>Ngày đăng: {post.date}</Card.Text>
            <Button variant="primary" href={post.link}>
              <FaExternalLinkAlt /> Xem thêm
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RelatedPostsComponent;
