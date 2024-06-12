import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);

    fetch("/auth/google/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleLoginFailure = (response) => {
    console.error("Login Failed:", response);
  };

  return (
    <GoogleOAuthProvider clientId="1037345644281-eigiedgrilfd2n26h4rjb3hesv4m558n.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
