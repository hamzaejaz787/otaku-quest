const Spinner = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="loadingSpinner w-16 h-16 border-8 border-gray-500 rounded-full animate-spin"></div>

        <h1 className="text-white pl-4 text-lg">Please Wait ⏳</h1>
      </div>
    </>
  );
};

export default Spinner;
