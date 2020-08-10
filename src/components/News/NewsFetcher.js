import React, { useState, useEffect, Fragment } from 'react';
import Post from './Post';
import axios from 'axios';
import newsStyles from './newsFetcher.module.scss';

const NewsFetcher = (fetchPosts) => {
  const [posts, setPosts] = useState({ hits: [] });

  //I will fetch the first 10 posts from the json placeholder and allocate to the data variable.

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        'https://jsonplaceholder.typicode.com/posts/?_limit=10'
      );
      setPosts({ hits: data });
    };
    fetchData();
  }, [setPosts]);

  return (
    <div className={newsStyles.mainContainer}>
      <div className={newsStyles.container}>
        <div className={newsStyles.newsTitle}>
          <h1>News</h1>
        </div>

        <div>
          {posts.hits &&
            posts.hits.map((item) => (
              <div className={newsStyles.postsList} key={item.id}>
                <h1 className={newsStyles.postsTitle}>{item.title}</h1>
                <p className={newsStyles.postsParagraph}>{item.body}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFetcher;
