
function Card({username="ayushi"}) {
    return (
      <>
       
        <div className=" relative h-[400px] w-[300px] rounded-md ">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
            alt=""
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{username}</h1>
            <p className="mt-2 text-sm text-gray-300">
              I am a software developer with a passion for creating innovative
              solutions. I have a strong background in programming languages
              such as JavaScript, Python, and C++. I am also experienced in
              working with various frameworks and libraries, including React,
              Angular, and Vue.js. I am a quick learner and always looking to
              improve my skills and knowledge.
            </p>
            <button className="bg-green-400 p-2 mt-2 inline-flex cursor-pointer items-center text-sm font-semibold">
              view profile
            </button>
          </div>
        </div>

        <p></p>
      </>
    ); 
}
export default Card;