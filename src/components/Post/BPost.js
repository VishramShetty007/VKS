import { Avatar, Button } from 'antd';
import style from './bpost.module.scss';
import { BsBookmark } from 'react-icons/bs';

const data = {
  data1: [
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=1`,
      date: '29 February 2019',
      color: '#264653',
      avatar: `https://joeschmoe.io/api/v1/random`,
      body: 'Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...',
      topName: 'Travel',
      user: 'Anna Ken',
      head: 'Extremity so attending objection as engrossed'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=2`,
      date: '29 February 2019',
      color: '#ffb703',
      avatar: `https://joeschmoe.io/api/v1/female/random`,
      body: 'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
      topName: 'Technology',
      user: 'Anna Ken',
      head: 'Attention he extremity unwilling on otherwise cars backwards yet'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=3`,
      date: '29 February 2019',
      color: '#e9c46a',
      avatar: `https://joeschmoe.io/api/v1/male/random`,
      body: 'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
      topName: 'Business',
      user: 'Anna Ken',
      head: 'Attention he extremity unwilling on otherwise cars backwards yet'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=4`,
      date: '29 February 2019',
      color: '#e63946',
      avatar: `https://joeschmoe.io/api/v1/random`,
      body: 'Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...',
      topName: 'Travel',
      user: 'Anna Ken',
      head: 'Extremity so attending objection as engrossed'
    }
  ],
  data2: [
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=10`,
      date: '29 February 2019',
      color: '#264653',
      avatar: `https://joeschmoe.io/api/v1/male/random`,
      body: 'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
      topName: 'Travel',
      user: 'John James',
      head: 'Totally words widow one downs few age every seven if miss part by fact'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=11`,
      date: '29 February 2019',
      color: '#ffd60a',
      avatar: `https://joeschmoe.io/api/v1/female/random`,
      body: 'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
      topName: 'Travel',
      user: 'John James',
      head: 'Totally words widow one downs few age every seven if miss part by fact'
    }
  ],
  data3: [
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=15`,
      date: '29 February 2019',
      color: '#264653',
      avatar: `https://joeschmoe.io/api/v1/male/random`,
      body: 'In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...',
      topName: 'Travel',
      user: 'John James',
      head: 'Had denoting properly jointure which well books beyond'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=20`,
      date: '29 February 2019',
      color: '#264653',
      avatar: `https://joeschmoe.io/api/v1/male/random`,
      body: 'In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...',
      topName: 'Travel',
      user: 'John James',
      head: 'Had denoting properly jointure which well books beyond'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=25`,
      date: '29 February 2019',
      color: '#264653',
      avatar: `https://joeschmoe.io/api/v1/random`,
      body: 'In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...',
      topName: 'Travel',
      user: 'John James',
      head: 'Had denoting properly jointure which well books beyond'
    }
  ],
  data4: [
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=5`,
      date: '29 February 2019',
      color: '#264653',
      avatar: `https://joeschmoe.io/api/v1/female/random`,
      body: 'Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...',
      topName: 'Travel',
      user: 'Anna Ken',
      head: 'Extremity so attending objection as engrossed'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=6`,
      date: '29 February 2019',
      color: '#ffb703',
      avatar: `https://joeschmoe.io/api/v1/female/random`,
      body: 'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
      topName: 'Technology',
      user: 'Anna Ken',
      head: 'Attention he extremity unwilling on otherwise cars backwards yet'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=8`,
      date: '29 February 2019',
      color: '#e9c46a',
      avatar: `https://joeschmoe.io/api/v1/male/random`,
      body: 'Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...',
      topName: 'Business',
      user: 'Anna Ken',
      head: 'Extremity so attending objection as engrossed'
    },
    {
      bgImg: `https://source.unsplash.com/random/250x250?sig=9`,
      date: '29 February 2019',
      color: '#e63946',
      avatar: `https://joeschmoe.io/api/v1/random`,
      body: 'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
      topName: 'Travel',
      user: 'Anna Ken',
      head: 'Attention he extremity unwilling on otherwise cars backwards yet'
    }
  ]
};

const BPost = () => {
  return (
    <>
      <div className={`${style.grid_1row} mt-2 mb-5 p-0`}>
        {data &&
          data.data1.map((item, idx) => (
            <div key={`card1${idx}`} className="cardSHA h-100">
              <div
                className={style.cardIMG}
                style={{ backgroundImage: `url(${item.bgImg})` }}
              >
                <span
                  className={style.cat}
                  style={{ backgroundColor: `${item.color}`, color: '#fff' }}
                >
                  {item.topName}
                </span>
                <Avatar src={item.avatar} className={style.avaIMG} />
              </div>
              <div className={style.cardB}>
                <p className={style.pHead}>{item.head}</p>
                <p className={style.pBody}>{item.body}</p>
                <p className={style.pDate}>{item.date}</p>
              </div>
            </div>
          ))}
      </div>
      <div className={`${style.grid_2row} mt-2 mb-5 p-0`}>
        {data &&
          data.data2.map((item, idx) => (
            <div
              key={`card4${idx}`}
              className={`${style.cardDiv} cardSHA h-100`}
            >
              <div
                className={style.cardIMG1}
                style={{ backgroundImage: `url(${item.bgImg})` }}
              >
                <span
                  className={style.cat1}
                  style={{ backgroundColor: `${item.color}`, color: '#fff' }}
                >
                  {item.topName}
                </span>
                <Avatar src={item.avatar} className={style.avaIMG1} />
              </div>
              <div className={style.cardB}>
                <p className={style.pHead}>{item.head}</p>
                <p className={style.pBody}>{item.body}</p>
                <p className={style.pDate}>{item.date}</p>
              </div>
            </div>
          ))}
      </div>
      <div className={`${style.grid_3row} mt-2 mb-5 p-0`}>
        {data &&
          data.data3.map((item, idx) => (
            <div key={`card2${idx}`} className={`cardSHA h-100`}>
              <div className={style.cardB}>
                <p className={style.pHead}>{item.head}</p>
                <p className={style.pBody}>{item.body}</p>
              </div>
              <div className={`${style.footC} border-top`}>
                <div className={`${style.authC} d-flex`}>
                  <Avatar src={item.avatar} className={style.avaIMG3} />
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <p className={style.authN1}>{item.user}</p>
                    <p className={style.pDate1}>{item.date}</p>
                  </div>
                </div>
                <div className="my-auto ml-auto">
                  <Button className="antd-ghost-btn-primary d-flex align-items-center sm-btn">
                    <BsBookmark className="mr-2" />
                    Bookmark
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={`${style.grid_4row} mt-2 mb-5 p-0`}>
        {data &&
          data.data4.map((item, idx) => (
            <div key={`card3${idx}`} className="cardSHA h-100">
              <div
                className={style.cardIMG}
                style={{ backgroundImage: `url(${item.bgImg})` }}
              ></div>
              <div className={style.cardB}>
                <p className={style.pHead}>{item.head}</p>
                <p className={style.pBody}>{item.body}</p>
                <p className={style.authN}>
                  {item.user} in {item.topName}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BPost;
