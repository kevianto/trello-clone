import React from "react";
import { Lists } from "../constants/Types";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";

function MyLists(content: Lists) {
  const first = content[0];

  return (
    <div className="flex-1 flex-wrap justify-start text-gray-800">
      {content.map((item, index) => (
        <div className="bg-white text-black flex-1 max-w-[300px] px-1 pb-2">
          <div className="flex flex-row justify-between items-center text-center font-semibold p-2">
            <p className="text-lg underline tracking-wide capitalize">
              {item.Title}
            </p>
            <div className="text-gray-500 font-bold tracking-wide text-xl bg-slate-300 pb-3 px-3 rounded-md">
              ...
            </div>
          </div>

          <div className="gap-2 bg-blue-200 rounded-lg p-2">
            <p>{item.Items[0].Name}</p>
            <div className="flex felx-row justify-start items-center gap-3">
              <div className="bg-blue-500 flex flex-row gap-2">
                {" "}
                <AiOutlineLike />
                {item.Items[0].Likes}{" "}
              </div>
              <div className="bg-blue-500 flex flex-row gap-2">
                {" "}
                <GoComment />
                {item.Items[0].Comments.length}{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyLists;

{
  /* <div className="bg-white text-black flex-1 max-w-[300px] px-1 pb-2">
            <div className="flex flex-row justify-between items-center text-center font-semibold p-2">
                <p className="text-lg underline tracking-wide capitalize">{first.Title}</p>
                <div className="text-gray-500 font-bold tracking-wide text-xl bg-slate-300 pb-3 px-3 rounded-md">...</div>
            </div>

            <div className="gap-2 bg-blue-200 rounded-lg p-2">
              <p>{first.Items[0].Name}</p>
              <div className="flex felx-row justify-start items-center gap-3">
                <div className="bg-blue-500 flex flex-row gap-2"> <AiOutlineLike />{first.Items[0].Likes} </div>
                <div className="bg-blue-500 flex flex-row gap-2"> <GoComment />{first.Items[0].Comments.length} </div>
              </div>
            </div>
        </div> */
}
