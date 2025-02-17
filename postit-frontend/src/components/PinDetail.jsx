import { DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { client, urlFor } from "../client";
import { pinDetailMorePinQuery, pinDetailQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const PinDetail = ({ user }) => {
  const { pinId } = useParams();
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState("");
  const [addingComment, setAddingComment] = useState(false);

  useEffect(() => {
    const fetchPinDetails = () => {
      const query = pinDetailQuery(pinId);
      if (query) {
        client.fetch(query).then((data) => {
          setPinDetail(data[0]);
          if (data[0]) {
            const morePinsQuery = pinDetailMorePinQuery(data[0]);
            client.fetch(morePinsQuery).then(setPins);
          }
        });
      }
    };

    fetchPinDetails();
  }, [pinId]);

  const addComment = () => {
    if (comment.trim()) {
      setAddingComment(true);
      client
        .patch(pinId)
        .setIfMissing({ comments: [] })
        .insert("after", "comments[-1]", [
          {
            comment: comment.trim(),
            _key: uuidv4(),
            postedBy: { _type: "postedBy", _ref: user._id },
          },
        ])
        .commit()
        .then(() => {
          setComment("");
          setAddingComment(false);
          // Re-fetch pin details after adding the comment
          client.fetch(pinDetailQuery(pinId)).then((data) => setPinDetail(data[0]));
        });
    }
  };

  if (!pinDetail) return <Spinner message="Loading pin" />;

  return (
    <>
      <div
        className="flex xl:flex-row flex-col m-auto bg-white"
        style={{ maxWidth: "1500px", borderRadius: "32px" }}
      >
        <div className="flex justify-center items-center md:items-start flex-initial">
          <img
            className="rounded-t-3xl rounded-b-lg"
            src={pinDetail?.image && urlFor(pinDetail?.image).url()}
            alt="user-post"
            loading="lazy"
          />
        </div>
        <div className="w-full p-5 flex-1 xl:min-w-620">
          <div className="flex items-center justify-between">
            <a
              href={`${pinDetail.image.asset.url}?dl=`}
              download
              className="bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100"
              aria-label="Download image"
            >
              <DownloadIcon />
            </a>
          </div>
          <h1 className="text-4xl font-bold break-words mt-3">
            {pinDetail.title}
          </h1>
          <p className="mt-3">{pinDetail.about}</p>
          <Link
            to={`/user-profile/${pinDetail?.postedBy._id}`}
            className="flex gap-2 mt-5 items-center bg-white rounded-lg"
            aria-label="User Profile"
          >
            <img
              src={pinDetail?.postedBy.image}
              className="w-10 h-10 rounded-full"
              alt="user-profile"
              loading="lazy"
            />
            <p className="font-bold">{pinDetail?.postedBy.userName}</p>
          </Link>

          <h2 className="mt-5 text-2xl">Comments</h2>
          <div className="max-h-370 overflow-y-auto">
            {pinDetail?.comments?.map((comment) => (
              <div
                className="flex gap-2 mt-5 items-center bg-white rounded-lg"
                key={comment._key}
              >
                <img
                  src={comment.postedBy?.image}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  alt="user-profile"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <p className="font-bold">{comment.postedBy?.userName}</p>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap mt-6 gap-3">
            <Link to={`/user-profile/${user._id}`}>
              <img
                src={user.image}
                className="w-10 h-10 rounded-full cursor-pointer"
                alt="user-profile"
                loading="lazy"
              />
            </Link>
            <input
              className="flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300"
              type="text"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="button"
              className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-base outline-none"
              onClick={addComment}
              disabled={addingComment}
              aria-label="Post comment"
            >
              {addingComment ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      </div>

      {pins?.length > 0 ? (
        <>
          <h2 className="text-center font-bold text-2xl mt-8 mb-4">
            More like this
          </h2>
          <MasonryLayout pins={pins} />
        </>
      ) : (
        <Spinner message="Loading more pins" />
      )}
    </>
  );
};

export default PinDetail;
