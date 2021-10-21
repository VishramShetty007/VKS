import { Dropdown, Badge, Button } from 'antd';
import { GrNotification } from 'react-icons/gr';
import { FcAssistant, FcBullish, FcApproval } from 'react-icons/fc';

const data = [
  {
    icon: <FcAssistant style={{ fontSize: 20 }} />,
    name: 'Sales',
    content:
      'Last week your site sales have decreased by 5.5%. It could be worse.'
  },
  {
    icon: <FcBullish style={{ fontSize: 20 }} />,
    name: 'Analytics',
    content: 'Sales can go up if you target more users in India.'
  },
  {
    icon: <FcApproval style={{ fontSize: 20 }} />,
    name: 'Approved',
    content: 'Your site has been approved by www'
  }
];

const menu = (
  <div className="cardSHA col-12 p-3 h-100">
    {data &&
      data.map((item, idx) => (
        <div
          key={`${idx}name`}
          className="d-flex mb-2 pb-2 border-bottom align-items-center justify-content-start"
        >
          <p className="m-0 p-0 mr-3">{item.icon}</p>
          <div>
            <p className="m-0 p-0 fnt-barlow fnt-600">{item.name}</p>
            <p className="m-0 p-0 fnt-msrt fnt-400">{item.content}</p>
          </div>
        </div>
      ))}
    <Button className="antd-ghost-btn-primary mt-2">
      View All Notification
    </Button>
  </div>
);

const Dropdown2 = () => {
  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Badge
        count={data.length}
        overflowCount={8}
        className="ml-2 mr-3"
        style={{ cursor: 'pointer' }}
      >
        <GrNotification
          className="ml-2"
          style={{ cursor: 'pointer', fontSize: 22 }}
        />
      </Badge>
    </Dropdown>
  );
};

export default Dropdown2;
