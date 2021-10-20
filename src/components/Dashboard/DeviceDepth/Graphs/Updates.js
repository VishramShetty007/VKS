import style from '../deviceDepth.module.scss';

const Updates = () => {
  const updateData = [
    {
      title: 'Update Patch 32.1',
      status: 'System Update is available',
      color: '#007bff'
    },
    {
      title: 'System Updated',
      status: 'New data is linked successfully',
      color: 'rgba(1, 138, 203, 0.2)'
    },
    {
      title: 'System Updated',
      status: 'New data is linked successfully',
      color: 'rgba(1, 138, 203, 0.2)'
    },
    {
      title: 'System Updated',
      status: 'New data is linked successfully',
      color: 'rgba(1, 138, 203, 0.2)'
    }
  ];

  return (
    <div className={`${style.panel} mb-4 p-3 p-md-4`}>
      <h3
        className="fnt-lato fnt-mlg mb-2 fnt-500 pb-3"
        style={{
          borderBottom: 'solid 1px #e3e3e3'
        }}
      >
        Updates
      </h3>
      {updateData &&
        updateData.map((item, index) => {
          return (
            <div
              style={{ borderLeft: `solid 2px ${item.color}` }}
              key={`Update${index}`}
              className="p-1 mb-2"
            >
              <p className={`${style.updatetitle} ml-2`}>{item.title}</p>
              <p className={`${style.updateStatus} ml-2`}>{item.status}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Updates;
