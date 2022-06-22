import fetcher from "../api/fetcher";

const getUserInfo = async (userId) => {
  try {
    const res = await fetcher(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userId}`
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log("Error looking for user");
  }
};

export default getUserInfo;
