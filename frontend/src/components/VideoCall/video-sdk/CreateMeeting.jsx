export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkYzdkNzcyNy1hZmZhLTQyY2EtYmI5NS04MmE2MWMzZTgzNzAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczMTY0NTcyOSwiZXhwIjoxNzMyMjUwNTI5fQ.JuxIHK_ypaZ94Gk-KMi1SqH5-U3Ik6lANeCrsTh3MFA";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
