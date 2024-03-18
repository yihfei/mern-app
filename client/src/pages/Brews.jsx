import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'



export default function Brews() {
  const { currentUser } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch ('/api/post/getposts');
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, [currentUser._id]);


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Brews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{post.coffeeName}</h2>
            <p><span className="font-semibold">Brewing Method:</span> {post.brewingMethod}</p>
            <p><span className="font-semibold">Brew Time:</span> {post.brewTime}</p>
            <p><span className="font-semibold">Grind Size:</span> {post.grindSize}</p>
            <p><span className="font-semibold">Water Temperature:</span> {post.waterTemperature}</p>
            <p><span className="font-semibold">Coffee Water Ratio:</span> {post.coffeeWaterRatio}</p>
            <div>
              <span className="font-semibold">Notes:</span>
              <div dangerouslySetInnerHTML={{ __html: post.notes }} />
            </div>
          </div>
      ))}
    </div>
  </div>
  )
}
