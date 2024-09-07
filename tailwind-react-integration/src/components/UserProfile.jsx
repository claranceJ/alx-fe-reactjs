function UserProfile() {
    return (
      <div className="sm:max-w-xs sm:p-4 md:max-w-sm md:p-8 user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
        <img className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full w-36 h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="sm:text-sm md:text-base md:text-xl text-xl text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
        <p className=" sm:text-sm md:text-base md:text-lg  text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;
 