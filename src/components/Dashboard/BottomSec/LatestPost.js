import React from 'react';
import { Card, Avatar, Button } from 'antd';

const data = [
  {
    id: 1,
    date: '3 days ago',
    user: {
      image: `https://joeschmoe.io/api/v1/random`,
      name: 'John Doe'
    },
    post: {
      title: 'Hello World!'
    },
    content: 'Well, the way they make shows is, they make one show ...'
  },
  {
    id: 2,
    date: '4 days ago',
    user: {
      image: `https://joeschmoe.io/api/v1/female/random`,
      name: 'John Doe'
    },
    post: {
      title: 'Hello World!'
    },
    content: 'After the avalanche, it took us a week to climb out. Now...'
  },
  {
    id: 3,
    date: '5 days ago',
    user: {
      image: `https://joeschmoe.io/api/v1/male/random`,
      name: 'John Doe'
    },
    post: {
      title: 'Hello World!'
    },
    content: "My money's in that office, right? If she start giving me..."
  }
];

const LatestPost = () => (
  <Card className="cardSHA h-100">
    <div className="pb-2 border-bottom">
      <h6 className="m-0">Discussions</h6>
    </div>
    {data &&
      data.map((item, idx) => (
        <div
          key={`abc${idx}`}
          className="col-12 p-0 pt-2 pb-2 border-bottom d-flex align-items-center"
        >
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={item.user.image}
            className="mr-3"
          />
          <div className="discus">
            <div className="d-flex align-items-center">
              <p className="fnt-barlow fnt-600 fnt-md">
                {item.user.name} on {item.post.title}, {item.date}
              </p>
            </div>
            <p className="fnt-msrt fnt-300 fnt-xs" style={{ marginTop: -12 }}>
              {item.content}
            </p>
            <div className="d-flex align-items-center">
              <Button className="antd-ghost-btn-primary sm-btn">Accept</Button>
              <Button className="antd-ghost-btn-primary sm-btn">Reject</Button>
              <Button className="antd-ghost-btn-primary sm-btn">Edit</Button>
            </div>
          </div>
        </div>
      ))}
    <div className="col-12 mt-2 p-0 text-center">
      <Button className="antd-ghost-btn-primary mt-4">
        Check All Comments
      </Button>
    </div>
  </Card>
);

export default LatestPost;
