import { useEffect, useState } from "react";
import Post from "./Post";
import Tags from "./Tags";

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/posts')
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    return (
      <div>
        <h2>This is Home </h2>
         <Tags/>
        {data.map( dt => <Post post={dt} key={dt.id} />)}
      </div>
    );
};

export default Home;