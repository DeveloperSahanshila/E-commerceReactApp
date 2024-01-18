import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="loading">
      <ClipLoader
        color="#36d7b7"
        size={50}
        cssOverride={{ margin: "0 auto" }}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loading;
