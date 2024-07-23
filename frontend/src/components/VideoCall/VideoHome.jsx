import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoHome = () => {
  const [value, setValue] = useState("213");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/interview/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <input 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        type='text' 
        placeholder='Enter room code' 
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
};

export default VideoHome;
