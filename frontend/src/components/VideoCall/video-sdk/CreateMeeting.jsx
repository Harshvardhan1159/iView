import { startInterview } from "../../../api/Interview/interview.api";
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlMzRjMjc2NS0xM2Y5LTQzYzUtYmFkYy0xNzE3NDcyNWNmYzIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTc1NTc5NjgyNywiZXhwIjoxOTEzNTg0ODI3fQ.kr24kymnmKZbdoAHgX50C4krUnnz9cMp4812MAM2bYI";

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




