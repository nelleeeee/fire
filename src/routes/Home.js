import React, { useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("nweet").add({
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={nweet}
          onChange={onChange}
          placeholder="what?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
