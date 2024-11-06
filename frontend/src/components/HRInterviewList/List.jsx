import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Card
          key={index}
          imgSrc={item.imgSrc}
          hrCompanyLogo={item.hrCompanyLogo}
          hrName={item.hrName}
          position={item.position}
          date={item.date}
          time={item.time}
          resumePDF={item.resumePDF}
          status={item.status}
          userEmail={item.userEmail}
          userImage={item.userImage}
        />
      ))}
    </div>
  );
};

export default CardList;
